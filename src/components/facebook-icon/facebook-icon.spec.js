import * as React from 'react';
import raf from '../../../test/shims/react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FacebookIcon from './facebook-icon';

configure({ adapter: new Adapter() });

describe('Facebook-Icon SVG Component', () => {
  const icon = shallow(<FacebookIcon />);

  it('should not be null', () => {
    expect(icon).not.toBeNull();
  });
});