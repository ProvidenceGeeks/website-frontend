import * as React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div id="home">
        <Header />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};