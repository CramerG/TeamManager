import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import DeleteButton from './DeleteButton';
const List = props => {
    const [players, setPlayers] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => console.log(err));
    }, [players]) 

    return(
        <div>
            <h2>Players</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Player</TableCell>
                            <TableCell>Position</TableCell>
                            <TableCell>Available Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map( (player, idx) => {
                            return(
                                <TableRow key={idx}>
                                    <TableCell>{player.name}</TableCell>
                                    <TableCell>{player.position}</TableCell>
                                    <TableCell>
                                        <DeleteButton></DeleteButton>
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

export default List;