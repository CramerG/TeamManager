import React from 'react';
import { Link } from '@reach/router';

const Status = props => {

    return(
        <div>
            <Link to="game/1">Game 1</Link>
            <Link to="game/2">Game 2</Link>
            <Link to="game/3">Game 3</Link>
            {props.children}
        </div>
    );
};

export default Status;