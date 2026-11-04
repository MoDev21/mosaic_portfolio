import { useState } from "react";
import './DescriptionContainer.css'
export default function DescriptionContainer({ ...props }) {
  return (

    <div
      className={"modalbox_description" + (props.isHideDesc ? ' modalbox_description_hide' : '')}
      style={{
        backgroundColor: props.targetElementVisible ? '#f5f5f5' : "fff", 
        cornerRadius: '100%',
      }} 
    >
      <h3>{props.imageDesc.title}</h3>
      <div className='description_container'>
        <p>{props.imageDesc.description}</p>
      </div>
    </div>

  )
}