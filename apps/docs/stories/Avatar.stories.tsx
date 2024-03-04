import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@stack/component'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Avatar>

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
