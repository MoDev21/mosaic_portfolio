import React from 'react'


export default function ModalBox({ image, onClose, onShow, ...props }) {
  
  const [isImagePresent, setIsImagePresent] = React.useState(false)

 
  // function handleImageLoad() {
  //   if (image.src.endsWith('.mp4') || image.src.endsWith('.mov')) {
  //     setIsImagePresent(false)
  //   } else {
  //     setIsImagePresent(true)
  //   }
  // }

  

  return (
    <div className='modalbox'>
      <div className="modalbox_image">
        {image.src.endsWith('.mp4') || image.src.endsWith('.mov') ? <video src={image.src} controls onLoad={() => setIsImagePresent(false)} /> : <img src={image.src} alt={image.title} onClick={props.handleShowDesc} onLoad={() => setIsImagePresent(true)} />}
      </div>
    </div>
  )
}