import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@stack/classnames'

const buttonVariants = cva(
  'flex gap-2 items-center justify-center',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      radius: {
        none: 'rounded-none',
        soft: 'rounded',
        round: 'rounded-full'
      },
    size: {
        sm: 'text-sm/8 px-4',
        base: 'text-base/9 px-5',
        lg: 'text-base/9 px-5 font-semibold',
        xl: 'text-base/10 px-6 font-semibold'
    },
    transition: {
        scaleUp:'hover:scale-105 transition-all duration-200',
        none: ''
    },
    block: {true:'w-full', false: ''},
    },
    
    defaultVariants: {
      variant: 'default',
      radius: 'soft',
      size: 'base'
    }
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, transition, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cm(buttonVariants({ variant, size, radius, transition, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
