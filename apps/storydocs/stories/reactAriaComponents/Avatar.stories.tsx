import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@stack/aria-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'React Aria Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    controls: { expanded: true }
  },
  tags: ['autodocs'],
  argTypes: {
    color: CommonMeta?.argsType?.color,
    size: CommonMeta?.argsType?.size
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Avatar',
    src: 'https://avatars.githubusercontent.com/u/72949747?v=4',
    color: 'primary',
    size: 'base',
    className: 'test'
  }
}
