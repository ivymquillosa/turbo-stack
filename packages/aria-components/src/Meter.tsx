import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Label, Meter as RAMeter } from 'react-aria-components'
import { cva } from 'class-variance-authority'
import { cm } from '@stack/classnames'
import { commonTypes } from './types'

const meterVariants = cva('flex', {
  variants: {
    color: {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      danger: 'bg-danger-500',
      warning: 'bg-warning-500',
      success: 'bg-success-500',
      info: 'bg-info-500',
      default: 'bg-default-500',
      active: 'bg-active-500',
      light: 'bg-light-500',
      dark: 'bg-dark-500',
      inherit: 'bg-inherit'
    },
    borderColor: {
      primary: 'border border-primary-500',
      secondary: 'border border-secondary-500',
      danger: 'border border-danger-500',
      warning: 'border border-warning-500',
      success: 'border border-success-500',
      info: 'border border-info-500',
      default: 'border border-default-500',
      active: 'border border-active-500',
      light: 'border border-light-500',
      dark: 'border border-dark-500',
      inherit: 'border border-inherit'
    },
    radius: {
      none: 'rounded-none',
      soft: 'rounded',
      round: 'rounded-full'
    },
    size: {
      sm: 'h-2',
      base: 'h-4',
      lg: 'h-6',
      xl: 'h-8'
    }
  },

  defaultVariants: {
    color: null,
    size: null,
    borderColor: null,
    radius: null
  }
})

export interface IMeterProps {
  label?: string
  color?: commonTypes['color']
  size?: commonTypes['size']
  radius?: commonTypes['radius']
}

const Meter = forwardRef<
  ElementRef<typeof RAMeter>,
  ComponentPropsWithoutRef<typeof RAMeter> & IMeterProps
>(function ReactAriaMeter(props, ref) {
  const {
    className,
    radius = 'none',
    size = 'base',
    color = 'primary',
    label,
    ...rest
  } = props
  return (
    <RAMeter ref={ref} {...rest}>
      {({ percentage, valueText }) => (
        <>
          <div className="flex w-full justify-between text-sm">
            <Label>{label}</Label>
            <span>{valueText}</span>
          </div>
          <div
            className={cm(meterVariants({ size, radius, borderColor: color }))}
          >
            <div
              className={cm(meterVariants({ color, radius }), 'rounded-r-none')}
              style={{ width: percentage + '%' }}
            />
          </div>
        </>
      )}
    </RAMeter>
  )
})

Meter.displayName = 'Meter'

export default Meter
