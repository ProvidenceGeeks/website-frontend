import * as React from 'react';
import FacebookIcon from '../facebook-icon/facebook-icon';
import SlackIcon from '../slack-icon/slack-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import GitHubIcon from '../github-icon/github-icon';
import './social-follow-links.scss';

export default function SocialFollowLinks() {
  return (
    <div className="social-container d-flex align-items-center">
      <ul className="social list-inline d-flex">
        <li>
          <a 
            className="facebook-link" 
            href="https://www.facebook.com/providencegeeks/" 
            title="Like PVDGeeks on Facebook" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Like PVDGeeks on Facebook"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a 
            className="slack-link"
            href="https://join.slack.com/t/providencegeeks/shared_invite/enQtMzI4MjA2Mzk5MDk1LWMxNDEzZDVmOWFhZDcwMmJiYTdjOGM1NTZmMzJlMGFiMWI0ODY5NTVmMGFhODQzYmY1NjkyNTJiNDU5ZDNlZmM"
            title="Join the PVDGeeks Slack channel" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Join the PVDGeeks Slack channel"
          >
            <SlackIcon />
          </a>
        </li>
        <li>
          <a 
            className="twitter-link" 
            href="https://twitter.com/providencegeeks" 
            title="Follow Us on Twitter" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow Us on Twitter" 
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a 
            className="github-link" 
            href="https://github.com/ProvidenceGeeks/" 
            title="Collaborate With Us" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contribute on GitHub"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
