import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feedback from './Pages/Feedback';
import Game from './Pages/Game';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Ranking from './Pages/Ranking';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
          <Route path="/settings" component={Settings} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
