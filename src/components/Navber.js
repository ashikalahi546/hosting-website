"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navberData } from "./../data/NavberData";
import { LanguageIcon, SearchIcon } from "@/icons/Icons";
import { IoIosArrowDown } from "react-icons/io";

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
  return (
    <div
      className={`bg-[#FFFFFF1A] h-20 rounded-[5px]  px-[25px] flex flex-col justify-center ${
        header
          ? " fixed w-full px-[286.5px] mx-auto  top-0 z-50  custom-gradient-two "
          : "mx-[286.5px] "
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
                  <ul className="absolute top-20 left-0 bg-[#101836] !z-0 cursor-pointer    w-[182px] rounded-xl ">
                    {/* <div
                      className={`bg-[#000000]  size-5 rotate-45 absolute right-2.5 top-[-8px] ${
                        tick ? "group-hover:bg-[#267FE5] !z-[-999999] duration-0" : "!z-[-999999]"
                      }`}
                    ></div> */}
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
                        className={`hover:bg-[#267FE5] z-[9999] py-2.5 px-3 ${
                          subIndex === 0 ? "rounded-t-xl" : ""
                        } ${
                          subIndex === item.submenu.length - 1
                            ? "rounded-b-xl"
                            : ""
                        }`}
                      >
                        <span className="text-sm leading-[14px] font-medium ">
                          {submenu?.title}
                        </span>

                        {/* second Submenu */}
                        {hovered === subIndex && submenu.submenuTwo && (
                          <ul className="absolute top-[85px] left-[100%] bg-[#101836] cursor-pointer  ease-in-out transition	   w-[182px] rounded-xl">
                            {submenu.submenuTwo.map(
                              (secondMenu, secondMenuIndex) => (
                                <li
                                  key={secondMenuIndex}
                                  className="hover:bg-[#267FE5]  ease-in-out transition	z-50  first:rounded-t-xl last:rounded-b-xl py-2.5 px-3  "
                                >
                                  <span className="text-sm leading-[14px] font-medium">
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
  );
};

export default Navber;
