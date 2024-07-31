import type { Meta, StoryObj } from '@storybook/react'
import { Popover, Dialog, Button } from '@stack/aria-components'

const meta = {
  title: 'React Aria Components/Popover',
  component: Popover.Content,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Popover.Content>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div>
      <Dialog.Trigger>
        <Button>Popover</Button>
        <Popover.Content {...args}>
          <Dialog.Content className="p-2 text-gray-700 outline-none">
            <div className="flex flex-col">
              <div className="grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 rounded-lg p-2 text-[inherit] no-underline outline-none ring-pink-800 hover:bg-gray-100 focus-visible:ring-2">
                <img
                  src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="row-span-3 h-5 w-5 rounded-full"
                />
                <div className="font-semibold leading-5 text-gray-800">
                  {'Sonja Balmann'}
                </div>
                <div className="text-gray-400"></div>
                <div className="col-span-2 text-sm text-gray-500">
                  Commented 2h ago
                </div>
                <p className="col-span-2 mb-0 mt-1 line-clamp-2 overflow-hidden text-ellipsis text-sm">
                  {"This looks great! Let's ship it."}
                </p>
              </div>
              <div className="grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 rounded-lg p-2 text-[inherit] no-underline outline-none ring-pink-800 hover:bg-gray-100 focus-visible:ring-2">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <div className="font-semibold leading-5 text-gray-800">
                  {'Maia Pettegree'}
                </div>
                <div className="text-gray-400"></div>
                <div className="col-span-2 text-sm text-gray-500">
                  Commented 4h ago
                </div>
                <p className="col-span-2 mb-0 mt-1 line-clamp-2 overflow-hidden text-ellipsis text-sm">
                  {'Can you add a bit more pizzazz?'}
                </p>
              </div>
              <div className="grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 rounded-lg p-2 text-[inherit] no-underline outline-none ring-pink-800 hover:bg-gray-100 focus-visible:ring-2">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  className="row-span-3 h-5 w-5 rounded-full"
                />
                <div className="font-semibold leading-5 text-gray-800">
                  {'Charles Webb'}
                </div>
                <div className="text-gray-400"></div>
                <div className="col-span-2 text-sm text-gray-500">
                  Commented 1d ago
                </div>
                <p className="col-span-2 mb-0 mt-1 line-clamp-2 overflow-hidden text-ellipsis text-sm">
                  {"Here's a first pass. What do you think?"}
                </p>
              </div>
            </div>
          </Dialog.Content>
        </Popover.Content>
      </Dialog.Trigger>
    </div>
  ),
  args: {
    placement: 'top'
  }
}
