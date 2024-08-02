import { ToggleButton } from '@stack/aria-components'
import type { Meta, StoryObj } from '@storybook/react'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'React Aria Components/Toggle Button',
  component: ToggleButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { ...CommonMeta.argsType }
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'B'
  }
}
