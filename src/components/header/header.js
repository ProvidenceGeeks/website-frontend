import * as React from 'react';
import { Icon } from 'react-fa';
import './header.scss';
import Logo from '../../components/logo/logo';

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

          <div className="social">
            <div className="col-xs-1"><Icon className="circle" name="facebook" /></div>
            <div className="col-xs-1"><Icon className="circle" name="twitter" /></div>
            <div className="col-xs-1"><Icon className="circle" name="slack" /></div>
          </div>
        </div>
      </div>
    );
  }
}