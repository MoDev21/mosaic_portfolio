
import { useState, useRef, useIsVisible} from 'react'
import ModalBox from '../molecules/ModalBox'
import './ModalBoxContainer.css'
import DescriptionContainer from '../molecules/DescriptionContainer'




export default function ModalBoxContainer({ image, onClose, onShow, ...props }) {
  const [isHideDesc, setIsHideDesc] = useState(true)
  const targetElement = useRef();
  const targetElementVisible = useIsVisible(targetElement);
  
  
  
  function handleShowDesc() {
    console.log('handleShowDesc ', isHideDesc)
    setIsHideDesc(current => !current)
  }
  console.log(image)
  return (
    <div className='modalbox_container'>
      <button onClick={onClose}>Close</button>
      <DescriptionContainer image={image} isHideDesc={isHideDesc} handleShowDesc={handleShowDesc} />
      {image.diaporama_array.map((item, index) => (
        <ModalBox ref={targetElement} index={index} image={item} onClose={onClose} onShow={onShow} />
      ))}
      {/* {props.isImagePresent ?
        <DescriptionContainer image={image} isHideDesc={isHideDesc} handleShowDesc={handleShowDesc} />
      : null}*/}
      
      <button className='modalbox_desc_show_button' onClick={props.handleShowDesc}>{props.isHideDesc ? 'Show' : 'Hide'}</button>
    </div>
  )
}
