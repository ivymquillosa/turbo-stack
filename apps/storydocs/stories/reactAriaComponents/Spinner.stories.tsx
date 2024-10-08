import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'base',
    className: 'test'
  }
}
