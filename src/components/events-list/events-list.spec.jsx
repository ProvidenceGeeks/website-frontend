import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EventsList from './events-list';

configure({ adapter: new Adapter() });

// TODO improve code coverage
describe('Events List component', () => {
  const eventsList = mount(<EventsList />);

  it('should not be null', () => {
    expect(eventsList).not.toBeNull();
  });
});