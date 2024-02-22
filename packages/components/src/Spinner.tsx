import { FC, RefAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@stack/classnames'

const spinnerVariants = cva(
    'rounded-full animate-spin !border-b-transparent', {
        variants: {
            color: {
                primary : 'border-primary-500',
                secondary : 'border-secondary-500',
                danger : 'border-danger-500',
                warning : 'border-warning-500',
                success : 'border-success-500',
                info : 'border-info-500',
                default : 'border-default-500',
                active : 'border-active-500',
                light : 'border-light-500',
                dark : 'border-dark-500',
                inherit: 'border-inherit'
            },
            size: {
                sm : 'w-3 h-3 border',
                base : 'w-4 h-4 border-2',
                lg : 'w-5 h-5 border-2',
                xl: 'w-6 h-6 border-2'
            }
        },
        defaultVariants: {
            color: 'inherit',
            size: 'base'
        }
    }
)

export interface ISpinnerProps extends VariantProps<typeof spinnerVariants> {
    className?: string
}
const Spinner: FC<ISpinnerProps & RefAttributes<HTMLDivElement>> = forwardRef(
({color, size, className }, ref) => {

    return <div ref={ref} className={cm(spinnerVariants({color, size, className}))}></div>

})

Spinner.displayName='Spinner'

export default Spinner