import React from 'react';

// Modules
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// Utilities
import { theme } from 'theme/mainTheme';

// Components
import Heading from './Heading';

describe('Heading component', () => {
  test('Render children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>Hello</Heading>
      </ThemeProvider>,
    );

    getByText('Hello');
  });
});
