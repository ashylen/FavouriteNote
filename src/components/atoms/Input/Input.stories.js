import React from 'react';

// Modules
import { storiesOf } from '@storybook/react';

// Components
import Input from './Input';

storiesOf('Atoms/Input', module)
  .add('Normal', () => <Input placeholder="login" />)
  .add('Search', () => <Input placeholder="search" search />);
