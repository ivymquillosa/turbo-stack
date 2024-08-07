import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from '@stack/aria-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'React Aria Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { ...CommonMeta.argsType }
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="w-96 ">
      <TextField {...args} />
      {/* <TextField/> */}
    </div>
  ),
  args: {
    isRequired: true,
    isDisabled: false,
    onChange: e => console.log(e),
    // value: 'test disabled',
    errorMessage: 'Required: Please fill out this field.',
    description: '',
    label: 'First Name',
    className: 'test TextField'
  }
}
