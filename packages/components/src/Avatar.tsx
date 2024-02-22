import React, { useMemo } from 'react'
import { cm } from '@stack/classnames'
import { cva, type VariantProps } from 'class-variance-authority'

const avatarVariants = cva(
    'text-light-500 uppercase flex items-center justify-center',
    {
        variants: {
            color: {
                primary : 'bg-primary-500',
                secondary : 'bg-secondary-500',
                danger : 'bg-danger-500',
                warning : 'bg-warning-500 text-dark-500',
                success : 'bg-success-500',
                info : 'bg-info-500',
                default : 'bg-default-500',
                active : 'bg-active-500',
                light : 'bg-light-500 text-dark-500',
                dark : 'bg-dark-500',
                inherit: 'bg-inherit'
            },
            size: {
                sm: 'text-sm/8 w-[34px] h-[34px]',
                base: 'text-base/9 w-9 h-9',
                lg: 'text-base/9 w-[38px] h-[38px] font-semibold',
                xl: 'text-base/10 w-10 h-10 font-semibold',
                medyoDako: 'text-base/9 w-[42px] h-[42px] font-semibold'
            },
            radius: {
                none: 'rounded-none',
                soft: 'rounded',
                round: 'rounded-full' 
            },
            
        },
        defaultVariants: {
            color: 'primary',
            size:'base',
            radius:'round'
        }
    }
)

export interface IAvatarProps extends VariantProps<typeof avatarVariants> {
    className?: string
    name: string
    src?: React.ImgHTMLAttributes<HTMLImageElement>['src']
}

const Avatar=React.forwardRef<HTMLDivElement, IAvatarProps>(
    ({color, size, radius, className, name, src }, ref) => {
    
    const memoizedName = useMemo(() => {
        if(!name) return 'U'
        const splitName = name.split(' ')
        if(splitName.length > 1){
            return splitName[0].charAt(0) + splitName[splitName.length - 1].charAt(0)
        } else {
            return splitName[0].charAt(0)
        }
    }, [name]
    )

    return (
        <div ref={ref} className={cm(avatarVariants({color, size, radius, className}))}>
           {src ? <img className={cm(avatarVariants({radius}))} src={src} alt={name}/> : memoizedName}
        </div>
    )
    }
  )

  Avatar.displayName = 'Avatar'

export default Avatar