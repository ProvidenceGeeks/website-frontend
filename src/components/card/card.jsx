import * as React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '../facebook-icon/facebook-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import './card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  static filterDescription(description) {
    if (description !== 'null') {
      // Filter to be 160 chars long, and remove all HTML tags.
      return description.replace(/<\/?[^>]+(>|$)/g, '').substr(0, 160);
    } else {
      return 'No Description Available.';
    }
  }

  render() {
    return (
      <div className="card d-flex">
        <a href={ this.props.link } rel="noopener noreferrer">
          <img className="card-img-top" src={ this.props.imgSource } alt={ this.props.imgAlt } />

          <div className="card-title-container align-self-end">
            <span className="card-title">{ this.props.title }</span>
          </div>
        </a>

        <div className="card-info d-flex align-self-end justify-content-between">
          <div className="card-heading">{ this.props.heading }</div>

          <div className="card-social">
            <div className="social-link-fb float-left">
              <a className="facebook-share" href={ `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.props.facebookShareMessage) }` } target="_blank">
                <FacebookIcon />
              </a>
            </div>

            <div className="social-link-tw float-right">
              <a className="twitter-share" href={ `https://twitter.com/intent/tweet?status=${ encodeURIComponent(this.props.twitterShareMessage) }` } target="_blank">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="card-block">
          <p className="card-text">
            { Card.filterDescription(this.props.body) }
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSource: PropTypes.string,
  imgAlt: PropTypes.string,
  facebookShareMessage: PropTypes.string,
  twitterShareMessage: PropTypes.string
};

Card.defaultProps = {
  imgSource: 'http://via.placeholder.com/318x180', // TODO better placeholder?
  imgAlt: 'Event Image',
  facebookShareMessage: ' ', // TODO should hide this element if this prop is not provided?
  twitterShareMessage: ' ' // TODO should hide this element if this prop is not provided?
};