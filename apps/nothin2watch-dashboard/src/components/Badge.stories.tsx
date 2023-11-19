import { Meta, StoryFn } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    type: {
      options: [
        'default',
        'neutral',
        'primary',
        'secondary',
        'accent',
        'ghost',
        'outline',
      ],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const _Badge = Template.bind({});
_Badge.args = {
  label: 'in progress',
  type: 'primary',
};
