import * as React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Card from '../../components/card/card';
import EventsService from '../../services/events/events-service';
import LoadMoreButton from '../load-more-button/load-more-button';
import './events-list.scss';

export default class EventsList extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [],
      visibleEvents: [],
      currentPage: 2
    };
  }

  componentDidMount() {
    EventsService.getEvents()
      .then((events) => {
        this.setState({ events: events });

        this.setState({
          visibleEvents: events.slice(0, 6)
        });
      }).catch(function(response) {
        console.error(response); // eslint-disable-line
      });
  }

  loadMoreEvents() {
    this.setState({
      currentPage: this.state.currentPage + 1,
      visibleEvents: this.state.events.slice(0, this.state.currentPage * 6)
    });
  }

  static formatHeading(event) {
    const time = moment(event.time).format('MM/DD/YY h:mmA');
    const venue = event.venue && event.venue.city ? `@ ${event.venue.city}` : '';

    return `${time} ${venue}`;
  }

  render() {
    return (
      <div className="row-fluid">
        <div className="col-md-12">
          <h3 className="events-header">Upcoming Events</h3>
        </div>

        <div className="events-grid col-md-12 d-flex justify-content-start flex-wrap">
          {
            this.state.visibleEvents.map(function (event, key) {
              return (
                <div key={ key } className="col-md-4">
                  <Card
                    title={ event.name }
                    body={ event.description || 'No Description Available' }
                    heading={ EventsList.formatHeading(event) }
                    link={ event.link }
                    imgAlt={ event.name }
                    facebookShareMessage={ event.link }
                    twitterShareMessage={ `${ event.name } - ${ event.link } ! @ProvidenceGeeks` }
                  />
                </div>
              );
            })
          }
        </div>

        <LoadMoreButton loadMore={ () => this.loadMoreEvents() }/>

      </div>
    );
  }
}

EventsList.propTypes = {
  children: PropTypes.element
};