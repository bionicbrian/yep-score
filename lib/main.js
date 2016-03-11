import ReactDOM from "react-dom";
import React from "react";
import { App } from "spak";
import { ProvidedAppDelegate } from "spak/providers";
import { component } from "spak/decorators";

const doSomething = {
    componentName: "doSomething",
    exec({ task }) {
        console.log("Did something: " + task);
    }
};

class MainComponent {
    register() {
        return {
            $actions: [doSomething]
        };
    }
}
component("main")(MainComponent);

App.run(
    new App.Components(new MainComponent()),
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
