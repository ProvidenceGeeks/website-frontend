import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import Card from '../card/card';
import CardGrid from '../card-grid/card-grid';
import EventsList from './events-list';

configure({ adapter: new Adapter() });

describe('EventsList component', () => {
  let eventsList;

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

    eventsList = mount(<EventsList />);
  });

  it('should not be null', () => {
    expect(eventsList).not.toBeNull();
  });

  it('should have a CardGrid component', () => {
    expect(eventsList.find(CardGrid).length).toEqual(1);
  });

  it('should have a heading', () => {
    expect(eventsList.find('.events-header').text()).toEqual('Upcoming Events');
  });

  describe('EventsList.modelEventsDataForCard', () => {
    let mockEvent;
    let modeledData;

    beforeEach(() => {
      mockEvent = mockEvents.slice(1, 2)[0];
      modeledData = EventsList.modelEventsDataForCard([mockEvent])[0];
    });

    it('should test title', () => {
      expect(modeledData.title).toEqual(mockEvent.name);
    });

    it('should test body', () => {
      expect(modeledData.body).toEqual(Card.formatHtmlContent(mockEvent.description));
    });

    it('should test body when it is undefined', () => {
      mockEvent.description = undefined;
      modeledData = EventsList.modelEventsDataForCard([mockEvent])[0];

      expect(modeledData.body).toEqual('No Description Available');
    });

    it('should test link', () => {
      expect(modeledData.link).toEqual(mockEvent.link);
    });

    it('should test imgSource', () => {
      expect(modeledData.imgSource).toEqual(mockEvent.group.group_photo);
    });

    it('should test imgAlt', () => {
      expect(modeledData.imgAlt).toEqual(mockEvent.name);
    });

    it('should test facebookShareMessage', () => {
      expect(modeledData.facebookShareMessage).toEqual(mockEvent.link);
    });

    it('should test twitterShareMessage', () => {
      expect(modeledData.twitterShareMessage).toEqual(`${ mockEvent.name } - ${ mockEvent.link } ! @ProvidenceGeeks`);
    });

    it('should test subtitle', () => {
      expect(modeledData.subtitle).toEqual(mockEvent.group.name);
    });

  });

  describe('EventsList.formatHeading', () => {
    it('should test when no value passed', () => {
      const heading = EventsList.formatHeading();

      expect(heading).toEqual(' ');
    });

    it('should test when an event is passed', () => {
      const mockEvent = mockEvents.slice(1, 2)[0];
      const heading = EventsList.formatHeading(mockEvent);

      expect(heading).toEqual(`11/24/17 7:00PM @ ${mockEvent.venue.city}`);
    });

  });
});