import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/Home'
import About from './components/pages/About'

const pages = [
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
]


function activate_page(chosen_name) {
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].name === chosen_name) {
      pages[i].active = true
    }
    else {
      pages[i].active = false
    }
  }
}


activate_page("About")



function App() {
  return (
    <>
      {pages.map((page, index) => (
        page.active === true && (
          <div key={index}>
            <page.component />
          </div>
        )
      ))}
    </>
    
  )
}

export default App
