import { Button } from '@stack/handcrafted-components'
import type { Meta, StoryObj } from '@storybook/react'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Handcrafted Components/Button',
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
    size: 'xl',
    block: false,
    loading: true,
    onClick: () => {
      alert('hi button')
    }
  }
}
