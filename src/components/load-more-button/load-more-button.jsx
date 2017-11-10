import * as React from 'react';
import PropTypes from 'prop-types';
import './load-more-button.scss';

export default class LoadMoreButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-12 d-flex justify-content-center load-more-button">
        <button className="load-more" onClick={ () => { this.props.loadMore(); } }>Load More</button>
      </div>
    );
  }
}

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired
};