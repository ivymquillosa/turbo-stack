import type { Meta, StoryObj } from '@storybook/react'
import { Meter } from '@stack/aria-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'React Aria Components/Meter',
  component: Meter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: CommonMeta.argsType.size,
    color: CommonMeta.argsType.color,
    radius: CommonMeta.argsType.radius
  }
} satisfies Meta<typeof Meter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="w-96">
      <Meter {...args} />
    </div>
  ),
  args: {
    value: 10,
    label: 'sample meter',
    className: 'test Meter'
  }
}
