import { Button } from '@stack/aria-components'
import type { Meta, StoryObj } from '@storybook/react'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'React Aria Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { ...CommonMeta.argsType }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
