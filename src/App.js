import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./Lamp";
import Character from "./Character";

class App extends Component {
    render() {
        const isWorking = this.state.working ? 'working' : 'notWorking';

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className={isWorking} alt="logo" />
                    <h1 className="App-title">Simpsons Quotes</h1>
                    <button
                        onClick={() => this.handleClick()}
                        className="button">Homer is {isWorking.toUpperCase()}
                    </button>

                    <figure className={isWorking} />
                </header>

                <Character />

                <Lamp on />
                <Lamp />


            </div>
        );

    }

    handleClick = () => {
        this.setState({ working: !this.state.working });

    };

    constructor(props) {
        super(props);
        this.state = {
            working: props.working
        };
    }
}

export default App;