import * as React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import FacebookIcon from '../facebook-icon/facebook-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import './card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  static filterDescription(description) {
    if (!description !== null) {
      // Filter to be 160 chars long, and remove all HTML tags.
      return description.replace(/<\/?[^>]+(>|$)/g, '').substr(0, 160);
    } else {
      return 'No Description Set.';
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

        <div className="card-block">
          <p className="card-text">
            { Card.filterDescription(this.props.description) }
          </p>
        </div>

        <div className="card-info d-flex align-self-end justify-content-between">
          <div className="card-time">
            <Moment format="MM/DD/YY h:mmA">{ this.props.time }</Moment>
          </div>

          <div className="card-social">
            <div className="social-link-fb float-left">
              <a href={ `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.props.facebookMessage) }` } target="_blank">
                <FacebookIcon />
              </a>
            </div>

            <div className="social-link-tw float-right">
              <a href={ `https://twitter.com/intent/tweet?status=${ encodeURIComponent(this.props.tweetMessage) }` } target="_blank">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  time: PropTypes.number,
  imgSource: PropTypes.string,
  imgAlt: PropTypes.string,
  tweetMessage: PropTypes.string,
  facebookMessage: PropTypes.string
};

Card.defaultProps = {
  time: 0,
  imgSource: 'http://via.placeholder.com/318x180',
  imgAlt: 'Event Image',
  tweetMessage: ' ',
  facebookMessage: ' '
};