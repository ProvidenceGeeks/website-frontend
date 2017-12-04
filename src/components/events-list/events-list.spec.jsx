import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import Card from '../card/card';
import LoadMoreButton from '../load-more-button/load-more-button';
import EventsList from './events-list';

configure({ adapter: new Adapter() });

// TODO improve code coverage
describe('Events List component', () => {
  let eventsList;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          status: 200,
          json: () => {
            return mockEvents;
          }
        });
      });
    });

    eventsList = mount(<EventsList />);
  });

  it('should not be null', () => {
    expect(eventsList).not.toBeNull();
  });

  it('should display six cards when there are six visible events', () => {
    eventsList.setState({
      visibleEvents: mockEvents.slice(0, 6)
    });

    expect(eventsList.find(Card).length).toEqual(6);
  });

  it('should have a load more button if more than 6 events initially load', () => {
    expect(eventsList.find(LoadMoreButton).length).toEqual(0);
  });

  // TODO
  xit('should load more events when the load more button is clicked', () => {
    // const loadMore = () => {
    //   eventsList.setState({
    //     visibleEvents: mockEvents.slice(6, 12)
    //   });
    // };
    //
    // shallow(<LoadMoreButton loadMore={ loadMore }/>);

    eventsList.find(LoadMoreButton).simulate('click');

    expect(eventsList.find(Card).length).toEqual(12);
  });

  // TODO
  xit('should hide the load more button when there are no more events to show', () => {

  });

});