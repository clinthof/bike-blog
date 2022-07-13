import { Landing, } from '../components';
import Link from 'next/link';
import { PostContainer } from './post';

const LandingContainer = ({ posts }: any) => {
  return (
    <div className='page-content'>
      <Landing>
        <Landing.Splash>
          <Landing.Title>Let's ride.</Landing.Title>
        </Landing.Splash>
        <Landing.Inner>
          <Landing.Column>
            <Landing.APIContent>Strava</Landing.APIContent>
            <Landing.APIContent>Spotify</Landing.APIContent>
          </Landing.Column>
          <Landing.Column>
            <PostContainer posts={posts} />
          </Landing.Column>
        </Landing.Inner>
      </Landing>
    </div>
  );
};

export { LandingContainer };