class EventsService {

  static getEvents() {
    return fetch('/api/events')
      .then((response) => response.json());
  }
}

export default EventsService;