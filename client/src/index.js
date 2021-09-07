import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoadingPage from './pages/LoadingPage';
import CheckParkingPage from './pages/BookingPage';
ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/loading" component={LoadingPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/Book" component={CheckParkingPage} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
