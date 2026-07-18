import React from "react";
import mosaiclogo from '../../assets/mosaic_logo.png';
import LinkButton from "../atoms/LinkButton";

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

export default function Navbar({activate_page, active_page_name}) {
  return (
    <nav>
        <img 
            src={mosaiclogo} 
            alt="Mosaic logo"
            style={{ height: '40px' }} 
        />
        <ul>
            {navigationLinks.map((link, index) => (
                <LinkButton key={index} link={link}  active={link.label === active_page_name ? true : false} activate_page={activate_page}/>
            ))}
        </ul>
    </nav>
  );
}

