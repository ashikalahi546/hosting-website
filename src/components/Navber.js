"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navberData } from "./../data/NavberData";
import { LanguageIcon, SearchIcon } from "@/icons/Icons";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoArrowUpCircleOutline } from "react-icons/io5";


const Navber = () => {
  const [header, setHeader] = useState(false);
  const [hover, setHover] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 20) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const scrollUp =()=>{
    window.scrollTo({top:0,behavior:"smooth",})
  }

  return (
    
 <div>
 
 <div
  className={`bg-[#FFFFFF1A] h-20 px-[25px] flex flex-col justify-center transition-all ${
    header
      ? "fixed w-full px-[287.5px] top-0 z-50 custom-gradient-two duration-500"
      : "w-[1320px] mx-auto rounded-[5px] duration-75"
  }`}
>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="/images/Hosting Logo.png"
            width={72}
            height={45}
            alt="loading...?"
          />
          <Image
            src="/images/Hosting Text.png"
            width={92}
            height={22}
            alt="loading...?"
          />
        </div>
        <div className="flex items-center gap-10 ">
          <ul className="flex items-center text-[#FFFFFF] gap-4 text-lg leading-6 ">
            {navberData.map((item, itemIndex) => (
              <li
                onMouseEnter={() => setHover(itemIndex)}
                onMouseLeave={() => setHover(null)}
                className=" navber group relative"
                key={item.id}
              >
                <span className="cursor-pointer flex items-center gap-1 h-20 ">
                  {item.title}
                  {item.submenu && (
                    <IoIosArrowDown
                      className={`transtion-transform duration-300 ease-in-out ${
                        item.submenu ? "rotate-0 group-hover:rotate-180" : ""
                      }`}
                    />
                  )}
                </span>
                {/* first submenu */}
                {hover === itemIndex && item.submenu && (
                  <ul className="absolute top-20 -left-[72px] right-0 bg-[#101836] !z-0 cursor-pointer    w-[182px] rounded-xl ">
                    <div
                      className={`bg-[#101836] size-5 rotate-45 !z-[-999999] absolute right-2.5 top-[-8px] ${
                        tick ? "group-hover:bg-[#267FE5] duration-0" : ""
                      }`}
                    ></div>
                    {item?.submenu?.map((submenu, subIndex) => (
                      <li
                        onMouseEnter={() => {
                          setHovered(subIndex);
                          if (subIndex === 0) {
                            setTick(true);
                          }
                        }}
                        onMouseLeave={() => {
                          setHovered(null);
                          if (subIndex === 0) {
                            setTick(false);
                          }
                        }}
                        key={subIndex}
                        className={`hover:bg-[#267FE5] bg-[#101836] z-[9999] py-2.5 px-3 ${
                          subIndex === 0 ? "rounded-t-xl" : ""
                        } ${
                          subIndex === item.submenu.length - 1
                            ? "rounded-b-xl"
                            : ""
                        }`}
                      >
                        <span className="leading-[14px] font-medium ">
                     <div className="flex items-center  gap-1">
                     <p className="text-sm pee"> {submenu?.title}</p>
                          {submenu.submenuTwo && (
                            <span><MdKeyboardArrowRight  className={`peer-hover:!mr-52 block  duration-200`}/></span>
                          ) }
                 </div>
                        </span>

                        {/* second Submenu */}
                        {hovered === subIndex && submenu.submenuTwo && (
                          <ul className="absolute top-[85px] left-[100%] bg-[#101836] cursor-pointer  ease-in-out transition 	   w-[182px] rounded-xl ">
                            {submenu.submenuTwo.map(
                              (secondMenu, secondMenuIndex) => (
                                <li
                                  key={secondMenuIndex}
                                  className="hover:bg-[#267FE5]  ease-in-out transition	z-50  first:rounded-t-xl last:rounded-b-xl py-2.5 px-3  "
                                >
                                  <span className="text-sm leading-[14px] font-medium ">
                                    {secondMenu.title}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul className="flex items-center ">
            <li className="cursor-pointer">
              <SearchIcon />
            </li>
            <li className="px-5 cursor-pointer">
              <LanguageIcon />
            </li>
            <button className="h-10 w-[74px] bg-[#CF088C] border-none outline-none rounded-[20px] leading-[19.36px] text-[#FFFFFF] mr-6">
              Login
            </button>
            <button className="h-10 w-[90px] bg-[#CF088C] border-none outline-none rounded-[20px] text-[#FFFFFF] leading-[19.36px]">
              Sign Up
            </button>
          </ul>
        </div>
      </div>
    </div>
    {header && <button onClick={()=>scrollUp()} className="text-3xl fixed bottom-6 b text-white right-5 duration-300 z-40"><IoArrowUpCircleOutline />
</button>}
 </div>
  );
};

export default Navber;
