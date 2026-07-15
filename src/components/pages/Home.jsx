import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import heroImg from '../../assets/hero.png'
import mosaiclogo from '../../assets/mosaic_logo.png'
import '../../App.css'
import './Home.css'
import '../../css/embla.css'
import Diamond from '../../components/atoms/Diamond'
import Button from '../../components/atoms/Button'
import CTAButton from '../../components/atoms/CTAButton'
import CountButton from '../../components/atoms/CountButton'
import LinkButton from '../../components/atoms/LinkButton'
import Navbar from '../../components/organisme/Navbar'
import DiamondMosaic from '../../components/molecules/DiamondMosaic'
import { EmblaCarousel as Carousel } from '../../components/organisme/Carousel'
import Christianity from '../../assets/images/svg/christianity-prayer-svgrepo-com.svg'
import Sports from '../../assets/images/svg/sports-basketball.svg'
import Music from '../../assets/images/svg/music-notes-svgrepo-com.svg'
import Motherboard from '../../assets/images/svg/motherboard.svg'
import VideoGames from '../../assets/images/svg/video-games-game-controller.svg'

export default function Home() {
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






  return (
    <>
      <section id="center">
        
        <div className='hero_section__container'>
          <DiamondMosaic />
          <div className="blur-background"></div>
          <Navbar />
          <div className="hero-section-content">
            <h1>Get started</h1>
            <p> 
              Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
            </p>
            <CountButton count={count} setCount={setCount} />
          </div>

        </div>

      </section>
      <section>
        <Carousel />
      </section>

      {/* <div className="ticks"></div> */}
      <section className="home__about_me">
        <div className="home__about_me_modalbox">
          <div className="home__about_me_modalbox_image">
            <img src="src/assets/images/4139e2805927715ce5873dc3d84.png" alt="" />
          </div>
          <div className="home__about_me_modalbox_info">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt diam ac turpis tristique, ac sagittis justo tristique. Nullam cursus, 
              ligula vitae consectetur vulputate, ligula ipsum placerat arcu, ut hendrerit orci augue non purus. 
              Fusce vel ex euismod, tempor sapien ut, varius nunc. 
            </p>
            <CTAButton name="more about me"/>
          </div>
        </div>
        <div className="hobbies_icons">
          {/* <Christianity />
          <Music />
          <VideoGames />
          <Motherboard />
          <Sports /> */}
        </div>
      </section>
      <footer id="next-steps">
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
      </footer>

      {/* <div className="ticks"></div> */}
      <section id="spacer"></section>
    </>
  );
}