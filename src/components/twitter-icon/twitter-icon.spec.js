import * as React from 'react';
import raf from '../../../test/shims/react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TwitterIcon from './twitter-icon';

configure({ adapter: new Adapter() });

describe('Slack-Icon SVG Component', () => {
  const icon = shallow(<TwitterIcon />);

  it('should not be null', () => {
    expect(icon).not.toBeNull();
  });
});