// Importing the AnimatedPlates component, which displays images with looping animation

import AnimatedPlates from "./animated-plates"

// Note: The number of plate items is limited to 21 images. If fewer images are provided,
// they will be looped to fill the display up to 63 images across the AnimatedPlates components.

// Array of image objects to be displayed
const plates = [
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
]

/**
 * UsageDemo Component
 * 
 * This component demonstrates the usage of the AnimatedPlates(looping-animation) component by providing it with
 * an array of images and a custom rotation angle. It contains a styled container div to control
 * the layout of AnimatedPlates.
 * 
 * Props for AnimatedPlates:
 * - images (Array): An array of image objects, each containing:
 *     - name (string): A unique identifier for each image.
 *     - color (string): RGBA color for styling each image's background or other styling purposes.
 *     - source (string): The source URL for the image to be displayed.
 * - rotate (number): Optional. The degree to rotate the entire container. Defaults to 45.
 */
const UsageDemo = () => {
  return (
    // Container for the AnimatedPlates animation
    // This div controls the size, which can be customized based on preference (width, height, etc.),
    // but it should have overflow: hidden style to ensure that any overflow from the animation is hidden.
    <div style={{ width: '70rem', overflow: 'hidden', border: 'solid 1px gray' }}>
      {/* Render AnimatedPlates with a set of images and a rotation angle of 12 degrees */}
      <AnimatedPlates images={plates} rotate={12} />
    </div>
  )
}


export default UsageDemo