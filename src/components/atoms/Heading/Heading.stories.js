import React from 'react';

// Modules
import { storiesOf } from '@storybook/react';

// Components
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Hello Roman</Heading>)
  .add('big', () => <Heading big>Hello Roman</Heading>);
