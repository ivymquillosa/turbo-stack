import type { Meta, StoryObj } from '@storybook/react'
import { AlertDialog, Button } from '@stack/radix-components'


const meta: Meta<typeof AlertDialog> = {
  title: 'Radix Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: args => (
    <AlertDialog
      trigger={
        <Button variant={'default'}>
          <p className="p-0 m-0">Clear All</p>
        </Button>
      }
      title="Clear All Task"
      description="Are you sure you want to clear all tasks? This action cannot be undone."
      actionLabel="Clear"
      // onActionClick={clearAllTodos}
    />
  )
}
