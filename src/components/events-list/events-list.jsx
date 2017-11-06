import * as React from 'react';
import PropTypes from 'prop-types';
import './events-list.scss';

export default class EventsList extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <h1>EVENTS LIST</h1>
    );
  }
}

EventsList.propTypes = {
  children: PropTypes.element
};