import { useState } from 'react'
import Navbar from '../organisme/Navbar'
import './Portfolio.css'


const filterButtons = [
  { id: 'all', name: 'category', value: 'All' },
  { id: 'webDev', name: 'category', value: 'Web Development' },
  { id: 'graphicDesign', name: 'category', value: 'Graphic Design' },
  { id: '3d', name: 'category', value: '3D' },
  { id: 'UI/UXDesign', name: 'category', value: 'UI/UX Design' },
  { id: 'GameDev', name: 'category', value: 'GameDev' },
]



const images = [
  { id: 1, category: 'Web Development', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 2, category: 'Web Development', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 3, category: 'Web Development', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 4, category: 'Web Development', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
  { id: 5, category: 'Web Development', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 6, category: 'Graphic Design', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 7, category: 'Graphic Design', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 8, category: 'Graphic Design', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
  { id: 9, category: 'Web Development', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 10, category: 'Web Development', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 11, category: 'Web Development', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 12, category: 'Web Development', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
  { id: 13, category: 'Web Development', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 14, category: 'Web Development', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 15, category: 'Web Development', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 16, category: 'Web Development', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
  { id: 17, category: 'Web Development', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 18, category: 'Web Development', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 19, category: 'Web Development', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 20, category: 'Web Development', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
  { id: 21, category: '3D', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 22, category: '3D', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 23, category: 'UI/UX Design', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 24, category: 'UI/UX Design', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
  { id: 25, category: 'UI/UX Design', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 26, category: 'UI/UX Design', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 27, category: 'GameDev', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 28, category: 'GameDev', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
  { id: 29, category: 'GameDev', src: 'src/assets/BingWallpaper-2020-02-07.jpg' },
  { id: 30, category: 'GameDev', src: 'src/assets/photo-of-starry-night-1421903.jpg' },
  { id: 31, category: 'GameDev', src: 'src/assets/images/ab817f16183016363cb810c22ead.jpg' },
  { id: 32, category: 'GameDev', src: 'src/assets/images/f4c2b316044526763b497120ae6f.jpg' },
]


// filterButton and FilterBar html

function FilterButton({id, name, value, onFilterChange, selectedCategory}) {
    return (
      <div className='filter_button'>
        <input type="radio" id={id} name={name} value={value} onChange={onFilterChange} checked={selectedCategory === value} />
        <label htmlFor={id}>{value}</label>
      </div>
    )
}



function FilterBar({ selectedCategory, onFilterChange }) {
    return (
      <div className="filter_bar">
          {/* generate the filter buttons based on the filterButtons array */}
          {filterButtons.map(button => (
              <FilterButton key={button.id} {...button} onFilterChange={onFilterChange} selectedCategory={selectedCategory} />
          ))}
      </div>
    )
}




function handleClick(image) {
  console.log(image)
}

function Gallery({ images, selectedCategory }) {
  console.log(selectedCategory, "and", images)
  return (
    <div className="gallery">
      {images.map(image => (
        selectedCategory === 'All' || selectedCategory === image.category ? (
          <div key={image.id} className="gallery_item" onClick={() => handleClick(image)}>
            <img src={image.src} alt={image.category} className={image.category === selectedCategory ? 'selected' : ''} />
          </div>
        ) : null
      ))}
    </div>
  )
}

function ModalBox({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Close</button>
      <p>{image.category}</p>
      <img src={image.src} alt={image.category} />
    </div>
  )
}

export default function Portfolio({ activate_page }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  function handleFilterChange(event) {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }
  
  return (
    <div >
      <Navbar activate_page={activate_page} active_page_name="Portfolio"/>
      <h1>Portfolio</h1>
      <p>Welcome to our portfolio page!</p>
      <div className="portfolio_content">
        <FilterBar selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
        <Gallery selectedCategory={selectedCategory} images={images} />
      </div>
    </div>
  )
}
