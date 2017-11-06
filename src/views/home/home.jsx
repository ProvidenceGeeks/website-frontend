import * as React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import EventsService from '../../services/events/events-service';
import './home.scss';

export default class Home extends React.Component {
  constructor() {
    super();

    this.events = [];
  }

  componentDidMount() {
    EventsService.getEvents()
      .then((events) => {
        this.events = events;
        console.debug('events!!!!!!', this.events); // eslint-disable-line
      }).catch(function(response) {
        console.error(response); // eslint-disable-line
      });
  }

  render() {

    return (
      <div className="home">
        <HeroBanner />

        <NavigationBar />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};