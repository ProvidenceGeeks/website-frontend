import * as React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import './post-details.scss';

// TODO fallback routing when serving locally with http-server
const PostDetails = (props) => {
  return (
    <div className="post-details">
      <HeroBanner/>

      <h1>It works!  {props.params.id}</h1>

    </div>
  );
};

PostDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

export default PostDetails;