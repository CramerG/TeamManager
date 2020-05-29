import React from 'react';
import {Link} from '@reach/router';

const PlayerManage = props => {

    return(
        <div>
            <Link to="/players">List</Link>
            <Link to="add/">Add Player</Link>
            {props.children}
        </div>
    );
}

export default PlayerManage;