import * as React from 'react';
import { Icon } from 'react-fa';
import './header.scss';
import Logo from '../../components/logo/logo';
import SlackLogo from '../../images/Slack-Monochrome-White.svg';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="header">
          <div className="col-xs-2">
            <div className="logo">
              <Logo />
            </div>
          </div>

          <div className="social-container col-xs-8 col-xs-offset-2">
            <ul className="social list-inline">
              <li><a href="https://www.facebook.com/providencegeeks/" title="Like Us"><Icon className="circle" name="facebook" /></a></li>
              <li><a href="https://twitter.com/providencegeeks" title="Follow Us"><Icon className="circle" name="twitter" /></a></li>
              <li><a href="http://providencegeeks.slack.com/" title="Join Us"><img className="slack" src={ SlackLogo } /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}