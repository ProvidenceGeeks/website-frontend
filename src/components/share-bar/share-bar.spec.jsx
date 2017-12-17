import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmailIcon from '../email-icon/email-icon';
import FacebookIcon from '../../components/facebook-icon/facebook-icon';
import LinkedinIcon from '../linkedin-icon/linkedin-icon';
import PrinterIcon from '../printer-icon/printer-icon';
import ShareBar from './share-bar';
import TwitterIcon from '../twitter-icon/twitter-icon';

configure({ adapter: new Adapter() });

describe('Share Bar component', () => {
  const shareLink = 'https://pvdgeeks.org/post/9';
  let shareBar;

  it('should not be null', () => {
    shareBar = mount(<ShareBar link={shareLink}/>);

    expect(shareBar).not.toBeNull();
    expect(shareBar.find('.share-bar').length).toEqual(1);
  });

  describe('Sharing Options', () => {

    describe('Facebook', () => {

      it('should test that a Facebook sharing link shows', () => {
        expect(shareBar.find('.facebook-share').length).toEqual(1);
      });

      it('should test that a Facebook icon shows', () => {
        expect(shareBar.find(FacebookIcon).length).toEqual(1);
      });

      it('should test that the CustomLink component is set correctly', () => {
        const link = shareBar.find('.facebook-share');

        expect(link.prop('url')).toEqual(`https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(shareLink) }`);
      });
    });

    describe('Twitter', () => {
      it('should test that a Twitter sharing link shows', () => {
        expect(shareBar.find('.twitter-share').length).toEqual(1);
      });

      it('should test that a Twitter icon shows', () => {
        expect(shareBar.find(TwitterIcon).length).toEqual(1);
      });

      it('should test that the CustomLink component is set correctly', () => {
        const link = shareBar.find('.twitter-share');

        expect(link.prop('url')).toEqual(`https://twitter.com/intent/tweet?status=${ encodeURIComponent(shareLink) }`);
      });
    });

    describe('LinkedIn', () => {
      it('should test that a LinkedIn sharing link shows', () => {
        expect(shareBar.find('.linkedin-share').length).toEqual(1);
      });

      it('should test that a LinkedIn icon shows', () => {
        expect(shareBar.find(LinkedinIcon).length).toEqual(1);
      });

      it('should test that the CustomLink component is set correctly', () => {
        const link = shareBar.find('.linkedin-share');

        expect(link.prop('url')).toEqual(`https://www.linkedin.com/shareArticle?mini=true&url=${ encodeURIComponent(shareLink) }`);
      });
    });

    describe('Email', () => {
      it('should test that a Email sharing link shows', () => {
        expect(shareBar.find('.email-share').length).toEqual(1);
      });

      it('should test that a Email icon shows', () => {
        expect(shareBar.find(EmailIcon).length).toEqual(1);
      });

      it('should test that the Email link is set correctly', () => {
        const link = shareBar.find('.email-share');

        expect(link.prop('href')).toEqual(`mailto:?subject=Link From Providence Geeks!&body=${ encodeURIComponent(shareLink) }`);
      });
    });

    describe('Printing', () => {
      it('should test that a Print link shows', () => {
        expect(shareBar.find('.print-share').length).toEqual(1);
      });

      it('should test that a Printer icon shows', () => {
        expect(shareBar.find(PrinterIcon).length).toEqual(1);
      });

      xit('should test that clicking the Print Icon calls window.print correctly', () => {

      });
    });

  });

  xdescribe('Device Conditional Sharing', () => {
    it('should test that all sharing features appear on desktop', () => {

    });

    it('should test that print sharing does not appear on mobile / tablet', () => {

    });
  });

});