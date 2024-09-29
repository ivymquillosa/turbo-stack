import { Checkbox } from '@stack/radix-components'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof Checkbox> = {
  title: 'Radix Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: args => (
    <Checkbox
      className='self-start mt-4 h-5 w-5'
      color='primary'
      // onCheckedChange={(checked) =>  }
    />
  )
}
