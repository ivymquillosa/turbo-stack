import { ElementRef, forwardRef } from 'react';
import {
  Label,
  Slider as RASlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderProps,
} from 'react-aria-components';
import { VariantProps, cva } from 'class-variance-authority';
import { cm } from '@stack/classnames';

const sliderVariants = cva('flex', {
  variants: {
    color: {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      danger: 'text-danger-500',
      warning: 'text-warning-500',
      success: 'text-success-500',
      info: 'text-info-500',
      default: 'text-default-500',
      active: 'text-active-500',
      light: 'text-light-500',
      dark: 'text-dark-500',
      inherit: 'text-inherit',
    },
    size: {
      sm: 'w-6 p-px',
      base: 'w-8 p-px',
      lg: 'w-10 p-px',
      xl: 'w-12 p-px',
    },
    orientation: {
      horizontal: 'w-full h-7',
      vertical: 'h-full w-7',
    },
    trackColor: {
      primary:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-primary-200',
      secondary:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-secondary-200',
      danger:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-danger-200',
      warning:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-warning-200',
      success:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-success-200',
      info: 'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-info-200',
      default:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-default-200',
      active:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-active-200',
      light:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-light-200',
      dark: 'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-dark-200',
      inherit:
        'absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-inherit',
    },
    thumbColor: {
      primary:
        'border border-solid border-primary-600 bg-primary-500 transition dragging:bg-primary-400 focus-visible:ring-1 ring-primary-600',
      secondary:
        'border border-solid border-secondary-600 bg-secondary-500 transition dragging:bg-secondary-400 focus-visible:ring-1 ring-secondary-600',
      danger:
        'border border-solid border-danger-600 bg-danger-500 transition dragging:bg-danger-400 focus-visible:ring-1 ring-danger-600',
      warning:
        'border border-solid border-warning-600 bg-warning-500 transition dragging:bg-warning-400 focus-visible:ring-1 ring-warning-600',
      success:
        'border border-solid border-success-600 bg-success-500 transition dragging:bg-success-400 focus-visible:ring-1 ring-success-600',
      info: 'border border-solid border-info-600 bg-info-500 transition dragging:bg-info-400 focus-visible:ring-1 ring-info-600',
      default:
        'border border-solid border-default-600 bg-default-500 transition dragging:bg-default-400 focus-visible:ring-1 ring-default-600',
      active:
        'border border-solid border-active-600 bg-active-500 transition dragging:bg-active-400 focus-visible:ring-1 ring-active-600',
      light:
        'border border-solid border-light-600 bg-light-500 transition dragging:bg-light-400 focus-visible:ring-1 ring-light-600',
      dark: 'border border-solid border-dark-600 bg-dark-500 transition dragging:bg-dark-400 focus-visible:ring-1 ring-dark-600',
      inherit:
        'border border-solid border-inherit bg-inherit transition dragging:bg-inherit focus-visible:ring-1 ring-inherit  ',
    },
    circleSize: {
      sm: 'w-3 h-3 group-selected:translate-x-[85%]',
      base: 'w-4 h-4 group-selected:translate-x-[90%]',
      lg: 'w-5 h-5 group-selected:translate-x-[90%]',
      xl: 'w-6 h-6 group-selected:translate-x-[90%]',
    },
    textSize: {
      sm: 'text-sm/8',
      base: 'text-base/9',
      lg: 'text-lg/9',
      xl: 'text-xl/9',
    },
  },

  defaultVariants: {
    color: null,
    size: null,
    orientation: null,
    trackColor: null,
    thumbColor: null,
    circleSize: null,
    textSize: null,
  },
});

export interface ISliderProps
  extends Omit<SliderProps, 'children'>,
    Omit<
      VariantProps<typeof sliderVariants>,
      'trackColor' | 'circleSize' | 'textSize' | 'thumbColor' | 'orientation'
    > {}

const Slider = forwardRef<ElementRef<typeof RASlider>, ISliderProps>(
  ({ className, orientation='horizontal', color = 'primary', ...props }, ref) => {
    return (
      <RASlider ref={ref} orientation={orientation} {...props} className={cm('w-full h-full', className)}>
        <div className={cm(sliderVariants({ color }))}>
          <Label className='flex-1'>Opacity</Label>
          <SliderOutput />
        </div>
        <SliderTrack className={cm('relative', sliderVariants({orientation}))}>
          {({ state, orientation }) => {
            console.log('orientation', orientation);
            return (
              <>
                {/* track */}
                <div className={cm(sliderVariants({ trackColor: color }))} />
                {/* fill */}
                <div
                  className={cm(
                    'absolute h-2 top-[50%] translate-y-[-50%] rounded-full',
                    `bg-${color}-500`
                  )}
                  style={{ width: state.getThumbPercent(0) * 100 + '%' }}
                />
                <SliderThumb
                  className={cm(
                    'h-7 w-7 top-[50%] rounded-full outline-none',
                    sliderVariants({ thumbColor: color })
                  )}
                />
              </>
            );
          }}
        </SliderTrack>
      </RASlider>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
