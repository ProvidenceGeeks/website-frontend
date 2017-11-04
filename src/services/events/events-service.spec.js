import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MockEvents from '../../../test/__mocks__/mock-events.json';
import EventsService from './events-service';

describe('Events Service', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  it('should test getEvents returns events data', () => {
    mockAxios.onGet('/api/events').reply(200, MockEvents);

    EventsService.getEvents().then((events) => {
      expect(events.length).toEqual(MockEvents.length);
    });

  });
});