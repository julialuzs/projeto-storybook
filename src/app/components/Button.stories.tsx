import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
    size: 'large'
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
    size: 'medium'
  },
};