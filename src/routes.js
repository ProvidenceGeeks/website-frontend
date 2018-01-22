import Bootstrap from './components/bootstrap/bootstrap';

// thanks to https://brotzky.co/blog/code-splitting-react-router-webpack-2/!
function handleRouteLoadingError(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: '/',
  component: Bootstrap,
  indexRoute: {
    getComponent(location, cb) {
      import('./views/home/home')
        .then(loadRoute(cb))
        .catch(handleRouteLoadingError);
    }
  },
  childRoutes: [{
    path: '/post/:id',
    getComponent(location, cb) {
      import('./views/post-details/post-details')
        .then(loadRoute(cb, false))
        .catch(handleRouteLoadingError);
    }
  }, {
    path: '*',
    getComponent(location, cb) {
      import('./views/home/home')
        .then(loadRoute(cb))
        .catch(handleRouteLoadingError);
    }
  }]
};