import * as axios from 'axios';

export default class EventsService {

  constructor() {
  }

  static getEvents() {
    return axios.get('/api/events')
      .then(function(response) {
        return response.data;
      });
  }
}