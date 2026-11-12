import { useState } from "react";
import './DescriptionContainer.css'
export default function DescriptionContainer({ ...props }) {

  // const [formattedJson, setFormattedJson] = useState('');

  const paragraphs = (props.imageDesc?.description ?? "")
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(Boolean);
  
  return ( 
    <div
      className={"modalbox_description" + (props.isHideDesc ? ' modalbox_description_hide' : '')}
    >
      <h3>{props.imageDesc.title}</h3>
      <div className='description_container'>
          {paragraphs.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>

  )
}