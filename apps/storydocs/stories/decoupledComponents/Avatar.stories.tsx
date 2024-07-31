import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@stack/decoupled-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Decoupled Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
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
    name: 'Decoupled Avatar',
    src: 'https://avatars.githubusercontent.com/u/72949747?v=4',
    color: 'primary',
    size: 'base',
    className: 'test'
  }
}
