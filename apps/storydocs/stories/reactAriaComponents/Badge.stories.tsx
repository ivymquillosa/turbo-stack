import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@stack/aria-components'

const meta = {
  title: 'React Aria/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Badge',
    color: 'primary',
    size: 'base',
    className: 'test'
  }
}
