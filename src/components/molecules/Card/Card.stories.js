import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module).add('Normal', () => <Card />);
storiesOf('Molecules/Card', module).add('Secondary', () => <Card cardType="twitter" />);
storiesOf('Molecules/Card', module).add('Tertiary', () => <Card cardType="article" />);
