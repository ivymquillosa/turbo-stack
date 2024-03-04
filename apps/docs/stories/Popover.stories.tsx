import type { Meta, StoryObj } from '@storybook/react'
import { Popover, Dialog, Button } from '@stack/component'

const meta = {
  title: 'Components/Popover',
  component: Popover.Content,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Popover.Content>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: args => (
    <div>
      <Dialog.Trigger>
        <Button>Popover</Button>
          <Popover.Content {...args}>
          <Dialog.Content
              className="p-2 outline-none text-gray-700"
            >
              <div className="flex flex-col">
                <div
                  className="p-2 rounded-lg hover:bg-gray-100 grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 text-[inherit] no-underline outline-none focus-visible:ring-2 ring-pink-800"
                >
                  <img src='https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="rounded-full w-5 h-5 row-span-3" />
                  <div className="text-gray-800 font-semibold leading-5">{'Sonja Balmann'}</div>
                  <div className="text-gray-400">
                  </div>
                  <div className="text-sm text-gray-500 col-span-2">
                    Commented 2h ago
                  </div>
                  <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 mt-1 mb-0 col-span-2">
                    {"This looks great! Let's ship it."}
                  </p>
                </div>
                <div
                  className="p-2 rounded-lg hover:bg-gray-100 grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 text-[inherit] no-underline outline-none focus-visible:ring-2 ring-pink-800"
                >
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <div className="text-gray-800 font-semibold leading-5">{'Maia Pettegree'}</div>
                  <div className="text-gray-400">
                  </div>
                  <div className="text-sm text-gray-500 col-span-2">
                    Commented 4h ago
                  </div>
                  <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 mt-1 mb-0 col-span-2">
                    {'Can you add a bit more pizzazz?'}
                  </p>
                </div>
                <div
                  className="p-2 rounded-lg hover:bg-gray-100 grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 text-[inherit] no-underline outline-none focus-visible:ring-2 ring-pink-800"
                >
                  <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' className="rounded-full w-5 h-5 row-span-3" />
                  <div className="text-gray-800 font-semibold leading-5">{'Charles Webb'}</div>
                  <div className="text-gray-400">
                  </div>
                  <div className="text-sm text-gray-500 col-span-2">
                    Commented 1d ago
                  </div>
                  <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 mt-1 mb-0 col-span-2">
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
    placement:'top'
  }
}
