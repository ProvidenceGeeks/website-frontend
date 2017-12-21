import * as React from 'react';
import moment from 'moment';
import Card from '../card/card';
import CardGrid from '../card-grid/card-grid';
import PostsService from '../../services/posts/posts-service';
import './blog-posts-list.scss';

export default class BlogPostsList extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    PostsService.getPosts()
      .then((response) => {
        this.setState({
          posts: BlogPostsList.modelPostsDataForCard(response)
        });
      }).catch((response) => {
        console.error(response); // eslint-disable-line no-console
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
    const date = post && post.date ? moment(post.date).format('MM/DD/YY') : '';

    return `${author} ${date}`;
  }

  render() {
    return (

      <div className="row-fluid">

        <div className="grid-container">
          <CardGrid data={this.state.posts}/>
        </div>

      </div>
    );
  }
}