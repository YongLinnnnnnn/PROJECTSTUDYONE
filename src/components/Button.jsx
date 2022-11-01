import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-medium text-primary font-poppins rounded-lg outline-none text-[18px] ${ styles}`}>
      Get Started
    </button>
  )
}

export default Button