import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import Home from './home';

configure({ adapter: new Adapter() });

describe('Home component', () => {
  let home;
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockAxios.onGet('/api/events').reply(200, mockEvents);

    home = mount(<Home />);
  });

  it('should not be null', () => {
    expect(home).not.toBeNull();
  });

  it('should have a container not be null', () => {
    expect(home.find('.home').length).toEqual(1);
  });

  it('should have a hero-banner Component', () => {
    expect(home.find('div.hero-banner').length).toEqual(1);
  });

  it('should have a navigation-bar Component', () => {
    expect(home.find('div.navigation-bar').length).toEqual(1);
  });
});