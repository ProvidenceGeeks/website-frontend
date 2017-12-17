import * as React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import PostsService from '../../services/posts/posts-service';
import ShareBar from '../../components/share-bar/share-bar';
import './post-details.scss';

// TODO Continue reading...
// TODO fallback routing when serving locally with http-server
class PostDetails extends React.Component {

  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      postFetchSuccess: false,
      post: {}
    };
  }

  componentDidMount() {
    if (this.props.params && this.props.params.id) {
      PostsService.getPosts().then(response => {
        const selectedPost = response.filter((post) => {
          return post.id === this.props.params.id;
        })[0];

        this.setState({
          postFetchSuccess: true,
          post: {
            title: selectedPost.title.rendered,
            backgroundImage: selectedPost.media_details.large.source_url,
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