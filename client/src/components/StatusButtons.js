import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

const StatusButtons = props => {

    const onClickHandler = (playerStatus) => {
        const newStatus = {
            num: getGameNum(),
            status: playerStatus
        };
        axios.put("http://localhost:8000/api/players/" + props.player._id, newStatus)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    const getGameNum = () => {
        if (props.gameNum === "1") {
            return(1);
        } else if (props.gameNum === "2") {
            return(2);
        } else if (props.gameNum === "3") {
            return(3);
        } else {
            return(undefined);
        }
    };

    return(
        <div>
            <Button variant="contained" onClick={ () => {onClickHandler("Playing")} }>Playing</Button>
            <Button variant="contained" onClick={ () => {onClickHandler("Not Playing")} }>Not Playing</Button>
            <Button variant="contained" onClick={ () => {onClickHandler("Undecided")} }>Undecided</Button>
        </div>
    );
}

export default StatusButtons;