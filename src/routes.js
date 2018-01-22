import Bootstrap from './components/bootstrap/bootstrap';

// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

// Loading modules!
function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: '/',
  component: Bootstrap,
  indexRoute: {
    getComponent(location, cb) {
      System.import('./views/home/home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    }
  },
  childRoutes: [{
    path: '/post/:id',
    getComponent(location, cb) {
      System.import('./views/post-details/post-details')
        .then(loadRoute(cb, false))
        .catch(errorLoading);
    }
  }, {
    path: '*',
    getComponent(location, cb) {
      System.import('./views/home/home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    }
  }]
};