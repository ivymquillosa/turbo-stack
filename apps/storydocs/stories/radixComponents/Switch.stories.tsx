import { Switch } from '@stack/radix-components'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof Switch> = {
  title: 'Radix Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Airplane Mode</label>
    </div>
  )
}
