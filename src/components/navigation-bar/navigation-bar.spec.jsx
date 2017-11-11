import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import EventsList from '../events-list/events-list';
import NavigationBar from './navigation-bar';

configure({ adapter: new Adapter() });

describe('Navigation Bar Component', () => {
  let mockAxios;
  let navigationBar;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockAxios.onGet('/api/events').reply(200, mockEvents);

    navigationBar = mount(<NavigationBar />);
  });

  it('should not be null', () => {
    expect(navigationBar).not.toBeNull();
  });

  it('should ensure that events content is in the tab component', () => {
    expect(navigationBar.find(EventsList).length).toEqual(1);
  });

  it('should ensure that blogs are in the tab component', () => {
    expect(navigationBar.find('.blog').length).toEqual(1);
  });
});