import React from 'react'

export default function ModalBox({ image, onClose, onShow }) {
  const [isHideDesc, setIsHideDesc] = React.useState(true)

  function handleShowDesc() {
    console.log('handleShowDesc ', isHideDesc)
    setIsHideDesc(current => !current)
  }

  return (
    <div className='modalbox'>
      <div className="modalbox_image">
        <img src={image.src} alt={image.title} onClick={handleShowDesc}/>
        <div className={"modalbox_description" + (isHideDesc ? ' modalbox_description_hide' : '')}>
          <h3>{image.title}</h3>
          <div className='description_container'>
            <p>{image.description}</p>
          </div>
          <button className='modalbox_desc_show_button' onClick={handleShowDesc}>{isHideDesc ? 'Show' : 'Hide'}</button>
        </div>
      </div>
    </div>
  )
}