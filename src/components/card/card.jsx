import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import LazyLoad, { forceCheck } from 'react-lazyload';
import PropTypes from 'prop-types';
import CustomLink from '../custom-link/custom-link';
import FacebookIcon from '../facebook-icon/facebook-icon';
import PlacholderImage from './images/placeholder-318x180.png';
import TwitterIcon from '../twitter-icon/twitter-icon';
import './card.scss';

// TODO can this just be a non-class component?  Maybe have a card-service instead?
export default class Card extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  static formatHtmlContent(description = '') {
    return description.replace(/<\/?[^>]+(>|$)/g, '').substr(0, 160);
  }

  static generateImage(imgSource, imgAlt) {
    const src = imgSource ? imgSource : PlacholderImage;
    const alt = imgAlt ? imgAlt : Card.defaultProps.imgAlt;

    return <img className="card-img" src={ src } alt={ alt } />;
  }

  componentDidUpdate() {
    forceCheck();
  }

  render() {
    return (

      <div className="card d-flex">

        <CustomLink className="card-link" url={ this.props.link }>
          <div className="lazyload-wrapper">
            <LazyLoad height={233} offset={50} once>
              <CSSTransitionGroup key="1"
                transitionName="fade"
                transitionAppear
                transitionAppearTimeout={600}
                transitionEnter={false}
                transitionLeave={false}>
                { Card.generateImage(this.props.imgSource, this.props.imgAlt) }
              </CSSTransitionGroup>
            </LazyLoad>
          </div>

          <div className="card-title-container align-self-end">
            <span className="card-title">{ this.props.title }</span>
          </div>

          {this.props.subtitle &&
          <div className="card-subtitle-container">
            <span className="card-subtitle">{this.props.subtitle}</span>
          </div>
          }
        </CustomLink>

        <div className="card-info d-flex align-self-end justify-content-between">
          <div className="card-heading">{ this.props.heading }</div>

          <div className="card-social">
            <div className="social-link-fb float-left">
              <a className="facebook-share" href={ `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.props.facebookShareMessage) }` } target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </div>

            <div className="social-link-tw float-right">
              <a className="twitter-share" href={ `https://twitter.com/intent/tweet?status=${ encodeURIComponent(this.props.twitterShareMessage) }` } target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="card-block">
          <p className="card-text">
            { this.props.body }
          </p>

          {this.props.readMoreLink &&
            <CustomLink className="read-more-link" url={ this.props.readMoreLink }>Read More &rsaquo;</CustomLink>
          }
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSource: PropTypes.string,
  imgAlt: PropTypes.string,
  facebookShareMessage: PropTypes.string,
  twitterShareMessage: PropTypes.string,
  readMoreLink: PropTypes.string
};

Card.defaultProps = {
  imgSource: null,
  imgAlt: 'Event Image',
  facebookShareMessage: ' ', // TODO should this element be hidden if this prop is not provided?
  twitterShareMessage: ' ' // TODO should this element be hidden if this prop is not provided?
};