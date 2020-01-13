import React from 'react';
import './App.css';
import List from './List.jsx';
import View from './View.jsx';
import UpdateCreate from './UpdateCreate.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/view/:id" children={ <RouteView /> }>
          </Route>
          <Route path="/update/:id" children={ <RouteUpdate /> }>
          </Route>
          <Route path="/create" children={ <RouteCreate /> }>
          </Route>
        </Switch>
    </Router>
  );
}

function RouteView() {
  const { id } = useParams();
  return (<View id={id} />);
}

function RouteUpdate() {
  const { id } = useParams();
  return (<UpdateCreate id={id} />);
}

function RouteCreate() {
  return (<UpdateCreate  />);
}

export default App;
