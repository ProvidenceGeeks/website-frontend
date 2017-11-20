import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import Card from '../card/card';
import LoadMoreButton from '../load-more-button/load-more-button';
import EventsList from './events-list';

configure({ adapter: new Adapter() });

// TODO improve code coverage
describe('Events List component', () => {
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

  it('should display three cards when there are three visible events', () => {
    eventsList.setState({
      visibleEvents: mockEvents.slice(0, 3)
    });

    expect(eventsList.find(Card).length).toEqual(3);
  });

  // TODO this should only display when there are actually more events to show
  it('should have a load more button', () => {
    expect(eventsList.find(LoadMoreButton).length).toEqual(1);
  });

  it('should load more events when the load more button is clicked', () => {

  });

});