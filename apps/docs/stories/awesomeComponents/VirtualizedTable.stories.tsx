import type { Meta, StoryObj } from '@storybook/react'
import { Avatar as SAvatar } from '@stack/awesome-components'

const meta = {
  title: 'Awesome/VirtualizedTable',
  component: SAvatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'Avatar',
    src: 'https://avatars.githubusercontent.com/u/72949747?v=4',
    color: 'primary',
    size: 'base',
    className: 'test'
  }
}
