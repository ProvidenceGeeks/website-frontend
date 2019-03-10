import * as React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

export const LOADING_STATES = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};

const Loader = (props)=>{
  let data;
    
  switch (props.status) {

    case LOADING_STATES.LOADING:
      data = <div className='loader-container'>
        <div className='loader' />
        <span className='loader-message'>{props.loadingMessage}</span>
      </div>;
      break;
    case LOADING_STATES.LOADED:
      data = props.children;
      break;
    case LOADING_STATES.ERROR:
    default:
      data = <div className="message error">
        <p>{props.errorMessage}</p>
      </div>;
      break;
    
  }

  return data;
};

Loader.propTypes = {
  loadingMessage: PropTypes.string,
  errorMesage: PropTypes.string,
  children: PropTypes.node,
  status: PropTypes.string
};

export default Loader;