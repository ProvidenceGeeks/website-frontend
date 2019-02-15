import * as React from 'react';
import FacebookIcon from '../facebook-icon/facebook-icon';
import SlackIcon from '../slack-icon/slack-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import './social-follow-links.scss';

export default function SocialFollowLinks() {
  return (
    <div className="social-container d-flex align-items-center">
      <ul className="social list-inline d-flex">
        <li>
          <a className="facebook-link" href="https://www.facebook.com/providencegeeks/" title="Like Us" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a className="slack-link" href="https://join.slack.com/t/providencegeeks/shared_invite/enQtMzI4MjA2Mzk5MDk1LWZlMTFhNDhlODhmNmRmZGZiZjM1OTNmNzZkN2M2MmJhMjYzZTJkODc0YjQ4NDY4ODUwZmM3OGU5NDU4MDE2MjQ" title="Join Us" target="_blank" rel="noopener noreferrer">
            <SlackIcon />
          </a>
        </li>
        <li>
          <a className="twitter-link" href="https://twitter.com/providencegeeks" title="Follow Us" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
