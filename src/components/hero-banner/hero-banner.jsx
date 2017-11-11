import * as React from 'react';
import PropTypes from 'prop-types';
import './hero-banner.scss';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';

export default class HeroBanner extends React.Component {
  constructor() {
    super();

    const backgroundImages = [
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-1.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-2.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-3.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-4.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-5.jpg'
    ];

    this.styles = {
      backgroundImage: `url(${ HeroBanner.getRandomBackgroundImage(backgroundImages) })`
    };
  }

  static getRandomBackgroundImage(backgroundImageArray) {
    return backgroundImageArray[Math.floor(Math.random() * backgroundImageArray.length)];
  }

  render() {
    return (

      <div className="hero-banner jumbotron" style={this.styles}>
        <div className="hero-container col-md-12 d-flex flex-column justify-content-center">
          <h1 className="hero-title justify-content-center align-self-center">Providence Geeks</h1>

          <div className="row d-flex justify-content-center">
            <hr className="text-line align-self-center" />
            <h4 className="hero-subtitle align-self-center">Connecting Digital Innovators</h4>
            <hr className="text-line align-self-center" />
          </div>

          <PvdGeeksLogo />

          <div className="row d-flex justify-content-center align-self-center">
            <p className="hero-text">The goal of Providence Geeks is to help Rhode Island’s digital innovators connect,
            collaborate, and ultimately make the City-State and its geeks info-technology leaders.</p>
          </div>
        </div>
      </div>
    );

  }
}

HeroBanner.propTypes = {
  children: PropTypes.element
};