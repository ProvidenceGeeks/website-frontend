import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import './navigation-bar.scss';

export default class NavigationBar extends React.Component {

  render() {

    return (
      <div className="row navigation-bar">
        <div className="col-md-12">
          <Tabs id="navigation-bar-tabs d-flex">
            {
              this.props.children.map((child, key) => {
                return (
                  <Tab key={key} eventKey={key} title={child.props.title} className="custom-tab-content">
                    {child}
                  </Tab>
                );
              })
            };
          </Tabs>
        </div>
      </div>
    );

  }
}

NavigationBar.propTypes = {
  children: PropTypes.array
};