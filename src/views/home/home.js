import * as React from 'react';
import PropTypes from 'prop-types';
import Hello from '../../components/hello-world/hello';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div id="home">
        <Hello />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};