import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css'

export function EmblaCarousel() {

    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
    // useEffect(() => {
    //     if (!emblaApi) return
    //     emblaApi.plugins().autoplay?.play()
    // }, [emblaApi])

    // const goToPrev = () => emblaApi?.goToPrev()
    // const goToNext = () => emblaApi?.goToNext()
    
    const diaporamaImages = [
        {
            src: "src\\assets\\BingWallpaper-2020-02-07.jpg",
            alt: "Hero Image",
            className: "embla__slide",
            width: 300,
            height: 500
        },
        {
            src: "src\\assets\\blue-dark-blue-dark-green-green-1064731.jpg",
            alt: "React Logo",
            className: "embla__slide",
            width:900,
            height: 700
        },
        {
            src: "src\\assets\\photo-of-starry-night-1421903.jpg",
            alt: "Vite Logo",
            className: "embla__slide",
            width: 300,
            height: 500
        }
    ] 



    return (
        <div className="Carousel">
            <h1>Portfolio</h1>
            <div className="Carousel__viewport">
                <div className="Carousel__container">
                    {diaporamaImages.map((image, index) => (
                        <div key={index} className="Image__container">
                            <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
                            <h2>{image.alt}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Carousel__buttons_container">
                <button className="Carousel__button" children="Prev" />
                <button className="Carousel__button" children="Next" />
            </div>

            {/* <button className="Carousel__button">
                Scroll to prev
            </button>
            <button className="Carousel__button">
                Scroll to next
            </button> */}

        </div>
    )
}