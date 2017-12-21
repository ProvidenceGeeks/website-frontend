import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../header/header';
import Footer from '../footer/footer';
import Home from '../../views/home/home';
import Bootstrap from './bootstrap';

configure({ adapter: new Adapter() });

describe('Bootstrap component', () => {
  let bootstrap;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          status: 200,
          json: () => {
            return [];
          }
        });
      });
    });

    bootstrap = mount(
      <Bootstrap>
        <Home/>
      </Bootstrap>
    );
  });

  it('should not be null', () => {
    expect(bootstrap).not.toBeNull();
  });

  it('should have a Header Component', () => {
    expect(bootstrap.find(Header).length).toEqual(1);
  });

  it('should have the provided child component (Home)', () => {
    expect(bootstrap.find(Home).length).toEqual(1);
  });

  it('should have a Footer Component', () => {
    expect(bootstrap.find(Footer).length).toEqual(1);
  });
});