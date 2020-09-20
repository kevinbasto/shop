import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Routes importing
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import Orders from './Routes/Orders/Orders';
import Basket from './Routes/Basket/Basket';
import Profile from './Routes/Profile/Profile'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
