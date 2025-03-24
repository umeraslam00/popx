import React from 'react'

const Button = ({text, colorName}) => {
  return (
    <button className="w-[335px] h-[46px] rounded-[6px] font-medium text-[16px] leading-[17px]"
    style={{ backgroundColor: colorName }} >{text}</button>
  )
}

export default Button