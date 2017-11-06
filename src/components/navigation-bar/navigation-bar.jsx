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
            <Tab eventKey={1} title="Events" className="events-tab-content">
              <h3 className="events">EVENTS GO HERE</h3>
            </Tab>

            <Tab eventKey={2} title="Blog" className="blog-tab-content">
              <h3 className="blog">BLOG GOES HERE</h3>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}