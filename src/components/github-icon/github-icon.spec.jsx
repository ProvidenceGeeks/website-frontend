import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GitHubIcon from './github-icon';

configure({ adapter: new Adapter() });

describe('GitHub Icon component', () => {
  let icon;

  beforeEach(() => {
    icon = shallow(<GitHubIcon />);
  });

  it('should not be null', () => {
    expect(icon).not.toBeNull();
    expect(icon.length).toEqual(1);
  });

  it('should have one github svg icon', () => {
    expect(icon.find('svg.github-icon').length).toEqual(1);
  });
});