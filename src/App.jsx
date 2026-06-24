import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import mosaiclogo from './assets/mosaic_logo.png'
import './App.css'
import Button from './components/atoms/Button'
import CountButton from './components/atoms/CountButton'
import LinkButton from './components/atoms/LinkButton'
import Navbar from './components/organisme/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const socialLinks = [
    {
      href: "https://github.com/vitejs/vite",
      icon: "github-icon",
      label: "GitHub"
    },
    {
      href: "https://chat.vite.dev/",
      icon: "discord-icon",
      label: "Discord"
    },
    {
      href: "https://x.com/vite_js",
      icon: "x-icon",
      label: "X.com"
    },
    {
      href: "https://bsky.app/profile/vite.dev",
      icon: "bluesky-icon",
      label: "Bluesky"
    },
    
  ];
  const documentationLinks = [
    {
      href: "https://vite.dev/",
      icon: "vite-icon",
      label: "Vite Documentation"
    },
    {
      href: "https://react.dev/",
      icon: "react-icon",
      label: "React Documentation"
    },
  ];

  const navigationLinks = [
    {
      href: "#center",
      icon: "",
      label: "Home"
    },
    {
      href: "#next-steps",
      icon: "",
      label: "Next Steps"
    },
        {
      href: "#next-steps",
      icon: "",
      label: "Next Steps"
    },
  ]

  const diaporamaImages = [
    {
      src: "src\\assets\\BingWallpaper-2020-02-07.jpg",
      alt: "Hero Image",
      className: "base",
      width: 170,
      height: 179
    },
    {
      src: "src\\assets\\blue-dark-blue-dark-green-green-1064731.jpg",
      alt: "React Logo",
      className: "framework",
      width: 750,
      height: 500
    },
    {
      src: "src\\assets\\photo-of-starry-night-1421903.jpg",
      alt: "Vite Logo",
      className: "vite",
      width: 170,
      height: 179
    }
  ] 

  return (
    <>
      <Navbar />
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <CountButton count={count} setCount={setCount} />
      </section>
      <section>
        <div className="diaporama">
          {diaporamaImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className={image.className} width={image.width} height={image.height} />
          ))}
        </div>
      </section>

      {/* <div className="ticks"></div> */}

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            {documentationLinks.map((link, index) => (
              <LinkButton key={index} link={link} />
            ))}
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {socialLinks.map((link, index) => (
              <LinkButton key={index} link={link} />
            ))}
          </ul>
        </div>
      </section>
{/* 
      <div className="ticks"></div> */}
      <section id="spacer"></section>
    </>
  )
}

export default App
