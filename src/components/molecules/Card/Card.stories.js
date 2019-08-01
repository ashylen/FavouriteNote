import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Normal', () => <Card />);
storiesOf('Card', module).add('Secondary', () => <Card cardType="twitter" />);
storiesOf('Card', module).add('Tertiary', () => <Card cardType="article" />);
