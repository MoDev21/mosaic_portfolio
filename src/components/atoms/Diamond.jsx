import React, { useState } from 'react'
import './Diamond.css'


export default function Diamond({ className = '', imageSrc, ...props }) {
  const baseStyles = 'diamond';
  const diamondClass = `${baseStyles} ${className}`;

  return (
    <div className="diamond" {...props}>
        <img src={imageSrc} width="700" height="600" alt="alt text" alt={props.alt} />
    </div>
  );
}