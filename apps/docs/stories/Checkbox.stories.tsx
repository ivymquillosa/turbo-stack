import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@stack/component';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    size:'base',
    children:'Hello Checkbox',
    className:'test',
    defaultSelected: true,
    
  },
};