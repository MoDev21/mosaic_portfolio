import { useState } from 'react'

import './BlurBackground.css'

export default function BlurBackground({ ...props }) {
  return (
    <div className={props.className}></div>
  )
}