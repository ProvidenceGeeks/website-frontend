import * as React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Card from '../../components/card/card';
import PostsService from '../../services/posts/posts-service';
import LoadMoreButton from '../load-more-button/load-more-button';
import './blog-posts-list.scss';

export default class BlogPostsList extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      visiblePosts: [],
      currentPage: 2,
      canLoadMore: false
    };
  }

  componentDidMount() {
    PostsService.getPosts()
      .then((posts) => {
        this.setState({
          posts: posts,
          visiblePosts: posts.slice(0, 6),
          canLoadMore: posts.length > 6
        });
      }).catch((response) => {
        console.error(response); // eslint-disable-line no-console
      });
  }

  loadMorePosts() {
    this.setState({
      currentPage: this.state.currentPage + 1,
      visiblePosts: this.state.posts.slice(0, this.state.currentPage * 6),
      canLoadMore: this.state.posts.length === this.state.posts.slice(0, this.state.currentPage * 6).length
    });
  }

  static formatHeading(post) {
    const author = post.author_name ? post.author_name : '';
    const date = moment(post.date).format('MM/DD/YY h:mmA');

    return `${author} ${date}`;
  }

  render() {
    return (

      <div className="row-fluid">
        <div className="col-md-12">
          <h3 className="posts-header">Latest Posts</h3>
        </div>

        { /* GRID Component here??? props is */ }
        <div className="posts-grid col-md-12 d-flex justify-content-start flex-wrap">
          {
            this.state.visiblePosts.map(function (post, key) {
              return (
                <div key={ key } className="col-md-4 col-sm-12">
                  <Card
                    title={ post.title.rendered }
                    body={ Card.formatHtmlContent(post.excerpt.rendered || 'No Content Available') }
                    heading={ BlogPostsList.formatHeading(post) }
                    link={ `/posts/${post.id}` }
                    imgSource={ post.media_details.medium_large ? post.media_details.medium_large.source_url : undefined }
                    imgAlt={ post.title.rendered }
                    facebookShareMessage={ `/posts/${post.id}` }
                    twitterShareMessage={ `${ post.title.rendered } - /posts/${ post.id } ! @ProvidenceGeeks` }
                  />
                </div>
              );
            })
          }
        </div>

        {
          this.state.canLoadMore
            ? <LoadMoreButton loadMore={ () => this.loadMorePosts() }/>
            : ''
        }

      </div>

    );
  }
}

BlogPostsList.propTypes = {
  children: PropTypes.element
};