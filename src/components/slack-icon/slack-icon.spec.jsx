import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SlackIcon from './slack-icon';

configure({ adapter: new Adapter() });

describe('Slack Icon Component', () => {
  let icon;

  beforeEach(() => {
    icon = shallow(<SlackIcon />);
  });

  it('should not be null', () => {
    expect(icon).not.toBeNull();
    expect(icon.length).toEqual(1);
  });

  it('should have one slack svg icon', () => {
    expect(icon.find('svg.slack-icon').length).toEqual(1);
  });
});