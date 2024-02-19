import React from 'react'

const Button = ({text,  icon, bgColor, color, size, borderRadius, bgHoverColor}) => {
  return (
    <div>
      <button 
        type='button' style={{ background: bgColor, color, borderRadius, fontSize: size }} className={` hover:bg-${bgHoverColor} p-2 hover:drop-shadow-xl`} >
        {text}
        {icon}
        </button>
    </div>
  )
}

export default Button
