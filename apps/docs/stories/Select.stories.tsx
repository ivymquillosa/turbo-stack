import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@stack/component';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // children: 'Select',
    // color: 'primary',
    // radius: 'round',
    // block: false,
    // variant: 'solid',
  },
};