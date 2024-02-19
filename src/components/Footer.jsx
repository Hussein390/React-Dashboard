import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
const Footer = () => {
  const {color} = useStateContext()
return(<div className="relative">
    <p style={{color,}} className="dark:text-gray-200 bg-slate-200 dark:bg-secondary-dark-bg  text-center m-0 py-3">
      © {new Date().getFullYear()} All rights reserved by Shoppy.com
    </p>
  </div>)
};

export default Footer;