import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, Button } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Tooltip',
  component: Tooltip.Trigger,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Tooltip.Trigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Tooltip.Trigger {...args}>
      <Button>Tooltip</Button>
      <Tooltip.Content placement="bottom">
        <div className="bg-primary-50">Hello tooltip</div>
      </Tooltip.Content>
    </Tooltip.Trigger>
  )
  // args:{}
}
