import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FacebookIcon from '../facebook-icon/facebook-icon';
import SlackIcon from '../slack-icon/slack-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import GitHubIcon from '../github-icon/github-icon';
import SocialFollowLinks from './social-follow-links';

configure({ adapter: new Adapter() });

describe('Social Follow Links component', () => {
  const socialFollowLinks = mount(<SocialFollowLinks />);

  it('should not be null', () => {
    expect(socialFollowLinks).not.toBeNull();
    expect(socialFollowLinks.length).toEqual(1);
  });

  it('should have FacebookIcon link', () => {
    const facebookLink = socialFollowLinks.find('.social-container .facebook-link');

    expect(facebookLink.prop('href')).toEqual('https://www.facebook.com/providencegeeks/');
    expect(facebookLink.prop('title')).toEqual('Like Us');
    expect(facebookLink.length).toEqual(1);
    expect(facebookLink.prop('target')).toEqual('_blank');
    expect(facebookLink.prop('rel')).toEqual('noopener noreferrer');
    expect(facebookLink.find(FacebookIcon).length).toEqual(1);
  });

  it('should have SlackIcon link', () => {
    const slackLink = socialFollowLinks.find('.social-container .slack-link');

    expect(slackLink.prop('href')).toContain('https://join.slack.com/t/providencegeeks/shared_invite/');
    expect(slackLink.prop('title')).toEqual('Join Us');
    expect(slackLink.length).toEqual(1);
    expect(slackLink.prop('target')).toEqual('_blank');
    expect(slackLink.prop('rel')).toEqual('noopener noreferrer');
    expect(slackLink.find(SlackIcon).length).toEqual(1);
  });

  it('should have TwitterIcon link', () => {
    const twitterLink = socialFollowLinks.find('.social-container .twitter-link');

    expect(twitterLink.prop('href')).toEqual('https://twitter.com/providencegeeks');
    expect(twitterLink.prop('title')).toEqual('Follow Us');
    expect(twitterLink.prop('target')).toEqual('_blank');
    expect(twitterLink.prop('rel')).toEqual('noopener noreferrer');
    expect(twitterLink.length).toEqual(1);
    expect(twitterLink.find(TwitterIcon).length).toEqual(1);
  });

  it('should have GitHubIcon link', () => {
    const githubLink = socialFollowLinks.find('.social-container .github-link');

    expect(githubLink.prop('href')).toEqual('https://github.com/ProvidenceGeeks/');
    expect(githubLink.prop('title')).toEqual('Collaborate With Us');
    expect(githubLink.prop('target')).toEqual('_blank');
    expect(githubLink.prop('rel')).toEqual('noopener noreferrer');
    expect(githubLink.length).toEqual(1);
    expect(githubLink.find(GitHubIcon).length).toEqual(1);
  });
});