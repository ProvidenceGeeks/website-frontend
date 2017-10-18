import * as React from 'react';
import PropTypes from 'prop-types';
import Home from '../../views/home/home';
import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap.scss';

export default class Bootstrap extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className='container-fluid'>
        <Home />
      </div>
    );
  }
}

Bootstrap.propTypes = {
  children: PropTypes.element
};