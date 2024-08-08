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
          'Documentaion',
          'Handcrafted Components',
          'React Aria Components',
          'Radix Components'
        ]
      },
      viewMode: 'docs',
    }
  }
}

export default preview
