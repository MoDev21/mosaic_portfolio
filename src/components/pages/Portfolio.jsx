import { useState } from 'react'
import Navbar from '../organisme/Navbar'
import './Portfolio.css'

import FilterBar from '../molecules/FilterBar'
import Gallery from '../molecules/Gallery'
import portfolio from '../../data/portfolio_data.json'
import BlurBackground from '../atoms/BlurBackground'



const filterButtons = [
  { id: 'all', name: 'category', value: 'All' },
  { id: 'webDev', name: 'category', value: 'Web Development' },
  { id: 'graphicDesign', name: 'category', value: 'Graphic Design' },
  { id: '3d', name: 'category', value: '3D' },
  { id: 'UI/UXDesign', name: 'category', value: 'UI/UX Design' },
  { id: 'GameDev', name: 'category', value: 'GameDev' },
]

const ModalBoxData =   {
  "id": 1,
  "category": "",
  "diaporama_array": [
    {
      "title": "Portfolio Website",
      "src": "src/assets/BingWallpaper-2020-02-07.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "title": "Creative Process",
      "src": "src/assets/photo-of-starry-night-1421903.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "title": "Sketching",
      "src": "src/assets/images/f4c2b316044526763b497120ae6f.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
}


const fetchedImages = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', { eager: true });

const background_images = [
  {
    "id": 1,
    "src": "src/assets/images/f4c2b316044526763b497120ae6f.jpg",
    "className": "first_bg_image",
    "title": "",
  },
  {
    "id": 2,
    "src": "src/assets/images/4139e2805927715ce5873dc3d84.png",
    "className": "second_bg_image",
    "title": "",
  },
  {
    "id": 3,
    "src": "src/assets/images/9d43e216044526763b497120ec34.jpg",
    "className": "third_bg_image",
    "title": "",
  },
  {
    "id": 4,
    "src": "src/assets/images/f74a2816183016363cb810c24de7.jpg",
    "className": "fourth_bg_image",
    "title": "",
  },
  {
    "id": 5,
    "src": "src/assets/images/873f9b16183016363cb810c26dca.jpg",
    "className": "fifth_bg_image",
    "title": "",
  }
]


function ModalBox({ image }) {
  const [isHideDesc, setIsHideDesc] = useState(true)

  function handleShowDesc() {
    console.log('handleShowDesc ', isHideDesc)
    setIsHideDesc(current => !current)
  }

  return (
    <div className='modalbox'>
      <div className="modalbox_image">
        <img src={image.src} alt={image.title} onClick={handleShowDesc}/>
        <div className={"modalbox_description" + (isHideDesc ? ' modalbox_description_hide' : '')}>
          <h3>{image.title}</h3>
          <div className='description_container'>
            <p>{image.description}</p>
          </div>
          <button className='modalbox_desc_show_button' onClick={handleShowDesc}>{isHideDesc ? 'Show' : 'Hide'}</button>
        </div>
      </div>
    </div>
  )
}

function ModalBoxContainer({ image, onClose, onShow }) {
  console.log('ModalBoxContainer ', image)
  return (
    <div className='modalbox_container'>
      <button onClick={onClose}>Close</button>
      {image.diaporama_array.map((item, index) => (
        <ModalBox index={index} image={item} onClose={onClose} onShow={onShow} />
      ))}
    </div>
  )
}



export default function Portfolio({ activate_page }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(portfolio[0])


  function handleFilterChange(event) {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }

  function handleClick(image) {
    console.log(image.diaporama_array[0])
    setSelectedImage(image)
    setIsModalOpen(true)
    console.log('setSelectedImage ')
  }




  return (
    <div>
      <div className='portfolio_header__background_images'>
        <BlurBackground className='portfolio'/>
        {background_images.map((background_image, index) => (
          <div key={index} className={background_image.className}>
            <div className='gradiant_screen'></div>
            <img src={background_image.src} alt=''/>
          </div>
        ))}
      </div>
      <div className='portfolio_container'>
        <Navbar activate_page={activate_page} active_page_name="Portfolio" />
        <header>
          <h1>Look at my <br/>
          HANDIWORK </h1>
          <p>Here is where you see all my work</p>
        </header>
        <div className="portfolio_content">
          <FilterBar filterButtons={filterButtons} selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
          <Gallery selectedCategory={selectedCategory} images={portfolio} handleClick={handleClick} />
          {isModalOpen === true && <ModalBoxContainer onClose={() => setIsModalOpen(false)} image={selectedImage} />}
        </div>
      </div>
    </div>
  )
}
