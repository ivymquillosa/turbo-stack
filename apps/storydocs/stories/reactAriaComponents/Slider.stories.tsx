import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="flex h-96 w-96 items-center justify-center">
      <Slider {...args} />
    </div>
  ),
  args: {}
}
