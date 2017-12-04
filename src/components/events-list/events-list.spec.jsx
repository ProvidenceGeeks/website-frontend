import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import CardGrid from '../card-grid/card-grid';
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

  // TODO
  xit('should have a heading', () => {
    expect(eventsList).not.toBeNull();
  });

  it('should HAVE a CardGrid component', () => {
    expect(eventsList.find(CardGrid).length).toEqual(1);
  });

});