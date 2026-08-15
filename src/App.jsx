import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'
import Navbar from './components/organisme/Navbar'










function App() {

  const [pages, setPages] = useState([
    {
      name: "Home",
      component: Home,
      active: true
    },
    {
      name: "About",
      component: About,
      active: false
    },
    {
      name: "Portfolio",
      component: Portfolio,
      active: false,
      categories: [
        'All',
        'Web Development',
        'Graphic Design',
        '3D',
        'UI/UX Design',
        'GameDev'
      ]
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  function activate_page(chosen_name, categories) {
    console.log("chosen_name ", chosen_name);
    setSelectedCategory(categories);    
    setPages(currentPages => 
      currentPages.map(page => ({
        ...page,
        active: page.name === chosen_name
      }))
    );
  };

  

  return (
    <>
      {pages.map((page, index) => {
        if (page.active) {
          return (
            <div key={index}>
              <page.component
                activate_page={activate_page}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          )
        }
        else if (page.name == null) {
          return(
            <Navbar />
          )
        }
      })}
    </>
    
  )
}

export default App
