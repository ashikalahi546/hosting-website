import React from 'react';

const Subscribe = () => {
      return (
            <div className='bg-[#FFFFFF1A]  text-white'>
            <div className='w-[1330px] h-[220px] mx-auto flex justify-between items-center'>
               <div>
               <h3 className='text-[28px] leading-[33.89px] font-semibold'>Subscribe To Our Newsletter!</h3>
               <p className='text-lg leading-[21.78px] opacity-90 mt-2.5'>Get Regularly News and Exclusive Offers</p>
               </div>
               <div className="relative">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-[576px]  bg-white h-[60px] pl-[35px] pr-40 rounded-[50px] border-none outline-none text-black"
            />
            <div className="absolute top-[5px] right-2">
              <button className="h-[50px] w-[141px] bg-[#CF088C] rounded-[50px] text-[#FFFFFF] leading-[19.36px] outline-none">
              Subscribe
              </button>
            </div>
          </div>
            </div>
                  
            </div>
      );
};

export default Subscribe;