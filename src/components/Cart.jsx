import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { color, setIsClicked} = useStateContext();
  const [price, setPrice] = useState(0)

  const Plus = (id) => {
    if(id === 1) setPrice(price + 1)
  }
  const Mins = (id) => {
    setPrice(price - 1)
  }

  return (
    <div className="z-50 select-none absolute right-5 md:right-2 top-16 bg-white dark:bg-[#42464D] shadow-md p-4 md:p-8 rounded-lg w-[292px] md:w-96">
      <div className="float-right   duration-1000 ease-in-out dark:text-gray-200 transition-all">
        <div className="flex border-b-4 justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <div onClick={()=> setIsClicked(prev => !prev)}>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
          </div>
        </div>
        {cartData?.map((item, index) => (
          <div key={index} className='md:mt-3'>
            <div>
              <div className="flex leading-5 gap-5 border-b-1 border-color dark:border-gray-600 py-2 ">
                <img className="rounded-lg h-14 w-14 md:h-18 md:w-18" src={item.image} alt="" />
                <div>
                  <p className="font-bold text-[16px] md:text-[20px] ">{item.name}</p>
                  <p className="text-gray-600 mt-1 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-sm md:text-lg">{item.price}</p>
                    <div className="flex items-center text-[16px] md:text-[20px] border-1 border-r-0 border-color rounded">
                      <p onClick={Mins} className="p-2 border-r-1 cursor-pointer
                        dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2  border-r-1 border-color
                        dark:border-gray-600 text-green-600">{price}</p>
                      <p onClick={() => Plus(index)} className="p-2 border-r-1 cursor-pointer
                        border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 pb-1  text-[16px] md:text-[18px] ">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex  justify-between items-center mt-1">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-2 ">
          <Button
            color="white"
            bgColor={color}
            text="Place Order"
            borderRadius="8px"
            width="full"
            size='15px'
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;