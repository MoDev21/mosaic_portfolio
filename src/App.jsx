import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/Home'
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
    }
  ]);

  function activate_page(chosen_name) {
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
              <page.component activate_page={activate_page}/>
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
