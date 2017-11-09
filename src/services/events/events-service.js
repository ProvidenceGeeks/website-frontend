import * as axios from 'axios';

class EventsService {

  constructor() {}

  static getEvents() {
    return axios.get('/api/events')
      .then(function(response) {
        return response.data;
      });
  }
}

export default EventsService;