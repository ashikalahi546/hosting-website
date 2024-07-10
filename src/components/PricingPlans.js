"use client";
import { pricingPlansData } from "@/data/PricingPlansData";
import { CheckIcon } from "@/icons/Icons";
import Image from "next/image";

import { useEffect, useState } from "react";

const PricingPlans = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(pricingPlansData);
  }, []);
  return (
    <div>
      <div className="text-center text-[#FFFFFF]">
        <h1 className="text-[40px] font-semibold">Pricing Plans</h1>
        <p className="pt-[15px] text-lg opacity-90">
          Simple,transparent pricing that grows with you.
        </p>
      </div>
      <div className="flex justify-center py-[60px]">
        <div className="w-[248px] h-[60px] text-[#FFFFFF] bg-white rounded-[50px] p-[5px] flex  items-center  ">
          <button className="bg-[#CF088C] w-full rounded-[50px] h-[50px] ">
            Monthly
          </button>
          <button className=" w-full rounded-[50px] h-[50px] text-[#000000]">
            Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[45.5px] text-[#FFFFFF]">
        {item?.map((pricing, index) => (
          <div key={pricing?.id}>
            <div
              className={` rounded-[30px] px-[25px] py-[45px] h-[673px] ${
                index === 0 && "first-card"
              } ${index === 1 && "second-card"} ${index === 2 && "third-card"}`}
            >
              <h2 className=" opacity-60 text-[22px] font-medium leading-[32px]">
                {pricing?.name}
              </h2>
              <div className="flex items-center pt-[29px] gap-[55px] h-[50px]">
                <div className=" flex items-center ">
                  <span className="size-[51px]">{pricing?.rupies}</span>
                  <p className="font-semibold leading-[45.7px]">
                    <span className="text-[37.89px] leading-[46.6px] ">{pricing?.price}/</span>
                    <span className="text-[22.86px]">Mo</span>
                  </p>
                </div>
                <div>
                  <div className="relative">
                    <div className="flex items-center opacity-70 	">
                      <span
                        className={`${
                          (index === 0 || index === 1) && "size-[17px] "
                        }`}
                      >
                        {pricing?.rupies}
                      </span>
                      <p className="font-semibold text-base leading-[22px]">
                        {pricing?.discount}
                      </p>
                    </div>
                    <div
                      className={`${
                        (index === 0 || index === 1) &&
                        "border-b w-[51px] absolute top-2.5"
                      } `}
                    ></div>
                  </div>
                  {(index === 0 || index === 1) && (
                    <p
                      className={`text-lg font-semibold leading-[32px] ${
                        index === 0 && "text-[#D4088C]"
                      } ${index === 1 && "text-[#6EE8FC]"}`}
                    >
                      Save {pricing?.save} %
                    </p>
                  )}
                </div>
              </div>
              <h3 className="text-lg leading-[26px] pt-[26px] opacity-90">
                {pricing?.title}
              </h3>
              <div className="pt-[30px] flex flex-col gap-[18px]">
                <div className="flex items-center gap-x-[15px]">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="text-lg">{pricing?.wordpress}</p>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="text-lg">{pricing?.Plugins}</p>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="text-lg">{pricing?.assistance}</p>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="text-lg">{pricing?.environment}</p>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="text-lg">{pricing?.day}</p>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="text-lg">{pricing?.support}</p>
                </div>
              </div>
              <div>
                {(index === 0 || index === 2) && (
                  <div className="flex justify-center mt-[46px] cursor-pointer">
                    <div className=" bg-[url('/images/frame.png')] h-[60px] w-[248px] flex items-center justify-center">
                      <p className="text-lg font-medium">View Plans</p>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex justify-center mt-[46px] cursor-pointer">
                    <div className=" bg-[url('/images/frame1.png')] h-[60px] w-[248px] flex items-center justify-center">
                      <p className="text-lg font-medium">Choose Plan</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;