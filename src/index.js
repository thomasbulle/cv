import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';

ReactGA.initialize('UA-173602029-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
