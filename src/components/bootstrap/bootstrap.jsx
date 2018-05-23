import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../header/header';
import Footer from '../footer/footer';
import './bootstrap.scss';

const Bootstrap = (props) => {
  return (

    <div className='container-fluid'>
      <Helmet>
        <meta property="og:title" content="Providence Geeks" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pvdgeeks.org/" />
        <meta property="og:image" content="https://s3.amazonaws.com/hosted.pvdgeeks.org/website/open-graph-image.png" />
        <meta property="og:description" 
          content="The goal of Providence Geeks is to help Rhode Island’s digital innovators connect, collaborate, and ultimately make the City-State and its geeks info-technology leaders." />

        <meta name="twitter:site" content="@providencegeeks" />
        <meta name="twitter:creator" content="@providencegeeks" />
      </Helmet>

      <section>
        <Header />
      </section>

      <section>
        { props.children }
      </section>

      <section>
        <Footer />
      </section>
    </div>

  );
};

Bootstrap.propTypes = {
  children: PropTypes.element
};

export default Bootstrap;