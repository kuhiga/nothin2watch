import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const _Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Card.args = {
  image: 'https://www.themoviedb.org/t/p/w1280/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg',
  title: 'One Piece',
  episode: 1,
  tags: ['Shonen'],
};
