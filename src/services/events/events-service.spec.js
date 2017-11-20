import mockEvents from '../../../test/__mocks__/mock-events.json';
import EventsService from './events-service';

describe('Events Service', () => {
  let eventsService;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          status: 200,
          json: () => {
            return mockEvents;
          }
        });
      });
    });

    eventsService = EventsService;
  });

  it('should test getEvents returns events data', (done) => {

    eventsService.getEvents().then((events) => {
      expect(events.length).toEqual(mockEvents.length);
      done();
    });

  });

});