import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShareBar from './share-bar';

configure({ adapter: new Adapter() });

describe('Share Bar component', () => {
  let shareBar;

  it('should not be null', () => {
    shareBar = mount(<ShareBar/>);

    expect(shareBar).not.toBeNull();
    expect(shareBar.find('.share-bar').length).toEqual(1);
  });

  describe('Sharing Options', () => {

    describe('Facebook', () => {
      const facebookShareMessage = 'My Facebook Message';

      beforeEach(() => {
        shareBar = mount(<ShareBar facebookShareMessage={facebookShareMessage}/>);
      });

      it('should test that only Facebook sharing shows when just a Facebook link is provided', () => {
        expect(shareBar.find('.facebook-share').length).toEqual(1);
        expect(shareBar.find('.twitter-share').length).toEqual(0);
        expect(shareBar.find('.linked-share').length).toEqual(0);
        expect(shareBar.find('.email-share').length).toEqual(0);
      });

      it('should test that Facebook link is set correctly', () => {
        const link = shareBar.find('.facebook-share');

        expect(link.prop('href')).toEqual(`https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(facebookShareMessage) }`);
        expect(link.prop('target')).toEqual('_blank');
        expect(link.prop('rel')).toEqual('noopener noreferrer');
      });
    });

    describe('Twitter', () => {
      const twitterShareMessage = 'My Twitter Message';

      beforeEach(() => {
        shareBar = mount(<ShareBar twitterShareMessage={twitterShareMessage}/>);
      });

      it('should test that only Twitter sharing shows when just a Twitter link is provided', () => {
        expect(shareBar.find('.facebook-share').length).toEqual(0);
        expect(shareBar.find('.twitter-share').length).toEqual(1);
        expect(shareBar.find('.linked-share').length).toEqual(0);
        expect(shareBar.find('.email-share').length).toEqual(0);
      });

      it('should test that Twitter link is set correctly', () => {
        const link = shareBar.find('.twitter-share');

        expect(link.prop('href')).toEqual(`https://twitter.com/intent/tweet?status=${ encodeURIComponent(twitterShareMessage) }`);
        expect(link.prop('target')).toEqual('_blank');
        expect(link.prop('rel')).toEqual('noopener noreferrer');
      });
    });

    describe('LinkedIn', () => {
      it('should test that only Linked sharing shows when just a LinkedIn link is provided', () => {

      });

      it('should test that Twitter link is set correctly', () => {

      });
    });

    describe('Email', () => {
      it('should test that only Email sharing shows when just an email message is provided', () => {

      });

      it('should test that the Email link is set correctly', () => {

      });
    });

    describe('Printing', () => {
      it('should test that a Print button shows', () => {

      });

      it('should test that the Print Button settings are set correctly', () => {

      });
    });

    describe('Conditional Sharing', () => {
      it('should test that Facebook and Twitter sharing shows when Facebook and Twitter links are provided', () => {

      });

      it('should test that Facebook / Twitter / LinkedIn sharing shows when Facebook / Twitter / LinkedIn links are given', () => {

      });

      it('should test that Facebook / Twitter / LinkedIn / Email sharing shows when Facebook / Twitter / LinkedIn links are given', () => {

      });
    })

  });

  describe('Device Specific Sharing', () => {
    it('should test that all sharing features appear on desktop', () => {

    });
  });

});