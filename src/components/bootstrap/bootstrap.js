import * as React from 'react';
import PropTypes from 'prop-types';
import './bootstrap.css';

export default class Bootstrap extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className='container-fluid'>
        { this.props.children }
      </div>
    );
  }
}

Bootstrap.propTypes = {
  children: PropTypes.element
};