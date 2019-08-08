import React from 'react';

// Modules
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// Components
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Normal', () => <Sidebar />);
