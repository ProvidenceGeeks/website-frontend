import * as React from 'react';
import PropTypes from 'prop-types';
import './events-list.scss';

export default class EventsList extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="row-fluid">
        <div className="col-md-12">
          <h3 className="events-header">Upcoming Events</h3>
        </div>

        <div className="events-grid col-md-12 d-flex justify-content-between">

          <div className="col-md-4">
            <div className="card">
              <a href="#MEETUP-URL" target="_blank" rel="noopener noreferrer">
                <img className="card-img-top" src="http://via.placeholder.com/318x180" alt="Event Image" />

                <div className="event-title-container align-self-end">
                  <span className="event-title">Event Name</span>
                </div>
              </a>

              <div className="card-block">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, ex putant scriptorem qui, vim fastidii senserit at.
                  Mea no postea fastidii. Dicam nemore oporteat vel an.
                </p>

                <div className="event-footer">
                  <span className="event-datetime float-left">
                    <span className="event-date">Date</span>
                    <span className="event-time">Time</span>
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
          </div>

        </div>
      </div>
    );
  }
}

EventsList.propTypes = {
  children: PropTypes.element
};