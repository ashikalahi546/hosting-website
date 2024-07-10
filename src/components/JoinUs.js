import { joinUsData } from "@/data/JoinUsData";
import Image from "next/image";
import React from "react";

const JoinUs = () => {
  return (
    <div className="py-[130px] text-[#FFFFFF]">
      <div className="text-center">
        <h1 className="text-[40px] font-semibold">
          What will you get if you join us ?
        </h1>
        <p className="text-lg leading-[32px] mt-[15px] ">
          Get the best hosting service at the price you can afford
        </p>
      </div>
      <div className="flex items-center justify-between">
        {joinUsData?.map((join) => (
          <div key={join.id} className="mt-[60px]">
            <div className="flex flex-col items-center justify-center ">
              <div className='bg-[url("/images/gradient.png")] size-[115px]'>
                <div className="flex items-center justify-center h-[115px]"> {join?.icon}</div>
              </div>
              <h1 className="mt-5 text-2xl leading-[32px] font-medium">{join?.title}</h1>
              <p className="text-lg leading-[32px] pt-[1px] opacity-60">{join?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
