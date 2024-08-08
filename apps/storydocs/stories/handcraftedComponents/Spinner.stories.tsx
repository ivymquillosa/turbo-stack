import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@stack/handcrafted-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Handcrafted Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: CommonMeta?.argsType?.color,
    size: CommonMeta?.argsType?.size
  }
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'base',
    className: 'test'
  }
}
