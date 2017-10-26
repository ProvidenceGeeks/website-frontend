import * as React from 'react';
import PropTypes from 'prop-types';
import Logo from '../pvd-geeks-logo/pvd-geeks-logo';
import './hero-banner.scss';

export default class HeroBanner extends React.Component {
  constructor() {
    super();

    let backgrounds = generateRandomBG(1);

    this.styles = {
      background: `url(${ backgrounds[Math.floor(Math.random() * backgrounds.length)] })`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '100% 100%'
    };
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

          <Logo />

          <div className="row d-flex justify-content-center align-self-center">
            <p className="hero-text">The goal of Providence Geeks is to help Rhode Island’s digital innovators connect,
            collaborate, and ultimately make the City-State and its geeks info-technology leaders.</p>
          </div>
        </div>
      </div>
    );
  }
}

function generateRandomBG(count = 1) {
  let images = [];

  for (let i = 0; i < count; i += 1) {
    images.push(`http://via.placeholder.com/900x587/${ Math.floor(Math.random() * 16777215).toString(16) }/fff/?text=BG-Img`);
  }

  return images;
}

HeroBanner.propTypes = {
  children: PropTypes.element
};