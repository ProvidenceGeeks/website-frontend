import * as React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />

      <NavigationBar />
    </div>
  );
};

Home.propTypes = {
  children: PropTypes.element
};

export default Home;