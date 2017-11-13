import * as React from 'react';
import PropTypes from 'prop-types';
import './load-more-button.scss';

const LoadMoreButton = (props) => {
  return (

    <div className="col-md-12 d-flex justify-content-center load-more-button">
      <button className="load-more" onClick={ props.loadMore }>Load More</button>
    </div>

  );
};

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired
};

export default LoadMoreButton;