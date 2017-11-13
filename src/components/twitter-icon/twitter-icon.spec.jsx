import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TwitterIcon from './twitter-icon';

configure({ adapter: new Adapter() });

describe('Twitter Icon Component', () => {
  let icon;

  beforeEach(() => {
    icon = shallow(<TwitterIcon />);
  });

  it('should not be null', () => {
    expect(icon).not.toBeNull();
    expect(icon.length).toEqual(1);
  });

  it('should have one twitter svg icon', () => {
    expect(icon.find('svg.twitter-icon').length).toEqual(1);
  });
});