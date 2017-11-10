import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card';

configure({ adapter: new Adapter() });

describe('Card Component', () => {
  const card = mount(<Card />);

  it('should not be null', () => {
    expect(card).not.toBeNull();
    expect(card.find('.').length).toEqual(1);
  });

  it('should test a lot of things', () => {

  });

  it('should test load more button', () => {

  })
});