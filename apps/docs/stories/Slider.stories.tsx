import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@stack/component';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div className='bg-dark-200 w-96 h-96 flex items-center justify-center'>
      {' '}
      <Slider orientation='vertical' {...args} />
    </div>
  ),
};
