import * as React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import BlogPostsList from '../blog-posts-list/blog-posts-list';
import EventsList from '../events-list/events-list';
import './navigation-bar.scss';

const NavigationBar = () => {
  return (

    <div className="row navigation-bar">
      <div className="col-md-12">

        <Tabs id="navigation-bar-tabs">
          <Tab eventKey={1} title="Events" className="events-tab-content">
            <div className="events">
              <EventsList />
            </div>
          </Tab>

          <Tab eventKey={2} title="Blog Posts" className="blog-tab-content">
            <BlogPostsList/>
          </Tab>
        </Tabs>

      </div>

    </div>

  );
};

export default NavigationBar;