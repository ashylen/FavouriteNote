import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <h1>Test</h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
      </React.Fragment>
    </ThemeProvider>
  </div>
);

export default Root;
