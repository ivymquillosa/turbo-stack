import type { Preview } from '@storybook/react'
import '../index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: [
          'Handcrafted Components',
          'React Aria Components',
          'Radix Components'
        ]
      }
    }
  }
}

export default preview
