import React from 'react'

export default function ModalBox({ image, onClose, onShow, ...props }) {
  const [isHideDesc, setIsHideDesc] = React.useState(true)
  const [isImagePresent, setIsImagePresent] = React.useState(false)
  function handleShowDesc() {
    console.log('handleShowDesc ', isHideDesc)
    setIsHideDesc(current => !current)
  }
 
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
        {image.src.endsWith('.mp4') || image.src.endsWith('.mov') ? <video src={image.src} controls onLoad={() => setIsImagePresent(false)} /> : <img src={image.src} alt={image.title} onClick={handleShowDesc} onLoad={() => setIsImagePresent(true)} />}
        
        {isImagePresent ?
          <div className={"modalbox_description" + (isHideDesc ? ' modalbox_description_hide' : '')}>
            <h3>{image.title}</h3>
            <div className='description_container'>
              <p>{image.description}</p>
            </div>
            <button className='modalbox_desc_show_button' onClick={handleShowDesc}>{isHideDesc ? 'Show' : 'Hide'}</button>
          </div>
        : null}

      </div>
    </div>
  )
}