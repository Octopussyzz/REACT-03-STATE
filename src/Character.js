import React from 'react'
import axios from "axios"

import DisplayCharacter from "./DisplayCharacter";
import "./Character.css"

class Character extends React.Component {

    state = {
        characters: [],
        isLoaded: false
    };

    getCharacters = async () => {
        const result = await axios("https://melroune.github.io/starwars-api/api/all.json");
        this.setState({characters: result.data, isLoaded: true})

        /*axios("https://melroune.github.io/starwars-api/api/all.json")
            .then(res => this.setState({characters: res.data, isLoaded: true}))*/

        /*fetch("https://melroune.github.io/starwars-api/api/all.json")
            .then(res => res.json())
            .then(res => this.setState({characters: res, isLoaded: true}))*/
    };

    componentDidMount() {
        this.getCharacters()
    }

    render() {
        return (
            <>
                {
                    !this.state.isLoaded ? (<div>Loading...</div>) :
                        (<div>Characters
                            {this.state.characters.map(character =>
                            <DisplayCharacter character={character} key={character.id}/> )}
                        </div>)
                }

            </>
        )
    }
}

export default Character