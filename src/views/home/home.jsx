import * as React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import './home.scss';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="home">
        <HeroBanner />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};