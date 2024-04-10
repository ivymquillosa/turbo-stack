import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@stack/aria-components'

const meta = {
  title: 'React Aria/Switch',
  component: Switch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'base',
    children: 'Hello Switch',
    className: 'test'
  }
}
