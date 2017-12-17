import * as React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '../facebook-icon/facebook-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import './share-bar.scss';

const ShareBar = (props) => {
  return (

    <div className="share-bar">
      <div className="card-social">

        {props.facebookShareMessage &&
          <div className="social-link-fb float-left">
            <a className="facebook-share"
               href={`https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(props.facebookShareMessage) }`}
               target="_blank" rel="noopener noreferrer">
              <FacebookIcon/>
            </a>
          </div>
        }

        {props.twitterShareMessage &&
          <div className="social-link-tw float-right">
            <a className="twitter-share"
               href={`https://twitter.com/intent/tweet?status=${ encodeURIComponent(props.twitterShareMessage) }`}
               target="_blank" rel="noopener noreferrer">
              <TwitterIcon/>
            </a>
          </div>
        }

      </div>
    </div>

  );
};

ShareBar.propTypes = {
  facebookShareMessage: PropTypes.string,
  twitterShareMessage: PropTypes.string
};

export default ShareBar;