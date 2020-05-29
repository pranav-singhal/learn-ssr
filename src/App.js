import React from 'react';

import './App.scss';
import Home from "./components/Home";
import { Route, Switch, NavLink } from 'react-router-dom';
import Todos from "./components/Todos";
import Posts from './components/Posts'

function App() {
  return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>

        <Switch>
          <Route
              exact
              path="/"
              render={props => <Home name="Luke , i am ur developer" {...props} />}
          />
          <Route path="/todos" component={Todos} />
          <Route path="/posts" component={Posts} />

        </Switch>
      </div>
  );
}

export default App;
