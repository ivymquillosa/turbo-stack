import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@stack/handcrafted-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Handcrafted Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { ...CommonMeta.argsType }
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
