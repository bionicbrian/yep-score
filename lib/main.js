import ReactDOM from "react-dom";
import React from "react";
import { App } from "@yuzu/yep-app";
import { ProvidedAppDelegate } from "@yuzu/yep-app/providers";
import { component } from "@yuzu/yep-app/decorators";
import StorageComponent from "@yuzu/storage";
import { SpecRegistration, ActionSpec } from "@yuzu/yep-app/di";

class DoSomething {
    get componentName() { return "doSomething" }
    exec({ task }) {
        console.log("Did something: " + task);
    }
}

class MainComponent {
    register() {
        return new SpecRegistration(
            new ActionSpec(DoSomething)
        );
    }
}
component("main")(MainComponent);

App.run(
    new App.Components(
        new MainComponent(),
        new StorageComponent()
    ),
    new App.Config(),
    new ProvidedAppDelegate({
        onReady() {
            run();
        }
    })
);

class Main extends React.Component {
    _doSomething() {
        console.log("Dispatching an action from the Main ui component!");
        App.dispatchAction("doSomething", { task: "Do foo" });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <h1>Hello, world</h1>
                    <button onClick={this._doSomething.bind(this)}>Do the thing</button>
                </div>
            </div>
        );
    }
}

const run = () => {
    ReactDOM.render(<Main />, document.querySelector("main"));
};
