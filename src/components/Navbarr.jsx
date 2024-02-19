import React, {  useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';

import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
 return( <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{ color }}
      className='rounded-full text-xl relative p-3 hover:bg-light-gray'>
      <span className='absolute inline-flex h-2 w-2 right-2 top-2 rounded-full' style={{ background: dotColor }}>
     </span>
     {icon}
    </button>
  </TooltipComponent>)
}

const Navbarr = () => {
  const {  setActiveMenu, activeMenu, isClicked, setIsClicked, handleClick,
    screenSize, setScreenSize, color } = useStateContext();
  
  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleSize);
    handleSize();
    return ()=> window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    screenSize <= 1900 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize])
  
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
      <div className='flex justify-between p-2 md:mx-6 relative drop-shadow'>
      <NavButton title='Menu' customFunc={() => {
        setActiveMenu(handleActiveMenu)
        setIsClicked(false)
      }
      }
        color={color}  icon={<AiOutlineMenu/>}/>
      <div className='flex text-2xl'>
        <NavButton title='Cart' customFunc={() => setActiveMenu(handleClick('cart'))}
          color={color} icon={<FiShoppingCart />} />
        
        <NavButton title='Chat' customFunc={() => setActiveMenu(handleClick('chat'))}
          color={color} dotColor="#04C9D7" icon={<BsChatLeft />} />
        
        <NavButton title='Notification' customFunc={() => setActiveMenu(handleClick('notification'))}
          color={color} dotColor="#04C9D7" icon={<RiNotification3Fill />} />
        
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-light-gray p-1 rounded-lg' 
            onClick={() => {
              handleClick('userProfile')
              setActiveMenu(false)
            }}>
            <img src={avatar} className='rounded-full w-8 h-8 ' alt='' />
            <p>
              <span className='text-gray-400 text-14'>Him </span> {' '}
              <span className='text-gray-400 text-14 font-bold ml-1 '>Michael</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
    </div>
      </div>
  
  )
}

export default Navbarr
