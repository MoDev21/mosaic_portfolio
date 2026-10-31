import { useState } from "react";
import './DescriptionContainer.css'
export default function DescriptionContainer({ ...props }) {
  return (

    <div className={"modalbox_description" + (props.isHideDesc ? ' modalbox_description_hide' : '')}>
      <h3>{props.image.title}</h3>
      <div className='description_container'>
        <p>{props.image.description}</p>
      </div>
    </div>

  )
}