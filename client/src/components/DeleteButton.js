import React from 'react';
import {Button} from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = props => {
    const onClickHandler = () => {
        axios.delete("http://localhost:8000/api/players/" + props.playerID)
            .then(res => {
                console.log(res);
                props.callback(props.playerID);
            })
            .catch(err => console.log(err))
    };

    return(
        <Button variant="contained" color="secondary" onClick={onClickHandler}>Delete</Button>
    );
}

export default DeleteButton;