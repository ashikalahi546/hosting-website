import React from "react";
import SectionTitle from "./SectionTitle";
import { ChoosePlanIcon, LiveWebsiteIcon, UserIcon } from "@/icons/Icons";
import Image from "next/image";

// import Vector from "/public/images/Vector 21.png";
// import Vector1 from "/public/images/Vector 22.png";
const WebsiteLive = () => {
  return (
    <div className="py-[130px] w-[969px] mx-auto">
      <SectionTitle
        heading={"Get Your Website Live Today"}
        subHeading={
          "Get everything that you require to set up your personal / business website and establish your online presence. Service includes web hosting in India, free domain registration along with 24x7 Support."
        }
      />

      <div className="mt-[60px] flex  items-center gap-0  justify-center">
        <div className='bg-[url("/images/gradient.png")] size-[115px] flex items-center justify-center'>
          <UserIcon />
        </div>
        {/* <Image src={Vector} alt="loading....?" /> */}
        <Image
          className="-mt-7"
          src="/images/Vector 21.png"
          width={291}
          height={48}
          alt="loading....?"
        />
        <div className='bg-[url("/images/gradient.png")] size-[115px] flex items-center justify-center'>
          <ChoosePlanIcon />
        </div>
        <Image
          className="mt-12"
          src="/images/Vector 22.png"
          width={267}
          height={44}
          alt="loading....?"
        />
        <div className='bg-[url("/images/gradient.png")] size-[115px] flex items-center justify-center'>
          <LiveWebsiteIcon />
        </div>
      </div>

      <div className="text-lg text-white font-medium leading-[32px] flex items-center justify-between mt-5">
        <p className="pl-12">Register</p>
        <p className="pl-20">Choose Plan</p>
        <p>See your website live</p>
      </div>
      <h3 className="text-white mt-20 text-center text-[26px] font-semibold leading-[31.47px]">
        Starting at just ₹125/mo
      </h3>
      <div className="flex justify-center">
        <div className="bg-[url('/images/frame1.png')] w-[198px] rounded-full h-[60px] mt-[15px] flex items-center justify-center cursor-pointer">
          <p className="text-lg font-medium text-white leading-[21.78px]">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteLive;
