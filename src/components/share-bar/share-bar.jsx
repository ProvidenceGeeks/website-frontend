import * as React from 'react';
import PropTypes from 'prop-types';
import CustomLink from '../custom-link/custom-link';
import EmailIcon from '../email-icon/email-icon';
import FacebookIcon from '../facebook-icon/facebook-icon';
import LinkedinIcon from '../linkedin-icon/linkedin-icon';
import PrinterIcon from '../printer-icon/printer-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';

// TODO email link
// TODO print link
// TODO dont depend on other component styles, e.g. card-social
const ShareBar = (props) => {
  return (

    <div className='row share-bar'>
      <div className='card-social'>

        <div className='social-link-fb'>

          <CustomLink className='facebook-share'
            url={`https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(props.link) }`}>

            <FacebookIcon/>
          </CustomLink>

        </div>

        <div className='social-link-tw'>

          <CustomLink className='twitter-share'
            url={`https://twitter.com/intent/tweet?status=${ encodeURIComponent(props.link) }`}>

            <TwitterIcon/>
          </CustomLink>

        </div>

        <div className='social-link-tw'>

          <CustomLink className='linkedin-share'
            url={`https://www.linkedin.com/shareArticle?mini=true&url=${ encodeURIComponent(props.link) }`}>

            <LinkedinIcon/>
          </CustomLink>

        </div>

        <div className='social-link-tw'>

          <a className='email-share' target='_blank' rel='noopener noreferrer'>
            <EmailIcon/>
          </a>

        </div>

        <div className='social-link-tw'>

          <a className='print-share'>
            <PrinterIcon/>
          </a>

        </div>

      </div>
    </div>

  );
};

ShareBar.propTypes = {
  link: PropTypes.string.isRequired
};

export default ShareBar;