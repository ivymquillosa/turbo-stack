import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="w-96">
      <Input {...args} />
    </div>
  ),
  args: {
    value: 10,
    className: 'test Input border border-default-500'
  }
}
