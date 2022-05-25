import { ReactNode } from 'react';
import { 
  Container, 
  Inner,
  Splash,
  Column,
  Title, 
  APIContent,
 } from './styles/landingStyles';

export interface Props {
  children: ReactNode;
};

const Landing = ({ children, ...restProps }: Props) => {
  return <Container {...restProps}>{children}</Container>;
};

Landing.Title = function LandingTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};

Landing.Splash = function LandingSplash({ children, ...restProps }: Props) {
  return <Splash {...restProps}>{children}</Splash>;
};

Landing.Inner = function LandingInner({ children, ...restProps }: Props) {
  return <Inner {...restProps}>{children}</Inner>;
};

Landing.Column = function LandingColumn({ children, ...restProps }: Props) {
  return <Column {...restProps}>{children}</Column>;
};

Landing.APIContent = function LandingAPIContent({ children, ...restProps }: Props) {
  return <APIContent {...restProps}>{children}</APIContent>;
};


export default Landing;