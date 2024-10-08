import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // children: 'Select',
    // color: 'primary',
    // radius: 'round',
    // block: false,
    // variant: 'solid',
  }
}
