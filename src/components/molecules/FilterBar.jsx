import { useState } from 'react'

import FilterButton from '../atoms/FilterButton'  
import "./FilterBar.css"

export default function FilterBar({ filterButtons, selectedCategory, onFilterChange }) {
    return (
      <div className="filter_bar">
          {/* generate the filter buttons based on the filterButtons array */}
          {filterButtons.map(button => (
              <FilterButton key={button.id} {...button} onFilterChange={onFilterChange} selectedCategory={selectedCategory} />
          ))}
      </div>
    )
}
