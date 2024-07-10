"use client"
import { LeftSquareIcon, RightSquareIcon } from '@/icons/Icons';
import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
    <div className="   absolute inset-0 top-12 z-40  ">

     

<div className='absolute left-0'>
<button onClick={() => swiper.slidePrev()}><LeftSquareIcon/></button>
  </div>
 <div className='absolute right-0'>
 <button onClick={() => swiper.slideNext()}><RightSquareIcon/></button>
 </div>
 </div>
 </>
 
  );
};

