import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ active, children, onClick }) => (
  <button className='buttons' onClick={onClick} disabled={active} >
    {children}
  </button>
)

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
