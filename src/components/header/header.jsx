import * as React from 'react';
import './header.scss';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import SocialFollowLinks from '../social-follow-links/social-follow-links';

const Header = () => {
  return (
    <div className="row">
      <div className="header d-flex">
        <div className="logo">
          <a 
            href="/"
            aria-label="Return to PVD Geeks Home"
          >
            <PvdGeeksLogo />
          </a>
        </div>
        <SocialFollowLinks />
      </div>
    </div>
  );
};

export default Header;
