import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import StatusButtons from './StatusButtons';
const GameStatus = props => {
    const [players, setPlayers] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err));
    }, [players]);

    const getGameStatus = (player) => {
        if (props.gameNum === "1") {
            return(player.game1);
        } else if (props.gameNum === "2") {
            return(player.game2);
        } else if (props.gameNum === "3") {
            return(player.game3);
        }
        else {
            return(undefined);
        }
    }

    return(
        <div>
            <h2>Game {props.gameNum}</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Player</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map( (player, idx) => {
                            return(
                                <TableRow key={idx}>
                                    <TableCell>{player.name}</TableCell>
                                    <TableCell>{getGameStatus(player)}</TableCell>
                                    <TableCell>
                                        <StatusButtons gameNum={props.gameNum} player={player}/>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default GameStatus;