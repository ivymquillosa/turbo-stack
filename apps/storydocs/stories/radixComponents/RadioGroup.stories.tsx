import { RadioGroup } from '@stack/radix-components'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof RadioGroup> = {
  title: 'Radix Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: args => (
    <RadioGroup
      className='self-start mt-4 h-5 w-5'
      color='primary'
      radioItems={[
        { id: '1', label: 'One', value: 'one', },
        { id: '2', label: 'Two', value: 'two', },
        { id: '3', label: 'Three', value: 'three', },
        { id: '4', label: 'Four', value: 'four', },
        { id: '5', label: 'Five', value: 'five', }
      ]}
      // onCheckedChange={(checked) =>  }
    />
  )
}
