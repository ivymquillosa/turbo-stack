import React, { useState } from 'react'
import { Calendar } from '@stack/radix-components'
import type { Meta, StoryObj } from '@storybook/react'


function CalendarComponent(): JSX.Element {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      className="rounded-md border"
      mode="single"
      onSelect={setDate}
      selected={date}
    />
  )
}

const meta: Meta<typeof Calendar> = {
  title: 'Radix Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => <CalendarComponent />
}
