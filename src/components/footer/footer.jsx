import * as React from 'react';
import './footer.scss';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import SocialFollowLinks from '../social-follow-links/social-follow-links';

const Footer = () => {
  return (
    <div className="footer row">
      <div className="footer-top d-flex">
        <div className="logo">
          <a href="/">
            <PvdGeeksLogo />
          </a>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <SocialFollowLinks />
        </div>
      </div>
      <hr />
      <div className="copyright">
        <small className="copyright-text">&copy; Copyright 2017 Providence Geeks</small>
      </div>
    </div>
  );
};

export default Footer;
