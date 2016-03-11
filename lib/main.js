import ReactDOM from "react-dom";
import React from "react";
import { App, Action } from "@yuzu/yep-app";
import { ProvidedAppDelegate } from "@yuzu/yep-app/providers";
import { component } from "@yuzu/yep-app/decorators";

import { SpecRegistration, ActionSpec } from "@yuzu/yep-app/di";

// Action.ns("main")
// class DoSomething extends Action {
//     constructor() {
//         super();
//     }

//     exec() {
//         console.log("Gonna do something in the action");
//     }
// }

// @component("main")
// class MainComponent {
//     register() {
//         new SpecRegistration(
//             new ActionSpec("doSomething", DoSomething)
//         );
//     },
// }

const actions = {
    doSomething() {
        console.log("Did something: " + task);
    }
};

App.run(
    new App.Components(),
    new App.Config(),
    new ProvidedAppDelegate({
        onReady() {
            run();
        },
        onBootstrapped(container) {
            container.$actions.doSomething = actions.doSomething;
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
