import { useState, useEffect } from 'react'

import FilterButton from '../atoms/FilterButton'  
import "./FilterBar.css"

export default function FilterBar({ filterButtons, selectedCategory, onFilterChange }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isCompact = isMobile || isTablet
  
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
  
  return (
    <div className={`filter_bar${isCompact ? '--mobile' : ''} ${menuOpen ? 'filter_bar--mobile--open' : 'filter_bar--mobile--close'}`}>
      {/* generate the filter buttons based on the filterButtons array */}
      <button
        type="button"
        className={`filter__switch ${menuOpen ? 'is-open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {filterButtons.map(button => (
          <FilterButton key={button.id} {...button} onFilterChange={onFilterChange} selectedCategory={selectedCategory} />
      ))}
    </div>
  )
}
