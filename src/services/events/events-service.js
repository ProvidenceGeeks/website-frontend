import * as axios from 'axios';

class EventsService {

  constructor() {
  }

  static getEvents() {
    return axios.get('http://stage.pvdgeeks.org/api/events')
      .then(function(response) {
        return response.data;
      });
  }
}

export default EventsService;