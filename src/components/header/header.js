import * as React from 'react';
import { Icon } from 'react-fa';
import './header.scss';
import Logo from '../../components/logo/logo';
import SlackLogo from '../../images/Slack-Monochrome-White.svg';

export default class Hello extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row-fluid">
        <div id="header" className="col-xs-12">
          <div className="col-xs-2 logo">
            <Logo />
          </div>

          <div className="col-xs-7">&nbsp;</div>

          <div className="social col-xs-3">
            <div><a href="https://www.facebook.com/providencegeeks/" title="Like Us"><Icon className="circle" name="facebook" /></a></div>
            <div><a href="https://twitter.com/providencegeeks" title="Follow Us"><Icon className="circle" name="twitter" /></a></div>
            <div><a href="http://providencegeeks.slack.com/" title="Join Us"><img className="slack" src={ SlackLogo } /></a></div>
          </div>
        </div>
      </div>
    );
  }
}