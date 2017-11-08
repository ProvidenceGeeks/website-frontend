import * as React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    console.log("CARD:"); // eslint-disable-line
    console.log(this.props.eventData); // eslint-disable-line
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

          <div className="card-info d-flex align-self-end">
            <span className="card-datetime float-left">
              <div className="card-time"><Moment format="MM/DD/YY h:mmA">{ this.props.eventData.time }</Moment></div>
            </span>

            <svg version="1.1" viewBox="0 0 24 24" className="card-social-share float-right" onClick={ () => { socialClick(); } }>
              <g id="info" />
              <g id="icons">
                <path d="M21.7,10.2l-6.6-6C14.6,3.7,14,4.2,14,5v3c-4.7,0-8.7,2.9-10.6,6.8c-0.7,1.3-1.1,2.7-1.4,4.1
                    c-0.2,1,1.3,1.5,1.9,0.6C6.1,16,9.8,13.7,14,13.7V17c0,0.8,0.6,1.3,1.1,0.8l6.6-6C22.1,11.4,22.1,10.6,21.7,10.2z" id="share"/>
              </g>
            </svg>
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
  imgAlt: PropTypes.string
};

Card.defaultProps = {
  target: '_self',
  imgSource: 'http://via.placeholder.com/318x180',
  imgAlt: 'Event Image'
};

const socialClick = () => {
  console.log('TEST'); // eslint-disable-line
};

const filterDescription = (description) => {
  if (description !== null) {
    // Filter to be 160 chars long, and remove all HTML tags.
    return description.replace(/<\/?[^>]+(>|$)/g, '').substr(0, 160);
  } else {
    return 'No Description Set.';
  }
};