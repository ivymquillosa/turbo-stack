import React from 'react'
import { cm } from '@stack/classnames'
import { cva } from 'class-variance-authority'
import { commonTypes } from './types'

const imageVariants = cva(
  'flex items-center justify-center uppercase text-light-500',
  {
    variants: {
      size: {
        sm: 'size-16',
        base: 'size-32',
        lg: 'size-48',
        xl: 'size-64',
        full: 'h-full w-full'
      },
      radius: {
        none: 'rounded-none',
        soft: 'rounded',
        round: 'rounded-full'
      }
    },
    defaultVariants: {
      radius: null
    }
  }
)

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  radius?: commonTypes['radius']
  size?: commonTypes['size']
}

const Image = React.forwardRef<HTMLDivElement, IImageProps>(
  ({ size, radius, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cm(
          imageVariants({ size: size ?? 'full', radius, className })
        )}
      >
        <img className={cm(imageVariants({ radius }))} {...props} />
      </div>
    )
  }
)

Image.displayName = 'Image'

export default Image
