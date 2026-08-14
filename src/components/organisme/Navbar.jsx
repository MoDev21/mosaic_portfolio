import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import mosaiclogo from '../../assets/mosaic_logo.png';
import LinkButton from "../atoms/LinkButton";
import "./Navbar.css"
const navigationLinks = [
    {
      href: "#Home",
      icon: "",
      label: "Home"
    },
    {
      href: "#Portfolio",
      icon: "",
      label: "Portfolio"
    },
        {
      href: "#About",
      icon: "",
      label: "About"
    },
]



export default function Navbar({ ...props }) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
      scrollY,
      [0, 400],
      ['#636a7100', '#636a7138']
    );

  const borderColor = useTransform(
      scrollY,
      [0, 400],
      ['#77777700', '#7777774b']
    );

  const backdropFilter= useTransform(
    scrollY,
    [0, 400],
    ['blur(0px)', 'blur(5px)']
  );

  return (


    <motion.nav style={{
      backgroundColor,
      borderColor,
      border: '2px solid',
      backdropFilter,
    }}>
        {/* <motion.div
              style={{
                opacity,
                position: 'fixed',
                top: '20px',
                left: '20px',
                padding: '20px',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '8px',
              }}
            >
              I fade out as you scroll down!
        </motion.div>*/}
        <img
            src={mosaiclogo}
            alt="Mosaic logo"
            style={{ height: '40px' }}
        />
        <ul>
            {navigationLinks.map((link, index) => (
                <LinkButton key={index} link={link}  active={link.label === props.active_page_name ? true : false} activate_page={props.activate_page}/>
            ))}
        </ul>
    </motion.nav>
  );
}
