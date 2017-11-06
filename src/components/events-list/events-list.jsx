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
        <h3 className="events-header">Upcoming Events</h3>
      </div>
    );
  }
}

EventsList.propTypes = {
  children: PropTypes.element
};