import { Meta } from '@storybook/react'

export const CommonMeta = {
  argsType: {
    color: {
      defaultValue: 'primary',
      options: [
        'primary',
        'secondary',
        'danger',
        'warning',
        'success',
        'info',
        'default',
        'active',
        'light',
        'dark'
      ],
      control: { type: 'select' }
    },
    variant: {
      defaultValue: 'solid',
      options: ['flat', 'solid', 'outlined', 'soft'],
      control: { type: 'select' }
    },
    size: {
      defaultValue: 'base',
      options: ['sm', 'base', 'lg', 'xl'],
      control: { type: 'select' }
    },
    radius: {
      defaultValue: 'round',
      options: ['none', 'soft', 'round'],
      control: { type: 'select' }
    }
  }
}
