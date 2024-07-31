import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'base',
    children: 'Hello Checkbox',
    className: 'test',
    defaultSelected: true
  }
}
