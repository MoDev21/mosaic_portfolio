import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/Home'
import About from './components/pages/About'

const pages = [
  {
    name: "Home",
    component: Home,
    active: "true"
  },
  {
    name: "About",
    component: About,
    active: "false"
  }
]



function App() {
  return (
    <>
      {pages.map((page, index) => (
        page.active === "true" && (
          <div key={index}>
            <page.component />
          </div>
        )
      ))}
    </>
    
  )
}

export default App
