// global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import EventsList from './events-list';

configure({ adapter: new Adapter() });

// TODO improve code coverage
describe('Events List component', () => {
  let mockAxios;
  let eventsList;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockAxios.onGet('/api/events').reply(200, mockEvents);

    eventsList = mount(<EventsList />);
  });

  it('should not be null', () => {
    expect(eventsList).not.toBeNull();
  });

  it('should display three cards when there are three visible events', () => {
    eventsList.setState({
      visibleEvents: mockEvents.slice(0, 3)
    });

    expect(eventsList.find('.card').length).toEqual(3);
  });

  // TODO this should only display when there are actually more events to show
  it('should have a load more button', () => {
    expect(eventsList.find('.load-more-button').length).toEqual(1);
  });

  // TODO
  it('should load more events when the load more button is clicked', () => {

  });

});