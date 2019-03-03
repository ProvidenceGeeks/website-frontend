import * as React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

const Loader = ({ message })=>{
  return (
    <div className='loader-container'>
      <div className='loader' />
      <span className='loader-message'>{message}</span>
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string
};

export default Loader;