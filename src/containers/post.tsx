import { Post } from '../components';
import { fakePosts } from '../utils/data';

const PostContainer = () => {
  return (
    <>
      {
        fakePosts.map((post, index) => ( 
          <Post key={index}>
            <Post.InfoContainer>
              <Post.Title>{`Post ${index + 1}`}</Post.Title>
              <Post.Excerpt>{post.excerpt}</Post.Excerpt>
            </Post.InfoContainer>
            <Post.StatsContainer>
              Stats go here
            </Post.StatsContainer>
          </Post>
      ))}
    </>
  );
};

export { PostContainer };