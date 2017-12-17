import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LinkedinIcon from './linkedin-icon';

configure({ adapter: new Adapter() });

describe('Linkedin Icon component', () => {
  let icon;

  beforeEach(() => {
    icon = shallow(<LinkedinIcon />);
  });

  it('should not be null', () => {
    expect(icon).not.toBeNull();
    expect(icon.length).toEqual(1);
  });

  it('should have one Linkedin svg icon', () => {
    expect(icon.find('svg.linkedin-icon').length).toEqual(1);
  });
});