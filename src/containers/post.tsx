import { Post } from '../components';
import { fakePosts } from '../utils/data';
import Link from 'next/link';

const PostContainer = () => {
  return (
    <Post.Wrapper>
      {
        fakePosts.map((post, index) => ( 
          <Link key={index} href={`/posts/${index + 1}`} passHref>          
            <Post>
              <Post.InfoContainer>
                <Post.Title>{`Post ${index + 1}`}</Post.Title>
                <Post.Excerpt>{post.excerpt}</Post.Excerpt>
              </Post.InfoContainer>
              <Post.StatsContainer>
                <Post.Title>
                  Ride Statistics
                </Post.Title>
              </Post.StatsContainer>
            </Post>
          </Link>
      ))}
    </Post.Wrapper>
  );
};

export { PostContainer };