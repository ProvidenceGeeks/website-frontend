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
      visibleEvents: [],
      currentPage: 2
    };
  }

  loadMoreEvents() {
    this.setState({
      currentPage: this.state.currentPage + 1,
      visibleEvents: this.state.events.slice(0, this.state.currentPage * 6)
    });
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

  render() {
    return (
      <div className="row-fluid">
        <div className="col-md-12">
          <h3 className="events-header">Upcoming Events</h3>
        </div>

        <div className="events-grid col-md-12 d-flex justify-content-start flex-wrap">
          {
            this.state.visibleEvents.map(function (value, key) {
              return (
                <div key={ key } className="col-md-4">
                  <Card eventData={ value } tweetMessage={ `${ value.name } - ${ value.link } ! @ProvidenceGeeks` } target="_blank" />
                </div>
              );
            })
          }
        </div>

        <div className="col-md-12 d-flex justify-content-center">
          <button className="events-load-more" onClick={ () => { this.loadMoreEvents(); } }>Load More</button>
        </div>
      </div>
    );
  }
}

EventsList.propTypes = {
  children: PropTypes.element
};