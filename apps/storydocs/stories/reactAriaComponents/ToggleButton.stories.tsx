import { ToggleButton } from '@stack/aria-components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'React Aria/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'need styling'
  }
}
