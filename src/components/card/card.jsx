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

  render() {
    return (
      <div className="card d-flex">
        <a href={ this.props.eventData.link } target={ this.props.target } rel="noopener noreferrer">
          <img className="card-img-top" src={ this.props.imgSource } alt={ this.props.imgAlt } />

          <div className="card-title-container align-self-end">
            <span className="card-title">{ this.props.eventData.name }</span>
          </div>
        </a>

        <div className="card-block">
          <p className="card-text">
            { filterDescription(this.props.eventData.description) }
          </p>
        </div>

        <div className="card-info d-flex align-self-end justify-content-between">
          <div className="card-time">
            <Moment format="MM/DD/YY h:mmA">{ this.props.eventData.time }</Moment>
          </div>

          <div className="card-social">
            <div className="social-link-fb float-left">
              <a href={ `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.props.eventData.link) }` } target="_blank">
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
  eventData: PropTypes.object.isRequired,
  target: PropTypes.string,
  imgSource: PropTypes.string,
  imgAlt: PropTypes.string,
  tweetMessage: PropTypes.string
};

Card.defaultProps = {
  target: '_self',
  imgSource: 'http://via.placeholder.com/318x180',
  imgAlt: 'Event Image',
  tweetMessage: ' '
};

const filterDescription = (description) => {
  if (description !== null) {
    // Filter to be 160 chars long, and remove all HTML tags.
    return description.replace(/<\/?[^>]+(>|$)/g, '').substr(0, 160);
  } else {
    return 'No Description Set.';
  }
};