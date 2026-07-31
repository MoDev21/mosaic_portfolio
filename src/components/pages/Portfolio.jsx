import { useState } from 'react'
import Navbar from '../organisme/Navbar'
import './Portfolio.css'

import FilterBar from '../molecules/FilterBar'
import Gallery from '../molecules/Gallery'
import portfolio from '../../data/portfolio_data.json'



const filterButtons = [
  { id: 'all', name: 'category', value: 'All' },
  { id: 'webDev', name: 'category', value: 'Web Development' },
  { id: 'graphicDesign', name: 'category', value: 'Graphic Design' },
  { id: '3d', name: 'category', value: '3D' },
  { id: 'UI/UXDesign', name: 'category', value: 'UI/UX Design' },
  { id: 'GameDev', name: 'category', value: 'GameDev' },
]





function ModalBox({ image }) {
  return (
    <div className='modalbox'>
      <div className="modalbox_image">
        <img src={image.src} alt={image.title} />
      </div>
      <div className="modalbox_description">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </div>
  )
}

function ModalBoxContainer({ image, onClose }) {
  console.log('ModalBoxContainer ', image)
  return (
    <div className='modalbox_container'>
      <button onClick={onClose}>Close</button>
      {image.diaporama_array.map((item, index) => (
        <ModalBox index={index} image={item} onClose={onClose} />
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
    <div >
      <Navbar activate_page={activate_page} active_page_name="Portfolio" />
      <header>
        <h1>Portfolio</h1>
        <p>Welcome to our portfolio page!</p>
      </header>
      <div className="portfolio_content">
        <FilterBar filterButtons={filterButtons} selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
        <Gallery selectedCategory={selectedCategory} images={portfolio} handleClick={handleClick} />
        {isModalOpen === true && <ModalBoxContainer onClose={() => setIsModalOpen(false)} image={selectedImage}/>}
      </div>
    </div>
  )
}
