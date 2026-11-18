import {useEffect, useState} from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import mosaiclogo from '../../assets/mosaic_logo.png';
import LinkButton from "../atoms/LinkButton";
import "./Navbar.css";

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
  const [isHome, setIsHome] = useState(false);

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isCompact = isMobile || isTablet
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

  const linkBorderColor = useTransform(
    scrollY,
    [0, 400],
    ['#77777700', '#77777700']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 400],
    ['blur(0px)', 'blur(5px)']
  );

  const color = useTransform(
    scrollY,
    [0, 400],
    [props.active_page_name === "Home" ? '#FFFFFF' : '#000000', '#000000']
  );

  useEffect(() => {
      const mobileQuery = window.matchMedia('(max-width: 768px)')
      const tabletQuery = window.matchMedia('(min-width: 769px) and (max-width: 1024px)')

      const updateBreakpoints = () => {
          setIsMobile(mobileQuery.matches)
          setIsTablet(tabletQuery.matches)
      }

      updateBreakpoints()
      mobileQuery.addEventListener('change', updateBreakpoints)
      tabletQuery.addEventListener('change', updateBreakpoints)

      return () => {
          mobileQuery.removeEventListener('change', updateBreakpoints)
          tabletQuery.removeEventListener('change', updateBreakpoints)
      }
  }, [])

  useEffect(() => {
      if (!isCompact) {
          setMenuOpen(false)
      }
  }, [isCompact])

  const handleNavClick = (page) => {
      if (props.activate_page) {
          props.activate_page(page)
      }
      setMenuOpen(false)
  }



  return (


    <nav
      className={`navbar ${menuOpen ? 'navbar--open' : ''}`}

    >
      <motion.div
        className="navbar__bar"
        style={{
          backgroundColor,
          borderColor,
          border: '2px solid',
          backdropFilter,
          color,
        }}
      >
          <img
              src={mosaiclogo}
              alt="Mosaic logo"
              style={{ height: '40px' }}
          />

          {isCompact ? (
              <button
                type="button"
                className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="navbar-menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
          ) : (
              <ul className="navbar__links">
                {navigationLinks.map((link, index) => (
                  <LinkButton
                    style={{ color: color, border: linkBorderColor }}
                    key={index}
                    link={link}
                    active={link.label === props.active_page_name}
                    activate_page={props.activate_page}
                    selectedCategory={props.selectedCategory}
                  />
                ))}
              </ul>
          )}
        </motion.div>

      {isCompact && menuOpen && (
          <div className="navbar__links_container">
            <ul id="navbar-menu" className="navbar__links navbar__links--mobile">
              {navigationLinks.map((link, index) => (
                <li key={index} className="navbar__mobile_item">
                  <button
                    type="button"
                    className={`navbar__mobile_link ${link.label === props.active_page_name ? 'is-active' : ''}`}
                    onClick={() => handleNavClick(link.label)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        )}
    </nav>
  );
}
