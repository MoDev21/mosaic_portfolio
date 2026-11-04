
import { useState, useRef } from 'react'
import ModalBox from '../molecules/ModalBox'
import './ModalBoxContainer.css'
import DescriptionContainer from '../molecules/DescriptionContainer'
import { UseIsVisible } from '../atoms/UseIsVisible';
import { useEffect } from 'react';







export default function ModalBoxContainer({ image, onClose, onShow, ...props }) {
  const [isHideDesc, setIsHideDesc] = useState(true)
  const [modalBoxData, setModalBoxData] = useState('')
  // const targetElement = useRef(null);

  // const targetElementVisible = useInView(targetElement);
  function handleShowDesc() {
    console.log('handleShowDesc ', isHideDesc)
    setIsHideDesc(current => !current)
  }

  const handleModalBoxData = (receivedData) => {
    console.log("receivedData ", receivedData)
    setModalBoxData(receivedData)
  }

  
  // useEffect(() => {

  //   const currentTargetElement = targetElement.current
  //   if (targetElementVisible && currentTargetElement) {
  //     console.log("targetElement.current ", currentTargetElement)
  //   }
  // }, [targetElementVisible]);

  
  // console.log(image)
  return (
    <div>
      <div className='modalbox_desc_container'>
        <DescriptionContainer
          imageDesc={modalBoxData}
          isHideDesc={isHideDesc}
          handleShowDesc={handleShowDesc}
        />
      </div>
      <div className='modalbox_container'>
        <button onClick={onClose}>Close</button>

        {image.diaporama_array.map((item, index) => (
          <ModalBox key={index} onSendData={handleModalBoxData} handleShowDesc={handleShowDesc} image={item} onClose={onClose} onShow={onShow} />
        ))}
        {/* {props.isImagePresent ?
          <DescriptionContainer image={image} isHideDesc={isHideDesc} handleShowDesc={handleShowDesc} />
        : null}*/}

        <button className='modalbox_desc_show_button' onClick={props.handleShowDesc}>{props.isHideDesc ? 'Show' : 'Hide'}</button>
      </div>
    </div>

  )
}
