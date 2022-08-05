import { ReactNode, forwardRef, } from 'react';
import {
  Wrapper,
  Card,
  StatsContainer,
  InfoContainer,
  Title,
  Excerpt,
} from './styles/postStyles';

export interface Props {
  children: ReactNode;
};

const Post = (props: Props) => {
  return <Card {...props}></Card>;
};

Post.Wrapper = function PostWrapper(props: Props) {
  return <Wrapper {...props}></Wrapper>
}

Post.StatsContainer = function PostStatsContainer(props: Props) {
  return <StatsContainer {...props}></StatsContainer>;
};

Post.InfoContainer = function PostInfoContainer(props: Props) {
  return <InfoContainer {...props}></InfoContainer>;
};

Post.Title = function PostTitle(props: Props) {
  return <Title {...props}></Title>;
};

Post.Excerpt = function PostExcerpt(props: Props) {
  return <Excerpt {...props}></Excerpt>;
};

export default Post;