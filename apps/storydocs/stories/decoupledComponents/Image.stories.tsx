import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '@stack/decoupled-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Decoupled/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    radius: CommonMeta?.argsType?.radius,
    size: CommonMeta?.argsType?.size
  }
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alt: 'Decoupled Image',
    src: 'https://avatars.githubusercontent.com/u/72949747?v=4',
    className: 'test_image_classname'
  }
}
