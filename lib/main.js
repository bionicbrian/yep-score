import React from "react";
import ReactDOM from "react-dom";

class Main extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <h1>Hello, world</h1>
                </div>
            </div>
        );
    }
}

const run = () => {
    ReactDOM.render(<Main />, document.querySelector("main"));
};

run();
