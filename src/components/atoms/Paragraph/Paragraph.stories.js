import React from 'react';

// Modules
import { storiesOf } from '@storybook/react';

// Components
import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module).add('Normal', () => <Paragraph>Hello Roman</Paragraph>);
