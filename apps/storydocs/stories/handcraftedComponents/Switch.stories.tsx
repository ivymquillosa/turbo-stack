import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@stack/handcrafted-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Handcrafted Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: CommonMeta?.argsType?.color,
    size: CommonMeta?.argsType?.size
  }
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'base',
    children: 'Hello Switch',
    className: 'test'
  }
}
