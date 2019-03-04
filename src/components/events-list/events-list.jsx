import * as React from 'react';
import DateFormatterService from '../../services/date-formatter/date-formatter-service';
import Card from '../../components/card/card';
import CardGrid from '../card-grid/card-grid';
import Loader from '../loader/loader';
import EventsService from '../../services/events/events-service';
import './events-list.scss';

export default class EventsList extends React.Component {

  constructor() {
    super();

    this.state = {
      events: [],
      status: 'loading' // or 'error' or 'loaded'
    };
  }

  componentDidMount() {
    EventsService.getEvents()
      .then((response) => {
        this.setState({
          events: EventsList.modelEventsDataForCard(response),
          status: 'loaded'
        });
      }).catch((error) => {
        console.error(error); // eslint-disable-line no-console
        this.setState({ error, status: 'error' });
      });
  }

  static modelEventsDataForCard(eventsResponse) {
    return eventsResponse.map((event) => {
      return {
        title: event.name,
        subtitle: event.group.name,
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
    const time = event && event.time ? DateFormatterService.formatTimestampForEvents(event.time) : '';
    const venue = event && event.venue && event.venue.city ? `@ ${event.venue.city}` : '';

    return `${time} ${venue}`;
  }

  render() {
    let data;
    
    switch (this.state.status) {

      case 'loading':
        data = <Loader message='Loading Upcoming Events...'/>;
        break;
      case 'loaded':
        data = this.state.events && this.state.events.length > 0 && <CardGrid data={this.state.events}/>;
        break;
      case 'error':
      default:
        data = <div className="message error">
          <p>Sorry, unable to load events right now. Please try again or contact us if the problem persists.</p>
        </div>;
        break;
    
    }

    return (

      <div className="row-fluid">
        <div className="col-md-12">
          <h3 className="events-header">Upcoming Events</h3>
        </div>
        {data}
      </div>

    );
  }
}