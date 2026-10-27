import { useState } from "react";
import './Footer.css'
import LinkButton from '../../components/atoms/LinkButton'
export default function Footer() {
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





  return (
    <div style={{
      margin: 0,
      width: "100%",
    }}>
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
        
        {/* <div className="ticks"></div> */}
      </footer>
      <div id="spacer"></div>
    </div>
    
    
  )
}