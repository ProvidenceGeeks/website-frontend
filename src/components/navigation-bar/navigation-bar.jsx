import * as React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './navigation-bar.scss';

export default class NavigationBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row navigation-bar">
        <div className="col-md-12">
          <Tabs id="navigation-bar-tabs">
            <Tab eventKey={1} title="Events"><h3>EVENTS GO HERE</h3></Tab>
            <Tab eventKey={2} title="Blog"><h3>BLOG GOES HERE</h3></Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}