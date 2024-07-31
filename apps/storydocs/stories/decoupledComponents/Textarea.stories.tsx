import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@stack/decoupled-components'
import { CommonMeta } from '../utils/commonMeta'
import { FiInfo } from 'react-icons/fi'

const meta = {
  title: 'Decoupled Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { ...CommonMeta.argsType }
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'outlined',
    color: 'default',
    radius: 'soft',
    size: 'base',
    label: 'Test Label',
    placeholder: 'Input here',
    icon: <FiInfo />
  }
}
