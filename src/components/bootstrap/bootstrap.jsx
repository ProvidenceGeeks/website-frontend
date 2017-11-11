import * as React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Home from '../../views/home/home';
import Footer from '../footer/footer';
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

        <Footer />
      </div>

    );
  }
}

Bootstrap.propTypes = {
  children: PropTypes.element
};