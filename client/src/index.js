import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoadingPage from './pages/LoadingPage';
import CheckParkingPage from './pages/BookingPage';
import PricingPage from './pages/PricingPage';
import CheckSpacePage from './pages/CheckSpacePage';
import BuildingMap3D from './BuildingMap3D';
import UserNotFound from './pages/UserNotFound';
import AdminPage from './pages/AdminPage';
import AdminPagePrivate from './pages/AdminPagePrivate';
import AdminLoginPage from './pages/AdminLoginPage';
import { Provier } from 'react-redux';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/loading" component={LoadingPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/book" component={CheckParkingPage} />
        <Route exact path="/pricing/:userId" component={PricingPage} />
        <Route exact path="/check" component={CheckSpacePage} />
        <Route exact path="/error/404" component={UserNotFound} />
        <Route exact path="/admin" component={AdminPagePrivate} />
        <Route exact path="/adlogin" component={AdminLoginPage} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

{
  /* <React.StrictMode>
    <BuildingMap3D />
  </React.StrictMode> */
}
