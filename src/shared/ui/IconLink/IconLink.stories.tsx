import type { Meta, StoryObj } from '@storybook/react';

import IconLink from './IconLink';

const meta = {
  component: IconLink,
} satisfies Meta<typeof IconLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [],
    onClick: {},
    onFocus: {},
    onBlur: {},
    onMouseEnter: {},
    onMouseLeave: {},
    icon: null,
    title: "nmn,'",
    isActive: true
  }
};