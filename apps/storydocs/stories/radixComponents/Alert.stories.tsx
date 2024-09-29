import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from '@stack/radix-components'
import { AlertCircle } from 'lucide-react'


const meta: Meta<typeof Alert> = {
  title: 'Radix Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    // type: {
    //   // control: { type: 'radio' },
    //   // options: ['button', 'submit', 'reset']
    // }
  }
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: args => (
    <Alert variant="destructive" {...args}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
