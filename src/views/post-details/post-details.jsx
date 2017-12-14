import * as React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/hero-banner/hero-banner';
import PostsService from '../../services/posts/posts-service';
import './post-details.scss';

// TODO fallback routing when serving locally with http-server
class PostDetails extends React.Component {

  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      selectedPost: null
    };
  }

  componentDidMount() {
    PostsService.getPosts().then(response => {
      const selectedPost = response.filter((post) => {
        return post.id === this.props.params.id;
      })[0];

      this.setState({
        selectedPost
      });
    });
  }

  render() {

    return (
      <div>
        <HeroBanner/>

        <div className='row post-details'>
          {this.state.selectedPost &&

            <article dangerouslySetInnerHTML={{ __html: this.state.selectedPost.content.rendered.replace(/\n/g, '<br />') }}></article>
            
          }
        </div>

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