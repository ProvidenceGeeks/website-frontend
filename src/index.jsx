import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  runtime.register();
}

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}>
  </Router>,
  document.getElementById('root')
);