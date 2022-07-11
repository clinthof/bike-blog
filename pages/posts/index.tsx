import {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { PostContainer } from '../../src/containers/post';
import { getPosts } from '../../services';

const posts: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PostContainer posts={posts} />
  );
};

export default posts;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts
    }
  }
};