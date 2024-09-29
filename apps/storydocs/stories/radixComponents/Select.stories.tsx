import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@stack/radix-components'

const meta: Meta<typeof Select> = {
  title: 'Radix Components/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: args => <Select {...args} />,
  args: {
    label: 'Select Color',
    selectOptions: [
      { id:'1', label: 'Red', value: 'red'},
      { id:'2', label: 'Green', value: 'green'}, 
      { id:'3', label: 'Blue', value: 'blue'}, 
      { id:'4', label: 'Yellow', value: 'yellow'}, 

    ]
  }
}
