import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './components/bootstrap/bootstrap';
import Hello from './components/hello-world/hello';
import Home from './views/home/home';

ReactDOM.render(
  <Bootstrap>
    <Home>
      <Hello />
    </Home>
  </Bootstrap>,
  document.getElementById('root')
);