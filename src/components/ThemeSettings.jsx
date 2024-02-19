import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext} from '../contexts/ContextProvider';
const ThemeSettings = () => {
  const {setCurrentColor,mode, color, setTheme, setCurrentMode} = useStateContext()
  return (
    <div className='bg-half-transparent z-30 w-screen fixed nav-item top-0 ring-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-400'>
        <div className='flex items-center justify-between p-4 ml-4'>
          <p className='text-xl font-semibold'>Settings</p>
          <button onClick={() => setTheme(false)} style={{
            color: 'rgb(153, 171, 180)',
        borderRadius: '50%',}} className='text-3xl duration-150 p-3 hover:drop-shadow-xl hover:bg-light-gray '><MdOutlineCancel className=''/></button>
        </div>
        <div className='flex-col border-t border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>
          <div className='mt-4'>
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              className='cursor-pointer'
              onChange={setCurrentMode}
              checked={mode === 'Light'}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>Light</label>
          </div>
          <div className='mt-4'>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              className='cursor-pointer'
              onChange={setCurrentMode}
              checked={mode === 'Dark'}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>Dark</label>
          </div>
        </div>
        <div className='flex-col border-t border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3 '>{themeColors.map((itme, index) => {
            return(
              <TooltipComponent key={index} contnet={itme.name} position='TopCenter'>
                <div className='relative mt-2  cursor-pointer flex gap-5 items-center'>
                  <button className='h-10 w-10 cursor-pointer rounded-full' style={{ background: itme.color }}
                  onClick={() => setCurrentColor(itme.color)}>
                    <BsCheck className={` ml-2 text-2xl text-white ${itme.color === color ? "block" : 'hidden'}`} /></button>
                </div>
            </TooltipComponent>)
          })}</div>
          </div>
      </div>
    </div>
  )
}

export default ThemeSettings
