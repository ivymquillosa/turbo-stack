import { Badge } from '@stack/radix-components'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof Badge> = {
  title: 'Radix Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: args => (
    <Badge
      variant='default'
      children='Badge'
    />
  )
}
