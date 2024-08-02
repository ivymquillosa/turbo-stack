import { ToggleButton } from '@stack/aria-components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'React Aria Components/Toggle Button Group',
  component: ToggleButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="flex gap-2">
      <ToggleButton>B</ToggleButton>
      <ToggleButton>I</ToggleButton>
      <ToggleButton>U</ToggleButton>
    </div>
  )
}
