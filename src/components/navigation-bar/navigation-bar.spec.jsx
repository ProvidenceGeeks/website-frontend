import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationBar from './navigation-bar';

configure({ adapter: new Adapter() });

describe('navigation-bar Component', () => {
  const navigationBar = mount(<NavigationBar />);

  it('should not be null', () => {
    expect(navigationBar).not.toBeNull();
    expect(navigationBar.find('.navigationBar').length).toEqual(1);
  });

  // Ask about positive and negative tests for clicking nav elements
});