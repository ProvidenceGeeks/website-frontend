import * as React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import PostsService from '../../services/posts/posts-service';
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
            date: moment(selectedPost.date).utcOffset(-5).format('MM/DD/YY'),
            canonicalLink: window.location.href
          }
        });
      });
    } else {
      console.error('post id not provided, unable fetch post details'); // eslint-disable-line no-console
    }
  }

  render() {
    const post = this.state.post;
    const canonicalUrl = `https://www.pvdgeeks.org/post/${this.props.params.id}/`;

    return (
      <div className="post-details">

        {this.state.postFetchSuccess &&
          
          <div>
            <Helmet>
              <meta property="og:title" content="Providence Geeks" />
              <meta property="og:type" content="article" />
              <meta property="og:url" content={canonicalUrl} />
              <meta property="og:image" content={post.backgroundImage} />
              <meta property="og:description" content={post.title} />
            </Helmet>

            <HeroBanner
              title={post.title}
              backgroundImage={post.backgroundImage}>

              <h3 className="custom-title row d-flex justify-content-center align-self-center">
                {post.author} | {post.date}
              </h3>

            </HeroBanner>

            <div className='row article-container'>

              <ShareBar link={post.canonicalLink}/>

              <article dangerouslySetInnerHTML={{ __html: post.body }}></article>

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