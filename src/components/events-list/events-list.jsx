import * as React from 'react';
import PropTypes from 'prop-types';
import EventsService from '../../services/events/events-service';
import Card from '../../components/card/card';
import './events-list.scss';

export default class EventsList extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [],
      firstSixEvents: []
    };

    this.data = [
      {
        url: '#MEETUP_SITE',
        target: '_blank',
        imgSource: 'http://via.placeholder.com/318x180/666666/ffffff',
        imgAlt: 'event image',
        cardText: 'Lorem ipsum dolor sit amet, ex putant scriptorem qui, vim fastidii senserit at. Mea no postea fastidii. Dicam nemore oporteat vel an.',
        cardTitle: 'Meetup 1',
        cardDate: 'Date/',
        cardTime: 'Time'
      },
      {
        url: '#MEETUP_SITE2',
        target: '_blank',
        imgSource: 'http://via.placeholder.com/318x180',
        imgAlt: 'event image',
        cardText: 'Lorem ipsum dolor sit amet, ex putant scriptorem qui, vim fastidii senserit at. Mea no postea fastidii. Dicam nemore oporteat vel an.',
        cardTitle: 'Meetup 2',
        cardDate: 'Date/',
        cardTime: 'Time'
      },
      {
        url: '#MEETUP_SITE3',
        target: '_blank',
        imgSource: 'http://via.placeholder.com/318x180/666666/ffffff',
        imgAlt: 'event image',
        cardText: 'Lorem ipsum dolor sit amet, ex putant scriptorem qui, vim fastidii senserit at. Mea no postea fastidii. Dicam nemore oporteat vel an.',
        cardTitle: 'Meetup 3',
        cardDate: 'Date/',
        cardTime: 'Time'
      }
    ];
  }

  componentDidMount() {
    EventsService.getEvents()
      .then((events) => {
        this.setState({ events: events });

        this.setState({
          firstSixEvents: events.slice(0, 6)
        });

        console.log('events!!!!!!', this.state.events); // eslint-disable-line
      }).catch(function(response) {
        console.error(response); // eslint-disable-line
      });
  }

  render() {
    console.log(this.state.firstSixEvents); // eslint-disable-line
    return (
      <div className="row-fluid">
        <div className="col-md-12">
          <h3 className="events-header">Upcoming Events</h3>
        </div>

        <div className="events-grid col-md-12 d-flex justify-content-between flex-wrap">
          {
            this.state.firstSixEvents.map(function (value, key) {
              return (
                <div key={ key } className="col-md-4">
                  <Card eventData={ value } target="_blank" />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

EventsList.propTypes = {
  children: PropTypes.element
};