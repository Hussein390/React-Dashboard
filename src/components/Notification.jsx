import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { color, setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-33 top-16 bg-white dark:bg-[#42464D] p-5 rounded-lg w-[282px] md:w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
        </div>
        <div onClick={() => setIsClicked(prev => !prev)}>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
        </div>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color py-3">
            <img className="rounded-full h-11 w-11 md:h-14 md:w-14" src={item.image} alt={item.message} />
            <div>
              <p className="font-bold text-sm dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={color} text="Notifications" size='15px' borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Notification;