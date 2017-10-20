import * as React from 'react';
import raf from '../../../test/shims/react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  const header = shallow(<Header />);

  it('should not be null', () => {
    expect(header).not.toBeNull();
  });
});