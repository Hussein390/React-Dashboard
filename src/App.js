import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbarr, Footer, Sidebar, ThemeSettings } from './components';
import {
  Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar,
  Pie, Financial, ColorPicker, ColorMapping, Editor
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setActiveMenu, activeMenu, setTheme, theme, color, mode } = useStateContext(); 
  return (
    <div className={mode === "Dark"? 'dark':''}>
      <BrowserRouter>
        <div className='flex  relative dark:bg-main-dark-bg'>
          <div className='fixed  right-4 bottom-4 z-30'>
            <TooltipComponent content='Settings' position='Top'>
              <button onClick={() => {
                setTheme(true)
                setActiveMenu(false)
              }} type='button' className='text-3xl rounded-full p-3 hover:drop-shadow-xl text-white hover:bg-light-gray'
                style={{ background: color }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 pl-3 fixed z-30 sidebar dark:bg-secondary-dark-bg
            bg-white'>
              <Sidebar />
            </div>
          ) :
            (
              <div className='w-0'>
                <Sidebar />
              </div>
            )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg drop-shadow-sm dark:bg-main-dark-bg navbar w-full'>
              <Navbarr />
            </div>
          
          
            <div>
              {theme && <ThemeSettings />}
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
            </div>
          </div>
        </div>

      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
