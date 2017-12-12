import * as React from 'react';
import { Link } from 'react-router';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomLink from './custom-link';

configure({ adapter: new Adapter() });

describe('CustomLink component', () => {
  let customLink;

  describe('When an External link is provided', () => {
    const externalUrl = 'http://www.pvdgeeks.org';
    const childContent = <p>Hello World!</p>;

    beforeEach(() => {
      customLink = shallow(
        <CustomLink url={externalUrl}>
          { childContent }
        </CustomLink>
      );
    });

    it('should not be null', () => {
      expect(customLink).not.toBeNull();
      expect(customLink.find('.custom-link').length).toEqual(1);
    });

    it('should test that it renders an <a> tag when an external link is provided', () => {
      const anchor = customLink.find('a');

      expect(anchor.length).toEqual(1);
      expect(anchor.prop('href')).toEqual(externalUrl);
      expect(anchor.prop('rel')).toEqual('noopener noreferrer');
      expect(anchor.prop('target')).toEqual('_blank');
    });

    it('should test children are rendered correctly', () => {
      const child = customLink.find('p');

      expect(child.length).toEqual(1);
      expect(child.text()).toEqual('Hello World!');
    });
  });

  describe('When an app link is provided', () => {
    const appUrl = '/post/9';
    const child = <h1>Custom Child Content Title</h1>;

    beforeEach(() => {
      customLink = shallow(
        <CustomLink url={appUrl}>
          {child}
        </CustomLink>
      );
    });

    it('should not be null', () => {
      expect(customLink).not.toBeNull();
      expect(customLink.find('.custom-link').length).toEqual(1);
    });

    it('should test that it renders an <Link> tag when an app link is provided', () => {
      const link = customLink.find(Link);

      expect(link.length).toEqual(1);
      expect(link.prop('to')).toEqual(appUrl);
    });

    it('should test children are rendered correctly', () => {
      const child = customLink.find('h1');

      expect(child.length).toEqual(1);
      expect(child.text()).toEqual('Custom Child Content Title');
    });
  });

});