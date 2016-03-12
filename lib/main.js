import ReactDOM from "react-dom";
import React from "react";
import { App } from "spak";
import { ProvidedAppDelegate } from "spak/providers";
import { component, inject } from "spak/decorators";
import StorageComponent from "@yuzu/storage";
import { ModelData } from "@yuzu/storage";
import { SpecRegistration, ActionSpec, SpecFromFn, SpecRef } from "spak-di";
import DIBuilder from "spak-di/lib/DIBuilder";
import StoreValue from "storeit-value";

// STORAGE ADAPTER for Domain Model

// Implements Player (the model), PlayerMD (model data)
class StoredPlayer extends ModelData {
    get points() {
        return Number(this._storeVal.get("points") || 0);
    }
    addPoints(points) {
        this._storeVal.set({ "points": this.points + points });
    }
}

function createMainPlayer(stores) {
    return new StoredPlayer(
        new StoreValue(stores.players, { id: "main-player" })
    );
}

// ACTIONS

@inject("mainPlayer", "stores")
class StartGame {
    constructor(mainPlayer, stores) {
        this._player = mainPlayer;
        this._stores = stores;
    }
    exec({ presenter }) {
        // HACK!
        // Needed because storage waits for authenticated session to load all.
        // Since we never authenticate... we need to manually load.
        App.session().isAuthenticated = true; // storage loadAll checks if authenticated.
        this._stores.loadAll();
        // END HACK

        presenter.showGame(this._player.points);
    }
}

@inject("mainPlayer")
class AddPoints {
    constructor(mainPlayer) {
        this._player = mainPlayer;
    }
    exec({ points, presenter }) {
        this._player.addPoints(points);
        presenter.updatePointTotal(this._player.points);
    }
}

// APP COMPONENTS

@component("main")
class MainComponent {
    onBeforeAppBootstrapped() {
        this.config.stores.push({ namespace: "players" });
    }
    register() {
        return new SpecRegistration(
            new ActionSpec("startGame", StartGame),
            new ActionSpec("addPoints", AddPoints),
            new SpecFromFn("mainPlayer", createMainPlayer)
                .setFirstArg(new SpecRef("stores"))
        );
    }
}

// UI

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: props.points
        };
    }

    _addPoints() {
        console.log("Dispatching an action from the Main ui component!");
        App.dispatchAction("addPoints", { points: 10, presenter: this });
    }

    updatePointTotal(points) {
        this.setState({ points });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <h1>Let's Play!</h1>
                    <h2>Points: {this.state.points}</h2>
                    <button onClick={this._addPoints.bind(this)}>Add Points!</button>
                </div>
            </div>
        );
    }
}

var appPresenter = {
    startGame() {
        App.dispatchAction("startGame", { presenter: this });
    },
    showGame(playerPoints) {
        ReactDOM.render(<Main points={playerPoints}/>, document.querySelector("main"));
    }
};

// RUN THE APP!

App.run(
    new App.Components(
        new MainComponent(),
        new StorageComponent()
    ),
    new App.Config(),
    new ProvidedAppDelegate({
        createSpecsBuilder() {
            return new DIBuilder();
        },
        onBootstrapped(container) {
            console.log("App Bootstrapped");
            console.dir("Container: ", container);
        },
        onReady() {
            appPresenter.startGame();
        }
    })
);
