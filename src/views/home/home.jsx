import * as React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import EventsService from '../../services/events/events-service';
import './home.scss';

export default class Home extends React.Component {
  constructor() {
    super();

    EventsService.getEvents()
      .then((events) => {
        console.debug('events!!!!!!', events); // eslint-disable-line
      }).catch(function(response) {
        console.log(response); // eslint-disable-line
      });
  }

  render() {

    return (
      <div className="home">
        <HeroBanner />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};