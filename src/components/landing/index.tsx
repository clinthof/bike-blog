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

const Landing = (props: Props) => {
  return <Container {...props}></Container>;
};

Landing.Title = function LandingTitle(props: Props) {
  return <Title {...props}></Title>;
};

Landing.Splash = function LandingSplash(props: Props) {
  return <Splash {...props}></Splash>;
};

Landing.Inner = function LandingInner(props: Props) {
  return <Inner {...props}></Inner>;
};

Landing.Column = function LandingColumn(props: Props) {
  return <Column {...props}></Column>;
};

Landing.APIContent = function LandingAPIContent(props: Props) {
  return <APIContent {...props}></APIContent>;
};


export default Landing;