import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import Card from '../card/card';
import CardGrid from '../card-grid/card-grid';
import LoadMoreButton from '../load-more-button/load-more-button';

configure({ adapter: new Adapter() });

function getMockData(size) {
  size = size || mockEvents.length;

  return mockEvents.slice(0, size).map((event, index) => {
    return {
      title: event.title || `Mock Title ${index}`,
      body: event.body || `Mock Body ${index}`,
      heading: event.title || `Mock Heading ${index}`,
      link: event.link,
      imgSource: event.group.group_photo || undefined,
      imgAlt: event.name,
      facebookShareMessage: event.link,
      twitterShareMessage: 'Hello from @ProvidenceGeeks'
    };
  });
}

describe('CardGrid component', () => {
  const defaultItemsPerPage = 6;

  describe('CardGrid component defaults', () => {
    const cardGrid = mount(<CardGrid data={[]}/>);

    it('should not be null', () => {
      expect(cardGrid).not.toBeNull();
      expect(cardGrid.find('.card-grid').length).toEqual(1);
    });

    it('should show 0 cards and no load more button when no data is provided', () => {
      expect(cardGrid.find(Card).length).toEqual(0);
    });

    it('should show now show a LoadMoreButton when no data is provided', () => {
      expect(cardGrid.find(LoadMoreButton).length).toEqual(0);
    });
  });

  describe('CardGrid component when initial data.length prop is < 1 page', () => {
    const expected = 5;
    const data = getMockData(expected);
    const cardGrid = mount(<CardGrid data={data}/>);

    it(`should show ${defaultItemsPerPage} Card components when data.length prop is ${expected}`, () => {
      expect(cardGrid.find(Card).length).toEqual(expected);
    });

    it(`should not show the LoadMoreButton component when data.length prop is ${expected}`, () => {
      expect(cardGrid.find(LoadMoreButton).length).toEqual(0);
    });
  });

  describe('CardGrid component when initial data prop length is 1 page', () => {
    const data = getMockData(defaultItemsPerPage);
    const cardGrid = mount(<CardGrid data={data}/>);

    it(`should show ${defaultItemsPerPage} Card components when data.length prop is ${data.length}`, () => {
      expect(cardGrid.find(Card).length).toEqual(defaultItemsPerPage);
    });

    it(`should not show the LoadMoreButton component when data.length prop is ${data.length}`, () => {
      expect(cardGrid.find(LoadMoreButton).length).toEqual(0);
    });
  });

  describe('CardGrid component when initial data.length prop is 1 > x < 2 pages', () => {
    const dataSize = defaultItemsPerPage + Math.floor(defaultItemsPerPage / 2);
    const data = getMockData(dataSize);
    const cardGrid = mount(<CardGrid data={data}/>);

    it(`should show ${defaultItemsPerPage} Card components when data.length prop is ${data.length}`, () => {
      expect(cardGrid.find(Card).length).toEqual(6);
    });

    xit(`should show the LoadMoreButton component when data.length prop is ${data.length}`, () => {
      expect(cardGrid.find(LoadMoreButton).length).toEqual(1);
    });
  });

  describe('CardGrid component when initial data.length prop is 2 pages and loadMore is clicked ', () => {
    let expected;
    let cardGrid;

    beforeEach(() => {
      expected = defaultItemsPerPage * 2;
      let data = getMockData(expected);
      cardGrid = mount(<CardGrid data={data}/>);
    });

    it(`should show ${defaultItemsPerPage} Card components before LoadMoreButton is clicked`, () => {
      expect(cardGrid.find(Card).length).toEqual(defaultItemsPerPage);
    });

    it(`should show the LoadMoreButton component when data.length prop is ${defaultItemsPerPage * 2}`, () => {
      expect(cardGrid.find(LoadMoreButton).length).toEqual(1);
    });

    // TODO
    xit(`should show ${expected} Card components when data.length prop is ${expected} and LoadMoreButton is clicked once`, () => {
      cardGrid.find(LoadMoreButton).simulate('click');

      expect(cardGrid.find(Card).length).toEqual(expected);
    });

    // it(`should show the LoadMoreButton component when data.length prop is ${data.length}`, () => {
    //   expect(cardGrid.find(LoadMoreButton).length).toEqual(1);
    // });
    // shows load more
    // count equals itemsPerpage

    // click

    // hides load more
    // count equals itemsPerPage * 2
  });

});