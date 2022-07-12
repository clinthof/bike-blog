import { Post } from '../components';
import Link from 'next/link';

const PostContainer = (posts: any) => {
  console.log(posts.posts);
  return (
    <Post.Wrapper>
      {
        posts.posts.map((post: any, index: number) => ( 
          <Link key={index} href={`/posts/${index + 1}`} passHref>          
            <Post>
              <Post.InfoContainer>
                <Post.Title>{`Post ${index + 1}`}</Post.Title>
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