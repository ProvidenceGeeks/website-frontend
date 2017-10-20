import * as React from 'react';
import raf from '../../../test/shims/react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SlackIcon from './slack-icon';

configure({ adapter: new Adapter() });

describe('Slack Icon Component', () => {
  const icon = shallow(<SlackIcon />);

  it('should not be null', () => {
    expect(icon).not.toBeNull();
  });
});