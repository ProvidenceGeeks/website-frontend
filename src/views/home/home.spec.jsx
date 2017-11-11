import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import HeroBanner from '../../components/hero-banner/hero-banner';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
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

  it('should have a HeroBanner component', () => {
    expect(home.find(HeroBanner).length).toEqual(1);
  });

  it('should have a NavigationBar component', () => {
    expect(home.find(NavigationBar).length).toEqual(1);
  });
});