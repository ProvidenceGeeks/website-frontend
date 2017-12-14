import * as React from 'react';
import moment from 'moment';
import Card from '../../components/card/card';
import CardGrid from '../card-grid/card-grid';
import EventsService from '../../services/events/events-service';
import './events-list.scss';

export default class EventsList extends React.Component {

  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    EventsService.getEvents()
      .then((response) => {
        this.setState({
          events: EventsList.modelEventsDataForCard(response)
        });
      }).catch((response) => {
        console.error(response); // eslint-disable-line no-console
      });
  }

  static modelEventsDataForCard(eventsResponse) {
    return eventsResponse.map((event) => {
      return {
        title: event.name,
        groupName: event.group.name,
        body: Card.formatHtmlContent(event.description || 'No Description Available'),
        heading: EventsList.formatHeading(event),
        link: event.link,
        imgSource: event.group.group_photo || undefined,
        imgAlt: event.name,
        facebookShareMessage: event.link,
        twitterShareMessage: `${ event.name } - ${ event.link } ! @ProvidenceGeeks`
      };
    });
  }

  static formatHeading(event) {
    const time = event && event.time ? moment(event.time).utcOffset(-5).format('MM/DD/YY h:mmA') : '';
    const venue = event && event.venue && event.venue.city ? `@ ${event.venue.city}` : '';

    return `${time} ${venue}`;
  }

  render() {
    return (

      <div className="row-fluid">
        <div className="col-md-12">
          <h3 className="events-header">Upcoming Events</h3>
        </div>

        <CardGrid data={this.state.events}/>

      </div>

    );
  }
}