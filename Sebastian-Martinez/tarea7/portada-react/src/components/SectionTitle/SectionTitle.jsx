import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({title, size}) => {

    const titleStyle = {
        fontSize: size + 'px' 
    }

  return (
    <h3 style={titleStyle} className='section-title'>{title}</h3>
  )
}

export default SectionTitle