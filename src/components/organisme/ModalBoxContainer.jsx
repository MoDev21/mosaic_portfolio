
import React from 'react'
import ModalBox from '../molecules/ModalBox'
import './ModalBoxContainer.css'


export default function ModalBoxContainer({ image, onClose, onShow }) {
  
  console.log('ModalBoxContainer ', image)
  return (
    <div className='modalbox_container'>
      <button onClick={onClose}>Close</button>
      {image.diaporama_array.map((item, index) => (
        <ModalBox index={index} image={item} onClose={onClose} onShow={onShow} />
      ))}
    </div>
  )
}
