class PostsService {

  constructor() {}

  static getPosts() {
    return fetch('/api/posts')
      .then((response) => response.json());
  }
}

export default PostsService;