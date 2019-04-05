import * as React from 'react';
import Card from '../card/card';
import CardGrid from '../card-grid/card-grid';
import DateFormatterService from '../../services/date-formatter/date-formatter-service';
import PostsService from '../../services/posts/posts-service';
import Loader, { LOADING_STATES } from '../loader/loader';
import './blog-posts-list.scss';

export default class BlogPostsList extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      status: LOADING_STATES.LOADING
    };

    this.loadingMessage = 'Loading Blog Posts...';
    this.errorMessage = 'Sorry, unable to load blog posts right now. Please try again or contact us if the problem persists.';
  }

  componentDidMount() {
    PostsService.getPosts()
      .then((response) => {
        this.setState({
          posts: BlogPostsList.modelPostsDataForCard(response),
          status: LOADING_STATES.LOADED
        });
      }).catch((error) => {
        console.error(error); // eslint-disable-line no-console
        this.setState({ error, status: LOADING_STATES.ERROR });
      });
  }

  static modelPostsDataForCard(postsReponse) {
    return postsReponse.map((post) => {
      const canonicalLink = `${window.location.origin}/posts/${post.id}`;
      const internalLink = `/post/${post.id}`;

      return {
        title: post.title.rendered,
        body: Card.formatHtmlContent(post.excerpt.rendered || 'No Content Available'),
        heading: BlogPostsList.formatHeading(post),
        link: internalLink,
        imgSource: post.media_details.medium_large ? post.media_details.medium_large.source_url : undefined,
        imgAlt: post.title.rendered,
        facebookShareMessage: canonicalLink,
        twitterShareMessage: `${ post.title.rendered } - ${ canonicalLink } ! @ProvidenceGeeks`,
        readMoreLink: internalLink
      };
    });
  }

  static formatHeading(post) {
    const author = post && post.author_name ? post.author_name : '';
    const date = post && post.date ? DateFormatterService.formatTimestampForBlogPost(post.date) : '';

    return `${author} ${date}`;
  }

  render() {
    return (

      <div className="row-fluid">

        <div className="grid-container">
          <Loader status={this.state.status} loadingMessage={this.loadingMessage} errorMessage={this.errorMessage}>
            { 
              this.state.posts.length > 0 
                ? <CardGrid data={this.state.posts}/> 
                : <div className='message success'>There are no blog posts to display.</div>
            }
          </Loader>
        </div>

      </div>
    );
  }
}