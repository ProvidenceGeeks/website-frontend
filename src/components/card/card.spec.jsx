import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import Card from './card';
import FacebookIcon from '../facebook-icon/facebook-icon';
import mockEvents from '../../../test/__mocks__/mock-events.json';
import PlaceholderImage from './images/placeholder-318x180.png';
import TwitterIcon from '../twitter-icon/twitter-icon';

configure({ adapter: new Adapter() });

describe('Card component', () => {
  let mockEvent = mockEvents[0];
  let card;

  mockEvent.description = mockEvent.description ? mockEvent.description : 'No Description Available.';

  const mockCardContent = mockEvent;

  beforeEach(() => {
    card = mount(<Card
      title={ `${mockCardContent.name}` }
      subtitle={`${mockCardContent.group.name}`}
      body={ `${mockCardContent.description}`}
      heading={ `Heading: ${mockCardContent.name}!!!` }
      link={ mockCardContent.link }
      imgAlt={ `${mockCardContent.name}` }
      imgSource={ `${mockCardContent.group.group_photo}` }
      facebookShareMessage={ 'Post this to Facebook!' }
      twitterShareMessage={ 'Post this to Twitter!' }
    />);
  });

  describe('Card elements when all values are provided', () => {
    it('should not be null', () => {
      expect(card).not.toBeNull();
      expect(card.find('.card').length).toEqual(1);
    });

    it('should test the card as a link displays correctly', () => {
      const cardLink = card.find('.card-link');

      expect(cardLink.prop('href')).toEqual(mockEvent.link);
      expect(cardLink.prop('rel')).toEqual('noopener noreferrer');
      expect(cardLink.prop('target')).toEqual('_blank');
    });

    it('should test there is a lazily loaded image with a 600ms fade in', () => {
      const lazyLoad = card.find('LazyLoad');
      const cssTransitionGroup = lazyLoad.props().children;
      const img = cssTransitionGroup.props.children;

      expect(lazyLoad.length).toEqual(1);

      expect(cssTransitionGroup.type.displayName).toEqual('CSSTransitionGroup');
      expect(cssTransitionGroup.props.transitionName).toEqual('fade');
      expect(cssTransitionGroup.props.transitionAppear).toEqual(true);
      expect(cssTransitionGroup.props.transitionAppearTimeout).toEqual(600);
      expect(cssTransitionGroup.props.transitionEnter).toEqual(false);
      expect(cssTransitionGroup.props.transitionLeave).toEqual(false);

      expect(img.type).toEqual('img');
      expect(img.props.src).toEqual(mockCardContent.group.group_photo);
      expect(img.props.alt).toEqual(mockCardContent.name);
    });

    it('should test title displays correctly', () => {
      const title = card.find('.card-title');

      expect(title.text()).toEqual(mockCardContent.name);
    });

    it('should test the heading displays correctly', () => {
      const heading = card.find('.card-heading');

      expect(heading.text()).toContain(`Heading: ${mockCardContent.name}!!!`);
    });

    it('should test facebook share displays correctly', () => {
      const message = encodeURIComponent('Post this to Facebook!');
      const fbShare = card.find('.facebook-share');

      expect(fbShare.prop('href')).toEqual(`https://www.facebook.com/sharer/sharer.php?u=${message}`);
      expect(fbShare.prop('target')).toEqual('_blank');
      expect(fbShare.prop('rel')).toEqual('noopener noreferrer');
      expect(card.find(FacebookIcon).length).toEqual(1);
    });

    it('should test twitter share displays correctly', () => {
      const message = encodeURIComponent('Post this to Twitter!');
      const twitterShare = card.find('.twitter-share');

      expect(twitterShare.prop('href')).toEqual(`https://twitter.com/intent/tweet?status=${message}`);
      expect(twitterShare.prop('target')).toEqual('_blank');
      expect(twitterShare.prop('rel')).toEqual('noopener noreferrer');
      expect(card.find(TwitterIcon).length).toEqual(1);
    });

    it('should test the body displays correctly', () => {
      const body = card.find('.card-text');

      expect(body.text()).toEqual('No Description Available.');
    });

    it('should test the subtitle displays correctly', () => {
      const subtitle = card.find('.card-subtitle-container');

      expect(subtitle.text()).toEqual(mockCardContent.group.name);
    });
  });

  describe('Card elements when only required props are provided', () => {
    beforeEach(() => {
      card = mount(<Card
        title={ `${mockCardContent.name}` }
        body={ `${mockCardContent.description}`}
        heading={ `Heading: ${mockCardContent.name}!!!` }
        link={ mockCardContent.link }
      />);
    });

    it('should test facebook share displays default values correctly', () => {
      const message = encodeURIComponent(' ');

      expect(card.find('.facebook-share').prop('href')).toEqual(`https://www.facebook.com/sharer/sharer.php?u=${message}`);
      expect(card.find(FacebookIcon).length).toEqual(1);
    });

    it('should test twitter share displays default values correctly', () => {
      const message = encodeURIComponent(' ');

      expect(card.find('.twitter-share').prop('href')).toEqual(`https://twitter.com/intent/tweet?status=${message}`);
      expect(card.find(TwitterIcon).length).toEqual(1);
    });
  });

  describe('Card static methods', () => {

    describe('Card.formatHtmlContent', () => {
      it('should test formatHtmlContent when a value is provided', () => {
        const content = '<p><img src=\"http://photos4.meetupstatic.com/photos/event/5/1/7/2/600_436940850.jpeg\" /></p> ' +
          '<p>Location:</p> <p>Providence Public Library</p> <p>150 Empire Street, Providence, RI 02903<br/>' +
          '- Rhode Island Room</p> <p>Requirements:</p> <p>1. A laptop is required<br/>2. headphones or ' +
          'earbuds are OPTIONAL</p> <p>\\n\\n\\nProvidence Code Night with the Mayor Presented by IntraCity ' +
          'Geeks.</p> <p>Send all questions to [masked]</p> <p>Introduction to Web Development!</p>' +
          '<p>#ProvidenceCodeNight<br/>#MayorElorza<br/>#IntraCityGeeks</p>';
        const formattedContent = Card.formatHtmlContent(content);

        expect(formattedContent).toEqual(' Location: Providence Public Library 150 Empire Street, Providence, RI 02903- ' +
          'Rhode Island Room Requirements: 1. A laptop is required2. headphones or earbuds ar');
      });

      it('should test formatHtmlContent when no value is provided', () => {
        const formattedContent = Card.formatHtmlContent();

        expect(formattedContent).toEqual('');
      });

    });

    describe('Card.generateImage', () => {

      it('should test generateImage displays correctly with provided values', () => {
        const img = shallow(Card.generateImage(mockCardContent.group.group_photo, mockCardContent.name));

        expect(img.prop('src')).toEqual(mockCardContent.group.group_photo);
        expect(img.prop('alt')).toEqual(mockCardContent.name);
      });

      it('should test generateImage displays correctly when only imgSource is provided', () => {
        const img = shallow(Card.generateImage(mockCardContent.group.group_photo));

        expect(img.prop('src')).toEqual(mockCardContent.group.group_photo);
        expect(img.prop('alt')).toEqual(Card.defaultProps.imgAlt);
      });

      it('should test generateImage displays correctly when only imgAlt is provided', () => {
        const img = shallow(Card.generateImage(null, mockCardContent.name));

        expect(img.prop('src')).toEqual(PlaceholderImage);
        expect(img.prop('alt')).toEqual(mockCardContent.name);
      });
    });
  });

});