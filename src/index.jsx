import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Bootstrap from './components/bootstrap/bootstrap';
import Home from './views/home/home';
import PostDetails from './views/post-details/post-details';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Bootstrap}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/post/:id' component={PostDetails} />
    </Route>
  </Router>,
  document.getElementById('root')
);