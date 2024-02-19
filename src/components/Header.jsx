import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
const Header = ({ title, category }) => {
  const {mode} = useStateContext()
  return (
    <div className={`mb-10 ${mode === "Dark"? '#fff':''} dark:`}>
      <p className='text-gray-400 dark:text-gray-100'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight dark:text-gray-100 text-slate-900'>{title}</p>
    </div>
  )
}

export default Header
