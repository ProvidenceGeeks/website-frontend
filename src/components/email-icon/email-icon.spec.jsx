import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EmailIcon from './email-icon';

configure({ adapter: new Adapter() });

describe('Email Icon component', () => {
  let icon;

  beforeEach(() => {
    icon = shallow(<EmailIcon />);
  });

  it('should not be null', () => {
    expect(icon).not.toBeNull();
    expect(icon.length).toEqual(1);
  });

  it('should have one Linkedin svg icon', () => {
    expect(icon.find('svg.email-icon').length).toEqual(1);
  });
});