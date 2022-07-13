import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { LandingContainer } from '../src/containers/landing';
import { getPosts } from '../services';

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>The Bike Blog</title>
      </Head>
      <LandingContainer posts={posts} />
    </div>
  )
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts
    }
  }
};

