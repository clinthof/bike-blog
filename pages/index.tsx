import type { NextPage } from 'next';
import Head from 'next/head';
import { LandingContainer } from '../src/containers/landing';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Bike Blog</title>
      </Head>
      <LandingContainer />
    </div>
  )
}

export default Home
