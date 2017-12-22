import * as React from 'react';
import './footer.scss';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import SocialFollowLinks from '../social-follow-links/social-follow-links';

const Footer = () => {
  return (

    <div className="footer col-md-12">
      <div className="footer-top d-flex">
        <div className="col-md-2">
          <div className="logo">
            <a href="/"><PvdGeeksLogo /></a>
          </div>
        </div>

        <div className="col-md-8 offset-md-2 d-flex justify-content-end align-items-center">
          <SocialFollowLinks/>
        </div>
      </div>

      <div className="col-md-12 d-flex">
        <hr />
      </div>

      <div className="copyright col-md-12">
        <small className="copyright-text">&copy; Copyright 2017 Providence Geeks</small>
      </div>

    </div>

  );
};

export default Footer;