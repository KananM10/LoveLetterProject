import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Auth from './containers/Auth/Auth';
import Menu from './containers/Menu/Menu';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={() => <Menu userName="Kanan Mikayilov" />} />
          <Redirect to="/" />
        </Switch>
    </div>
  );
}

export default App;
