import { ReactNode } from 'react';
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

const Post = ({ children, ...restProps }: Props) => {
  return <Card {...restProps}>{children}</Card>;
};

Post.Wrapper = function PostWrapper({ children, ...restProps }: Props) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Post.StatsContainer = function PostStatsContainer({ children, ...restProps }: Props) {
  return <StatsContainer {...restProps}>{children}</StatsContainer>;
};

Post.InfoContainer = function PostInfoContainer({ children, ...restProps }: Props) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

Post.Title = function PostTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};

Post.Excerpt = function PostExcerpt({ children, ...restProps }: Props) {
  return <Excerpt {...restProps}>{children}</Excerpt>;
};

export default Post;