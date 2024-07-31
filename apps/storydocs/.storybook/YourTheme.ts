import { create } from '@storybook/theming/create'
import turbo_logo from '../public/turbostack.png'

export default create({
  base: 'light',
  brandTitle: 'Turbo stack components',
  brandUrl: 'https://example.com',
  brandImage: turbo_logo,
  brandTarget: '_self'
})
