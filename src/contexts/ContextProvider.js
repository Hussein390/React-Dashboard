import React, {  useContext, useState } from "react";

const StateContext = React.createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children  }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [color, setColor] = useState('#03C9D7');
  const [mode, setMode] = useState("Light");
  const [theme, setTheme] = useState(false);

  const setCurrentMode = (e) => {
    setMode(e.target.value);
    localStorage.setItem('mode', e.target.value)
    setTheme(false)
  }
  const setCurrentColor = (color) => {
    setColor(color);
    localStorage.setItem('color', color)
    setTheme(false)
  }

  const handleClick = (clicked)=> setIsClicked({...initialState, [clicked]: true})
  return (
    <StateContext.Provider value={{
      activeMenu, setActiveMenu,
      isClicked, setIsClicked,
      handleClick,
      screenSize, setScreenSize,
      setColor, color,
      setMode, mode,
      theme, setTheme,
      setCurrentColor, setCurrentMode
    }}>
      {children }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);