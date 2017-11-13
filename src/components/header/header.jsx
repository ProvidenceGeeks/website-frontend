import * as React from 'react';
import './header.scss';
import PvdGeeksLogo from '../pvd-geeks-logo/pvd-geeks-logo';
import SocialFollowLinks from '../social-follow-links/social-follow-links';

const Header = () => {
  return (

    <div className="row">
      <div className="header d-flex">
        <div className="col-md-2">
          <div className="logo">
            <a href="/"><PvdGeeksLogo /></a>
          </div>
        </div>

        <div className="col-md-8 offset-md-2 d-flex justify-content-end align-items-center">
          <SocialFollowLinks/>
        </div>

      </div>
    </div>

  );
};

export default Header;