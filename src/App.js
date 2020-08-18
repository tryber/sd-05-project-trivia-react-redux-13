import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feedback from './Pages/Feedback';
import Game from './Pages/Game';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Ranking from './Pages/Ranking';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" Component={Login} />
          <Route exact path="/game" Component={Game} />
          <Route exact path="/settings" Component={Settings} />
          <Route exact path="/ranking" Component={Ranking} />
          <Route exact path="/feedback" Component={Feedback} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}