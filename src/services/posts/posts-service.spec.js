import mockPosts from '../../../test/__mocks__/mock-posts.json';
import PostsService from './posts-service';

describe('Posts Service', () => {
  let postsService;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          status: 200,
          json: () => {
            return mockPosts;
          }
        });
      });
    });

    postsService = PostsService;
  });

  it('should test getPosts returns posts data', (done) => {

    postsService.getPosts().then((posts) => {
      expect(posts.length).toEqual(mockPosts.length);
      done();
    });

  });

});