import * as React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import './bootstrap.scss';

const Bootstrap = (props) => {
  return (

    <div className='container-fluid'>
      <Header />

      { props.children }

      <Footer />
    </div>

  );
};

Bootstrap.propTypes = {
  children: PropTypes.element
};

export default Bootstrap;