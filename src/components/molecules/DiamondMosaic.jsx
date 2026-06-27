import React, { useState } from 'react'
import Diamond from '../atoms/Diamond'
import './DiamondMosaic.css'


const diamondImages = [
    {
        src: "src\\assets\\images\\873f9b16183016363cb810c26dca.jpg",
        alt: "Diamond Image 1"
    },
    {
        src: "src\\assets\\images\\4139e2805927715ce5873dc3d84.png",
        alt: "Diamond Image 2"
    },
    {
        src: "src\\assets\\images\\f74a2816183016363cb810c24de7.jpg",
        alt: "Diamond Image 3"
    },
    {
        src: "src\\assets\\images\\9d43e216044526763b497120ec34.jpg",
        alt: "Diamond Image 4"
    }
]

export default function DiamondMosaic() {
    return (
        <div className="diamond-mosaic">
            {diamondImages.map((image, index) => (
                <Diamond key={index}  imageSrc={image.src} alt={image.alt} />
            ))}
        </div>
    )
}