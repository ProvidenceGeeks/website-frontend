import * as React from 'react';
import PropTypes from 'prop-types';
import Home from '../../views/home/home';
import Header from '../header/header';
import './bootstrap.scss';

export default class Bootstrap extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className='container-fluid'>
        <Header />
        <Home />
      </div>
    );
  }
}

Bootstrap.propTypes = {
  children: PropTypes.element
};