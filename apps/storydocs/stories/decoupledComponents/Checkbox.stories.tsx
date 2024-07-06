import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@stack/decoupled-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Decoupled/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { ...CommonMeta.argsType }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    label: 'Checkbox',
    color: 'primary',
    size: 'base',
    className: 'test-checkbox'
  }
}
