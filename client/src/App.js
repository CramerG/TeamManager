import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import PlayerManage from './views/PlayerManage';
import List from './components/List';
import Status from './views/Status';
import AddPlayer from './components/AddPlayer';
import GameStatus from './components/GameStatus';

function App() {
  return (
    <div className="App">
      <h1>Team Manager</h1>
      <Link to="players/">Manage Players</Link>
      <Link to="status/game/1">Manage Player Status</Link>
      <Router>
        <PlayerManage path="players/">
          <List path="/"/>
          <AddPlayer path="add/"/>
        </PlayerManage>
        <Status path="status/">
          <GameStatus path="/game/:gameNum"/>
        </Status>
      </Router>
    </div>
  );
}

export default App;
