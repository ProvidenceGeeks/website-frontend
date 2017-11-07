import * as React from 'react';
import './card.scss';

export default class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <a href={ this.props.url } target={ this.props.target } rel="noopener noreferrer">
          <img className="card-img-top" src={ this.props.imgSource } alt={ this.props.imgAlt } />

          <div className="event-title-container align-self-end">
            <span className="event-title">{ this.props.eventTitle }</span>
          </div>
        </a>

        <div className="card-block">
          <p className="card-text">
            { this.props.eventText }
          </p>

          <div className="event-footer">
                <span className="event-datetime float-left">
                  <span className="event-date">{ this.props.eventDate }</span>
                  <span className="event-time">{ this.props.eventTime }</span>
                </span>

            <svg version="1.1" viewBox="0 0 24 24" className="event-social-share float-right">
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
  url: React.PropTypes.string.isRequired,
  target: React.PropTypes.string.isRequired,
  imgSource: React.PropTypes.string.isRequired,
  imgAlt: React.PropTypes.string.isRequired,
  eventTitle: React.PropTypes.string.isRequired,
  eventText: React.PropTypes.string.isRequired,
  eventDate: React.PropTypes.number.isRequired,
  eventTime: React.PropTypes.number.isRequired
}

Card.defaultProps = {
  target: '_self',
  imgAlt: 'Event Image'
}