import * as React from 'react';
import raf from '../../../test/shims/react-raf-shim';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Hello from './hello';

configure({ adapter: new Adapter() });

describe('Hello-World Component', () => {
  const hello = shallow(<Hello />);

  it('should not be null', () => {
    expect(hello).not.toBeNull();
  });
});