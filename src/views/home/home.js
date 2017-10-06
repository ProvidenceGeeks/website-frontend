import * as React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div id="home">
        { this.props.children }
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};