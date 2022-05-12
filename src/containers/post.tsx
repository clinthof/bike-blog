import { Post } from '../components';
import { fakePosts } from '../utils/data';

const PostContainer = () => {
  return (
    <div className='page-content'>
      {
        fakePosts.map((post, index) => ( 
          <Post key={index}>
            <Post.InfoContainer>
              <Post.Title>{`Post ${index + 1}`}</Post.Title>
              <Post.Excerpt>{post.excerpt}</Post.Excerpt>
            </Post.InfoContainer>
            <Post.StatsContainer>
              <Post.Title>Stats</Post.Title>
              <div>
                {post.stats.distance}
                {post.stats.time}
                {post.stats.speed}
                {post.stats.watts}
              </div>
            </Post.StatsContainer>
          </Post>
      ))}
    </div>
  );
};

export { PostContainer };