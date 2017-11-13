import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PvdGeeksLogo from './pvd-geeks-logo';

configure({ adapter: new Adapter() });

describe('PVD Geeks Logo component', () => {
  let logo;

  beforeEach(() => {
    logo = shallow(<PvdGeeksLogo />);
  });

  it('should not be null', () => {
    expect(logo).not.toBeNull();
  });

  it('should have one svg logo', () => {
    expect(logo.length).toEqual(1);
  });
});