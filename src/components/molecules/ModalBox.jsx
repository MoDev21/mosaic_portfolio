import {useState} from 'react'
import { useInView } from 'react-intersection-observer';

export default function ModalBox({ image, onSendData, onClose, onShow, imageDesc, ...props }) {
  
  const [isImagePresent, setIsImagePresent] = useState(false)
  
 
  // function handleImageLoad() {
  //   if (image.src.endsWith('.mp4') || image.src.endsWith('.mov')) {
  //     setIsImagePresent(false)
  //   } else {
  //     setIsImagePresent(true)
  //   }
  // }

  function getModalBoxImage(e) {
    console.log('targetElement.current ', e)
    setImageDesc()
  }


  const { ref, inView } = useInView({
    threshold: 0.5, // Triggers when 50% of the element is visible
    triggerOnce: false, // Only trigger the first time it enters the viewport
    onChange: (entry) => {
      console.log('inView:', inView, 'ref:', ref.current, 'image description:', image.description);
      if (entry) {
        onSendData(image)
      }
    }
  });

  return (
    <div ref={ref} className='modalbox' >
      <div className="modalbox_image">
        {image.src.endsWith('.mp4') || image.src.endsWith('.mov') ? <video src={image.src} controls onLoad={() => setIsImagePresent(false)} /> : <img src={image.src} alt={image.title} onClick={props.handleShowDesc} onLoad={() => setIsImagePresent(true)} />}
      </div>
    </div>
  )
}