import { useState } from 'react'
import { Button, FileTrigger } from '@stack/component'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/FileTrigger',
  component: FileTrigger,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof FileTrigger>

export default meta
type Story = StoryObj<typeof meta>

const FileTriggerExample = (args:Partial<typeof FileTrigger>) => {
    const [file, setFile] = useState(null)

    return (
        <>
        <FileTrigger
            {...args}   
            onSelect={(e) => {
            let files = Array.from(e);
            let filenames = files.map((file) => file.name);
            setFile(filenames);
            }}>
            <Button>Select a file</Button>
        </FileTrigger>
        {file && file}
        </>
    )
}

export const Primary: Story = {
  render: args => (
    <FileTriggerExample {...args}/>
  )
  
}
