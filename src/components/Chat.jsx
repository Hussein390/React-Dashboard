import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { color, setIsClicked } = useStateContext();

  return (
    <div className="nav-item  absolute right-5 md:right-3 top-16 bg-white dark:bg-[#42464D] shadow-md p-5 rounded-lg w-[282px] md:w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button type="button" className="text-white  text-xs rounded p-1 px-2 bg-orange-600">
            5 New
          </button>
        </div>
        <div onClick={() => setIsClicked(prev => !prev)}>
          
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size='24px'
          borderRadius="50%"
          bgColor='#fff'
        />
        </div>
      </div>
      <div className="mt-5 nav-item">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border-b-1 border-color py-2 leading-8 cursor-pointer">
            <div className="relative">
              <img
                className="rounded-full h-11 w-11 md:h-14 md:w-14"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: color }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-bold text-[16px] dark:text-gray-200 ">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={color}
            text="all messages"
            borderRadius="10px"
            size='16px'
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
