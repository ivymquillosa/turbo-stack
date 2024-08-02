import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from '@stack/decoupled-components'
import { CommonMeta } from '../utils/commonMeta'

const meta = {
  title: 'Decoupled Components/Progress Bar',
  component: ProgressBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: CommonMeta?.argsType?.color,
    size: CommonMeta?.argsType?.size
  }
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="w-96">
      <ProgressBar
        {...args}
        className="test"
        range={[10, 40]}
        value={10}
        showValue={true}
      />
    </div>
  )
}
