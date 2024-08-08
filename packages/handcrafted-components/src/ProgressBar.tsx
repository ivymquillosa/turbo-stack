import React, { useEffect, useState } from 'react'
import { cva } from 'class-variance-authority'
import { cm } from '@stack/classnames'
import { commonTypes } from './types'

const progressVariants = cva(' rounded-full', {
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
    size: {
      sm: 'h-3 min-h-3',
      base: 'h-4 min-h-4',
      lg: 'h-5 min-h-5',
      xl: 'h-6 min-h-6'
    }
  },
  defaultVariants: {
    color: 'inherit',
    size: 'base'
  }
})

export interface IProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: commonTypes['color']
  size?: commonTypes['size']
  type?: 'line' | 'circular' | 'half-circle'
  showValue?: boolean
  value: number
  range?: any
}
const ProgressBar = React.forwardRef<HTMLDivElement, IProgressProps>(
  (
    {
      color = 'primary',
      size = 'base',
      className,
      showValue = false,
      range = [0, 10],
      type,
      value,
      ...props
    },
    ref
  ) => {
    const [percent, setPercent] = useState<any>(0)

    useEffect(() => {
      if (!range || !value) return

      const rStart = range[0] || 0
      const rEnd = range[range.length - 1]
      const onePer = (rEnd - rStart) / 100
      const calcPercent = Math.round(value / onePer)
      setPercent(calcPercent)
    }, [value, range])

    return (
      <div
        ref={ref}
        className={cm(
          progressVariants({ size, className }),
          'relative w-full border'
        )}
        {...props}
      >
        {showValue && (
          <span className="absolute inset-0 flex items-center justify-center text-center text-[8px] leading-none">{`${percent}%`}</span>
        )}
        <div
          style={{ width: `${percent}%` }}
          className={cm(progressVariants({ color, size: null }), 'h-full')}
        ></div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
