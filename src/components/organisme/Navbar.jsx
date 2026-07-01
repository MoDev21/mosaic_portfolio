import React from "react";
import mosaiclogo from '../../assets/mosaic_logo.png';
import LinkButton from "../atoms/LinkButton";

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

export default function Navbar(){
  return (
    <nav>
        <img 
            src={mosaiclogo} 
            alt="Mosaic logo"
            style={{ height: '40px' }} 
        />
        <ul>
            {navigationLinks.map((link, index) => (
                <LinkButton key={index} link={link}  active={link.label === "Home" ? true : false}/>
            ))}
        </ul>
    </nav>
  );
}

