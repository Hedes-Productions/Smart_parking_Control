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
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/loading" component={LoadingPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/book" component={CheckParkingPage} />
          <Route exact path="/pricing/:userId" component={PricingPage} />
          <Route exact path="/check/:userId" component={CheckSpacePage} />
          <Route exact path="/error/404" component={UserNotFound} />
          <Route exact path="/admin" component={AdminPagePrivate} />
          <Route exact path="/adlogin" component={AdminLoginPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);

{
  /* <React.StrictMode>
    <BuildingMap3D />
  </React.StrictMode> */
}
