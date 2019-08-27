import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./Lamp";

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
                <Lamp on />
                <Lamp />
                <Quote
                    quote="I believe the children are the future... Unless we stop them now!"
                    character="Homer Simpson"
                    image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
                />
                <Quote
                    quote="Me fail English? That's unpossible"
                    character="Ralph Wiggum"
                    image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
                />
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