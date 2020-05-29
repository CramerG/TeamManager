import React, { useState } from 'react';
import { InputLabel, OutlinedInput } from '@material-ui/core';
import axios from 'axios';
import {navigate} from '@reach/router';

const AddPlayer = props => {
    const [playerName, setPlayerName] = useState("");
    const [playerPosition, setPlayerPosition] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newPlayer = {
            name: playerName,
            position: playerPosition,
            game1: "Undecided",
            game2: "Undecided",
            game3: "Undecided"
        };
        axios.post("http://localhost:8000/api/players", newPlayer)
            .then(res => {
                console.log(res);
                navigate("/players");
            })
            .catch(err => console.log(err));
    };

    return(
        <div>
            <h2>Add Player</h2>
            <form onSubmit={onSubmitHandler}>
                <InputLabel>Player Name</InputLabel>
                <OutlinedInput type="text" onChange={ (e) => setPlayerName(e.target.value) }/>
                <InputLabel>Prefered Position</InputLabel>
                <OutlinedInput type="text" onChange={ (e) => setPlayerPosition(e.target.value) }/>
                <br/>
                <OutlinedInput type="submit"/>
            </form>
        </div>
    );
};

export default AddPlayer;