import { ToggleButton } from '@stack/component'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args:{
    children: 'need styling'
  }
  
}
