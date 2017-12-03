import * as React from 'react';
import PropTypes from 'prop-types';
import BlogPostsLists from '../../components/blog-posts-list/blog-posts-list';
import EventsList from '../../components/events-list/events-list';
import HeroBanner from '../../components/hero-banner/hero-banner';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />

      <NavigationBar>
        <EventsList title={'Events'}/>
        <BlogPostsLists title={'Blog Posts'}/>
      </NavigationBar>

    </div>
  );
};

Home.propTypes = {
  children: PropTypes.element
};

export default Home;