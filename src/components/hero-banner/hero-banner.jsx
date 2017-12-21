import * as React from 'react';
import PropTypes from 'prop-types';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import './hero-banner.scss';

export default class HeroBanner extends React.Component {

  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      styles: {
        backgroundImage: `url(${ HeroBanner.getRandomBackgroundImage() })`
      },
      title: 'Providence Geeks'
    };
  }

  componentDidMount() {
    const backgroundImage = this.props.backgroundImage || this.state.styles.backgroundImage;
    const title = this.props.title || this.state.title;

    this.setState({
      styles: {
        backgroundImage: `url(${ backgroundImage })`
      },
      title: title
    });
  }

  static getRandomBackgroundImage() {
    const backgroundImages = [
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-1.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-2.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-3.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-4.jpg',
      'https://s3.amazonaws.com/hosted.pvdgeeks.org/website/hero-banner/hero-image-5.jpg'
    ];

    return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  }

  render() {
    return (

      <div className="hero-banner jumbotron" style={this.state.styles}>
        <div className="hero-container col-md-12 d-flex flex-column justify-content-center">
          <h1 className="hero-title justify-content-center align-self-center">{this.state.title}</h1>

          {this.props.children
            ? this.props.children
            : <div className="d-flex flex-column justify-content-center">
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
          }
        </div>

      </div>
    );
  }
}

HeroBanner.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.element
};