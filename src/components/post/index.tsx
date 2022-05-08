import { ReactNode } from 'react';
import { Container } from './styles/postStyles';

type Props = {
  children: ReactNode,
};

const Post = ({ children, ...restProps }: Props) => {
  return <Container {...restProps}>{children}</Container>;
};


export default Post;