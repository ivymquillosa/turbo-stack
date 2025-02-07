
// React Component
import './animationStyle.css'

const StackPlates = ({images}:{images?:any}) => {
  const limitedImgs = images?.slice(0, 21); // Limit to 21 images per StackPlates
    return(
        <div className={`stack_plates`}>
          {limitedImgs?.map((img:any) => (
            <div className="plates_wrapper">
              <img
                key={img?.name}
                src={img?.source ?? ''}
                style={{color: `${img?.color}`}}
                className="plates"
              />
            </div>
          ))}
        </div>
    )
}

const AnimatedPlates = ({images, rotate=45 }:{images?:any, rotate?:number}) => {

  // Ensure there are exactly 63 images by repeating the array
  const fillImages = Array.from({ length: 63 }, (_, i) => images[i % images.length]);

  // Split the filled images array into three sets of 21
  const stackImages = [
    fillImages.slice(0, 21),
    fillImages.slice(21, 42),
    fillImages.slice(42, 63)
  ];
  return (
    <div style={{rotate: `${rotate}deg`}} className='acontainer'>
      {stackImages.map((imgs, idx) => (
        <div className='animated_container' key={idx}>
          <StackPlates images={imgs} />
        </div>
      ))}
      </div>
  )
}

export default AnimatedPlates
