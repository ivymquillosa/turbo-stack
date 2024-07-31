import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@stack/radix-components'

const meta: Meta<typeof Button> = {
  title: 'Radix Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset']
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: args => <Button {...args} />,
  args: {
    children: 'Hello',
    type: 'button',
    onClick: () => {
      // eslint-disable-next-line no-alert -- testing only
      alert('Hello from Turborepo!')
    }
  }
}
