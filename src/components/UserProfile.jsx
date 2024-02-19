import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { color, setIsClicked } = useStateContext();

  return (
    <div className="z-30 absolute right-1 top-16 bg-white dark:bg-[#42464D] p-5 rounded-lg w-[282px] md:w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-sm md:text-lg dark:text-gray-200">User Profile</p>
        <div onClick={() => setIsClicked(prev => !prev)}>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
        </div>
      </div>
      <div className="flex gap-5 items-center mt-3 md:mt-6 border-color border-b-1 pb-3 md:pb-6">
        <img
          className="rounded-full h-16 w-16 md:h-24 md:w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-[16px] md:text-xl dark:text-gray-200"> Michael Roberts </p>
          <p className="text-gray-500 text-xs md:text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-xs md:text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-bold text-sm md:text-lg dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          size='17px'
          color="white"
          bgColor={color}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;