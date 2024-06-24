import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'
import ReactAriaTailwind from 'tailwindcss-react-aria-components'
import AnimateTailwind from 'tailwindcss-animate'

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: {
          // depends on the primary color of your project
          50: '#FEEBF2',
          100: '#FED8E6',
          200: '#FCB5CF',
          300: '#FB8EB6',
          400: '#F96CA0',
          500: '#F84587',
          600: '#F60960',
          700: '#B60747',
          800: '#7B0530',
          900: '#3B0217',
          950: '#1D010C'
        },
        secondary: {
          // depends on the secondary color of your project
          50: '#F4F1FE',
          100: '#E9E2FD',
          200: '#D2C6FB',
          300: '#B8A4F9',
          400: '#A288F7',
          500: '#8B6AF5',
          600: '#5728F1',
          700: '#380DC4',
          800: '#260986',
          900: '#130443',
          950: '#0A0221'
        },
        default: {
          // gray ni siya
          50: '#F1F2F3',
          100: '#E1E3E5',
          200: '#C3C7CB',
          300: '#A5ABB1',
          400: '#899299',
          500: '#6C757D',
          600: '#575F65',
          700: '#40454A',
          800: '#2B2E31',
          900: '#151719',
          950: '#0C0D0E'
        },
        light: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FCFCFD',
          300: '#FCFCFD',
          400: '#F9FAFB',
          500: '#F8F9FA',
          600: '#BEC7D0',
          700: '#8596A8',
          800: '#536374',
          900: '#2A333C',
          950: '#151A1E'
        },
        dark: {
          50: '#E9EBED',
          100: '#D5D9DC',
          200: '#A8B1B8',
          300: '#7E8B95',
          400: '#58626A',
          500: '#343A3F',
          600: '#292E32',
          700: '#202427',
          800: '#151719',
          900: '#0C0D0E',
          950: '#050506'
        },
        danger: {
          50: '#FBE9EB',
          100: '#F8D8DB',
          200: '#F1ACB3',
          300: '#EA858F',
          400: '#E35E6B',
          500: '#DC3444',
          600: '#BB2030',
          700: '#8B1824',
          800: '#5B1017',
          900: '#30080C',
          950: '#160406'
        },
        warning: {
          50: '#FFF9E5',
          100: '#FFF2CC',
          200: '#FFE79E',
          300: '#FFDA6B',
          400: '#FFCD38',
          500: '#FFC007',
          600: '#D19D00',
          700: '#9E7700',
          800: '#6B5000',
          900: '#332600',
          950: '#191300'
        },
        success: {
          50: '#E6F9EB',
          100: '#CEF3D6',
          200: '#9CE7AE',
          300: '#6BDC85',
          400: '#39D05D',
          500: '#28A745',
          600: '#1F8437',
          700: '#186329',
          800: '#10421B',
          900: '#08210E',
          950: '#041007'
        },
        info: {
          50: '#E3F9FC',
          100: '#C8F2F9',
          200: '#91E6F3',
          300: '#59D9ED',
          400: '#22CDE7',
          500: '#14A2B8',
          600: '#108293',
          700: '#0C616E',
          800: '#08414A',
          900: '#042025',
          950: '#021012'
        },
        active: {
          // dark blue ni siya
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CAFF',
          300: '#67B0FE',
          400: '#3496FE',
          500: '#017BFE',
          600: '#0163CB',
          700: '#014A98',
          800: '#003166',
          900: '#001933',
          950: '#000C19'
        }
      }
      // fontFamily: {
      //   primary: [
      //     'var(--font-family-primary)',
      //     ...defaultTheme.fontFamily.sans
      //   ],
      //   secondary: [
      //     'var(--font-family-secondary)',
      //     ...defaultTheme.fontFamily.serif
      //   ],
      //   tertiary: [
      //     'var(--font-family-tertiary)',
      //     ...defaultTheme.fontFamily.mono
      //   ]
      // }
    }
  },
  plugins: [ReactAriaTailwind, AnimateTailwind]
}
export default config
