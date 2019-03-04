import * as React from 'react';
import DateFormatterService from '../../services/date-formatter/date-formatter-service';
import Card from '../../components/card/card';
import CardGrid from '../card-grid/card-grid';
import Loader from '../loader/loader';
import EventsService from '../../services/events/events-service';
import './events-list.scss';

export const LOADING_STATES = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};
export default class EventsList extends React.Component {

  constructor() {
    super();

    this.state = {
      events: [],
      status: LOADING_STATES.LOADING // or ERROR or LOADED
    };
  }

  componentDidMount() {
    EventsService.getEvents()
      .then((response) => {
        this.setState({
          events: EventsList.modelEventsDataForCard(response),
          status: LOADING_STATES.LOADED
        });
      }).catch((error) => {
        console.error(error); // eslint-disable-line no-console
        this.setState({ error, status: LOADING_STATES.ERROR });
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

      case LOADING_STATES.LOADING:
        data = <Loader message='Loading Upcoming Events...'/>;
        break;
      case LOADING_STATES.LOADED:
        data = this.state.events && this.state.events.length > 0 && <CardGrid data={this.state.events}/>;
        break;
      case LOADING_STATES.ERROR:
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