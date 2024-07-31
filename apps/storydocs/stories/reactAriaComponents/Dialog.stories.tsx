import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, Modal, Button } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Dialog',
  component: Dialog.Trigger,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Dialog.Trigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div>
      <Dialog.Trigger {...args}>
        <Button>Dialog</Button>
        <Modal.Overlay>
          <Modal.Content>
            <Dialog.Content
              role="alertdialog"
              className="relative outline-none"
            >
              {({ close }) => (
                <>
                  <p
                    slot="title"
                    className="text-xxl my-0 font-semibold leading-6 text-slate-700"
                  >
                    Delete folder
                  </p>
                  <div className="absolute right-0 top-0 h-6 w-6 stroke-2 text-red-500">
                    I
                  </div>
                  <p className="mt-3 text-slate-500">
                    Are you sure you want to delete "Documents"? All contents
                    will be permanently destroyed.
                  </p>
                  <div className="mt-6 flex justify-end gap-2">
                    <Button color="default" onPress={close}>
                      Cancel
                    </Button>
                    <Button color="danger" onPress={close}>
                      Delete
                    </Button>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Modal.Content>
        </Modal.Overlay>
      </Dialog.Trigger>
    </div>
  )
}
