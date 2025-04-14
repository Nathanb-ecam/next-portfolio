import React, { useState } from 'react'

const Portfolio = () => {
  const filters = ['All','Development','Cloud & infrastructure']
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <div className='text-grey-text'>
      {filters.length > 0 && 
      <ul className='flex gap-5'>
          {filters.map((filter, index)=>(
            <li 
            key={index} 
            className={`
              hover:cursor-pointer
              ${selectedFilter === filter && 'text-primary'}
              `}
            onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </li>
          ))}
      </ul>}
    </div>
  )
}

export default Portfolio