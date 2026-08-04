import { useState } from 'react'




export default function Gallery({ ...props }) {
  console.log(props.selectedCategory, "and", props.images)
  return (
    <div className="gallery">
      {props.images.map(image => (
        props.selectedCategory === 'All' || image.tags.includes(props.selectedCategory) ? (
          <div key={image.id} className="gallery_item" onClick={() => props.handleClick(image)}>
            <img src={image.diaporama_array[0].src} alt={image.tags[0]} className={image.tags.includes(props.selectedCategory) ? 'selected' : ''} />
          </div>
        ) : null
      ))}
    </div>
  )
}