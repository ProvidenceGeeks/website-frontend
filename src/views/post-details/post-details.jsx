import * as React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import PostsService from '../../services/posts/posts-service';
import DateFormatterService from '../../services/date-formatter/date-formatter-service';
import ShareBar from '../../components/share-bar/share-bar';
import './post-details.scss';

class PostDetails extends React.Component {

  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      postFetchSuccess: false,
      post: {}
    };
  }

  getBackgroundImageForPost(postImages) {
    const largeImage = postImages.large ? postImages.large.source_url : null;
    const mediumLargeImage = postImages.medium_large ? postImages.medium_large.source_url : null;

    return largeImage || mediumLargeImage;
  }

  componentDidMount() {
    if (this.props.params && this.props.params.id) {
      PostsService.getPosts().then(response => {
        const selectedPost = response.filter((post) => {
          return post.id === this.props.params.id;
        })[0];

        console.log(this.getBackgroundImageForPost(selectedPost.media_details)); // eslint-disable-line

        this.setState({
          postFetchSuccess: true,
          post: {
            title: selectedPost.title.rendered,
            backgroundImage: this.getBackgroundImageForPost(selectedPost.media_details),
            author: selectedPost.author_name,
            body: selectedPost.content.rendered.replace(/\n/g, '<br />'),
            date: DateFormatterService.formatTimestampForBlogPost(selectedPost.date),
            canonicalLink: window.location.href
          }
        });
      });
    } else {
      console.error('post id not provided, unable fetch post details'); // eslint-disable-line no-console
    }
  }

  render() {

    return (
      <div className="post-details">

        {this.state.postFetchSuccess &&
          <div>
            <HeroBanner
              title={this.state.post.title}
              backgroundImage={this.state.post.backgroundImage}>

              <h3 className="custom-title row d-flex justify-content-center align-self-center">
                {this.state.post.author} | {this.state.post.date}
              </h3>

            </HeroBanner>

            <div className='row article-container'>

              <ShareBar link={this.state.post.canonicalLink}/>

              <article dangerouslySetInnerHTML={{ __html: this.state.post.body }}></article>

            </div>
          </div>
        }
      </div>
    );
  }
}

PostDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

export default PostDetails;