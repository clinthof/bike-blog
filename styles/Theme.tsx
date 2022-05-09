import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

const theme = {
  colors: {
    blanchedAlmond: '#ffebcd',
    almond: '#f3d7c7',
    unbleachedSilk: '#fed8d3',
    pink: '#ffc0cb',
    salmon: '#fa8072',
    indianRed: '#cb6155',
  },
  fonts: [],
};

const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;