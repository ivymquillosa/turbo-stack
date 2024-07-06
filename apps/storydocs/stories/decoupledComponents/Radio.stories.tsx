import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@stack/decoupled-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Decoupled/Radio',
  component: Radio,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: CommonMeta?.argsType?.color,
    size: CommonMeta?.argsType?.size
  }
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    label: 'Radio',
    color: 'primary',
    size: 'base',
    className: 'test-Radio'
  }
}
