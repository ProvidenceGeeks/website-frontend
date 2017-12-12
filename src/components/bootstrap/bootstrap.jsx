import * as React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
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

        { this.props.children }

        <Footer />
      </div>

    );
  }
}

Bootstrap.propTypes = {
  children: PropTypes.element
};