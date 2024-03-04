import { Button } from '@stack/component'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'primary',
    radius: 'round',
    block: false,
    loading: true,
    onPress: () => {
      alert('hi button')
    }
  }
}
