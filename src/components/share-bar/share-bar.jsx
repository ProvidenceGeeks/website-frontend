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
  const encodedUri = encodeURIComponent(props.link);

  return (

    <div className='row share-bar'>
      <div className='card-social'>

        <div className='social-link-fb'>

          <CustomLink className='facebook-share'
            url={`https://www.facebook.com/sharer/sharer.php?u=${ encodedUri }`}>

            <FacebookIcon/>
          </CustomLink>

        </div>

        <div className='social-link-tw'>

          <CustomLink className='twitter-share'
            url={`https://twitter.com/intent/tweet?status=${ encodedUri }`}>

            <TwitterIcon/>
          </CustomLink>

        </div>

        <div className='social-link-tw'>

          <CustomLink className='linkedin-share'
            url={`https://www.linkedin.com/shareArticle?mini=true&url=${ encodedUri }`}>

            <LinkedinIcon/>
          </CustomLink>

        </div>

        <div className='social-link-tw'>

          <a className='email-share'
            href={`mailto:?subject=Link From Providence Geeks!&body=${ encodedUri }`}>

            <EmailIcon/>
          </a>

        </div>

        <div className='social-link-tw'>

          <a className='print-share' onClick={window.print}>
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