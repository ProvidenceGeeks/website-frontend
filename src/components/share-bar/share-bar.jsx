import * as React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from '../email-icon/email-icon';
import FacebookIcon from '../facebook-icon/facebook-icon';
import LinkedinIcon from '../linkedin-icon/linkedin-icon';
import PrinterIcon from '../printer-icon/printer-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import './share-bar.scss';

const ShareBar = (props) => {
  return (

    <div className='row share-bar'>
      <div className='card-social'>

        <div className='social-link-fb float-left'>

          <a className='facebook-share'
            href={`https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(props.link) }`}
            target='_blank' rel='noopener noreferrer'>

            <FacebookIcon/>
          </a>

        </div>

        <div className='social-link-tw float-right'>

          <a className='twitter-share'
            href={`https://twitter.com/intent/tweet?status=${ encodeURIComponent(props.link) }`}
            target='_blank' rel='noopener noreferrer'>

            <TwitterIcon/>
          </a>

        </div>

        <div className='social-link-tw float-right'>

          <a className='linkedin-share'
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${ encodeURIComponent(props.link) }`}
            target='_blank' rel='noopener noreferrer'>

            <LinkedinIcon/>
          </a>

        </div>

        <div className='social-link-tw float-right'>

          <a className='email-share'
            target='_blank' rel='noopener noreferrer'>

            <EmailIcon/>
          </a>

        </div>

        <div className='social-link-tw float-right'>

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