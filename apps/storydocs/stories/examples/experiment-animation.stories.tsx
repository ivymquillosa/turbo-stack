import type { StoryObj } from '@storybook/react'
import AnimatedPlates from './loop-animated-plates/animated-plates'

const meta = {
  title: 'Example/Experiment',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    images: {
      control: {
        type: 'object'
      }
    },
    rotate: {
      control: {
        type: 'number'
      }
    }
  },
  args:{
    images: [
      {
        name: '2ltime',                         // Name identifier for the image
        color: 'rgba(50, 82, 153, 0.8)',      // Background color for styling
        source: '/plates/2ltime.svg',           // Image source URL
      },
      {
        name: '420lro',
        color: 'rgba(50, 82, 153, 0.8)',     
        source: '/plates/420lro.svg',  
      },
      {
        name: 'assman',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/assman.svg',
      },
      {
        name: 'banone',
        color: 'rgba(50, 82, 153, 0.8)',     
        source: '/plates/banone.svg',  
      },
      {
        name: 'cobrakai',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/cobrakai.svg',
      },
      {
        name: 'eagle5',
        color: 'rgba(50, 82, 153, 0.8)',     
        source: '/plates/eagle5.svg',  
      },
      {
        name: 'ecto1',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/ecto1.svg',
      },
      {
        name: 'fresh',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/fresh.svg',
      },
      {
        name: 'knight',
        color: 'rgba(50, 82, 153, 0.8)',     
        source: '/plates/knight.svg',  
      },
      {
        name: 'luvme',
        color: 'rgba(50, 82, 153, 0.8)',    
        source: '/plates/luvme.svg',  
      },
      {
        name: 'lwyrup',
        color: 'rgba(55, 153, 50, 0.8)',
        source: '/plates/lwyrup.svg',
      },
      {
        name: 'nrvous',
        color: 'rgba(50, 82, 153, 0.8)',     
        source: '/plates/nrvous.svg',  
      },
      {
        name: 'outatime',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/outatime.svg',
      },
      {
        name: 'parzival',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/parzival.svg',
      },
      {
        name: 'parzival',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/parzival.svg',
      },
      {
        name: 'socool',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/socool.svg',
      },
      {
        name: 'sothpaw',
        color: 'rgba(50, 82, 153, 0.8)',      
        source: '/plates/sothpaw.svg',  
      },
      {
        name: 'stark11',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/stark11.svg',
      },
      {
        name: 'thecapn',
        color: 'rgba(50, 82, 153, 0.8)',      
        source: '/plates/thecapn.svg',  
      },
      {
        name: 'thx138',
        color: 'rgba(187, 10, 20, 0.4)',
        source: '/plates/thx138.svg',
      },
      {
        name: 'wooof',
        color: 'rgba(50, 82, 153, 0.8)',    
        source: '/plates/wooof.svg',  
      }
    ],
    rotate: 12
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ images, rotate }) => {
    return (
      <div style={{ width: '70rem', overflow: 'hidden', border: 'solid 1px gray-200' }}>
        <AnimatedPlates images={images} rotate={rotate} />
      </div>
    )
  },
  
}
