import React from 'react';
import { InputLabel, OutlinedInput } from '@material-ui/core';

const AddPlayer = props => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return(
        <div>
            <h2>Add Player</h2>
            <form onSubmit={onSubmitHandler}>
                <InputLabel>Player Name</InputLabel>
                <OutlinedInput type="text"/>
                <InputLabel>Prefered Position</InputLabel>
                <OutlinedInput type="text"/>
                <br/>
                <OutlinedInput type="submit"/>
            </form>
        </div>
    );
};

export default AddPlayer;