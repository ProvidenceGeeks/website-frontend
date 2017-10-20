import * as React from 'react';
import './header.scss';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import FacebookIcon from '../../components/facebook-icon/facebook-icon';
import SlackIcon from '../../components/slack-icon/slack-icon';
import TwitterIcon from '../../components/twitter-icon/twitter-icon';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-xs-2">
            <div className="logo">
              <a href="/"><PvdGeeksLogo /></a>
            </div>
          </div>

          <div className="social-container col-xs-8 col-xs-offset-2">
            <ul className="social list-inline">
              <li><a className="fb-link" href="https://www.facebook.com/providencegeeks/" title="Like Us"><FacebookIcon /></a></li>
              <li><a className="slack-link" href="http://providencegeeks.slack.com/" title="Join Us"><SlackIcon /></a></li>
              <li><a className="twitter-link" href="https://twitter.com/providencegeeks" title="Follow Us"><TwitterIcon /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}