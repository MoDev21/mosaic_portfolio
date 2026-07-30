import { useState } from 'react'



// filterButton and FilterBar html

export default function FilterButton({id, name, value, onFilterChange, selectedCategory}) {
    return (
      <div className='filter_button'>
        <input type="radio" id={id} name={name} value={value} onChange={onFilterChange} checked={selectedCategory === value} />
        <label htmlFor={id}>{value}</label>
      </div>
    )
}
