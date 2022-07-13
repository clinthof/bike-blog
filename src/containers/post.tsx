import { Post } from '../components';
import Link from 'next/link';

const PostContainer = (posts: any) => {
  return (
    <Post.Wrapper>
      {
        posts.posts.map((post: any, index: number) => ( 
          <Link key={index} href={`/posts/${post.node.slug}`} passHref>          
            <Post>
              <Post.InfoContainer>
                <Post.Title>{post.node.title}</Post.Title>
                <Post.Excerpt>{post.node.excerpt}</Post.Excerpt>
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