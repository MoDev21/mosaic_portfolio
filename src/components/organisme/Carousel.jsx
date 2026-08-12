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

  var diaporamaImages__container = document.querySelector(".Carousel__container");
    
  const [diaporamaImages, setDiaporamaImages] = React.useState([
    {
      src: "src\\assets\\BingWallpaper-2020-02-07.jpg",
      alt: "Hero Image",
      className: "",
      width: 300,
      height: 500
    },
    {
      src: "src\\assets\\blue-dark-blue-dark-green-green-1064731.jpg",
      alt: "React Logo",
      className: "select_img",
      width: 900,
      height: 700
    },
    {
      src: "src\\assets\\photo-of-starry-night-1421903.jpg",
      alt: "Vite Logo",
      className: "",
      width: 300,
      height: 500
    },
    {
      src: "src\\assets\\photo-of-starry-night-1421903.jpg",
      alt: "Vite Logo",
      className: "",
      width: 300,
      height: 500
    },
    {
      src: "src\\assets\\photo-of-starry-night-1421903.jpg",
      alt: "Vite Logo",
      className: "",
      width: 300,
      height: 500
    },
  ]);

    
    function handleClick(event, e_index) {
      console.log("clicked ", event);
      // event.target.className = "select_img";
      // diaporamaImages__container.style.transform = `translate(${(e_index * 20) * -1}%, 0px)`;
      handleScroll(event, e_index)
      setDiaporamaImages((prevImages) =>
        prevImages.map((image, index) =>
          index === parseInt(e_index)
            ? { ...image, className: "select_img" }
            : { ...image, className: "" }
        )
      );
    }

    function handleScroll(event, e_index) {
      
      event.target.parentElement.parentElement.style.transform = `translate(${(e_index * -20) + 40}%, 0px)`;
      console.log("scrolled ", event.target.parentElement.parentElement.style.transform);
    }


  return (

        <div className="Carousel">
            <h2 style={{ fontSize: '3rem' }}>Portfolio</h2>
            <div className="Carousel__viewport">
                <div className="Carousel__container" style={{ transform: `translate(20%, 0px)` }}>
                    {diaporamaImages.map((image, index) => (
                        <div key={index} className="Image__container" onClick={(e) => handleClick(e, index)}>
                            <img src={image.src} alt={image.alt} className={image.className} />
                            <h3>{image.alt}</h3>
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