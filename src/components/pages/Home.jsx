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
import { Carousel } from '../../components/organisme/Carousel'
import Christianity from '../../assets/images/svg/christianity-prayer-svgrepo-com.svg'
import Sports from '../../assets/images/svg/sports-basketball.svg'
import Music from '../../assets/images/svg/music-notes-svgrepo-com.svg'
import Motherboard from '../../assets/images/svg/motherboard.svg'
import VideoGames from '../../assets/images/svg/video-games-game-controller.svg'
import BlurBackground from '../../components/atoms/BlurBackground'
import antivirus from '../../assets/Portfolio/antivirus/4139e2805927715ce5873dc3d84.png'
import Footer from '../organisme/Footer'



export default function Home({ ...props }) {
  
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
          <BlurBackground className='blur-background'/>
          <Navbar activate_page={props.activate_page} active_page_name="Home"/>
          <div className="hero-section-content">
            <h1>Bringing imaginations into reality through GRAPHIC DESIGN</h1>
            {/* <p> 
              Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
            </p>
            <CountButton count={count} setCount={setCount} />*/}
          </div>

        </div>

      </section>
      <section>
        <Carousel activate_page={props.activate_page} setSelectedCategory={props.setSelectedCategory}/>
      </section>

      {/* <div className="ticks"></div> */}
      <section className="home__about_me">
        <div className="home__about_me_modalbox">
          <div className="home__about_me_modalbox_image">
            <img src={antivirus} alt="" />
          </div>
          <div className="home__about_me_modalbox_info">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt diam ac turpis tristique, ac sagittis justo tristique. Nullam cursus, 
              ligula vitae consectetur vulputate, ligula ipsum placerat arcu, ut hendrerit orci augue non purus. 
              Fusce vel ex euismod, tempor sapien ut, varius nunc. 
            </p>
            <CTAButton name="more about me" page="About" activate_page={props.activate_page}/>
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
      <Footer />
    </>
  );
}