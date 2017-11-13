import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FacebookIcon from './facebook-icon';

configure({ adapter: new Adapter() });

describe('Facebook Icon component', () => {
  let icon;

  beforeEach(() => {
    icon = shallow(<FacebookIcon />);
  });

  it('should not be null', () => {
    expect(icon).not.toBeNull();
    expect(icon.length).toEqual(1);
  });

  it('should have one facebook svg icon', () => {
    expect(icon.find('svg.facebook-icon').length).toEqual(1);
  });
});