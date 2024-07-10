import { EmailIcon, HelpIcon, PhoneIcon, SupportIcon } from "@/icons/Icons";
import React from "react";

const TopNav = () => {
  return (
    <div className="pt-4 pb-6 flex justify-between w-[1330px] mx-auto">
      <div className="flex items-center gap-[50px]">
        <div className="flex items-center gap-2.5">
          <EmailIcon />
          <p className="text-[#FFFFFF] opacity-80 text-sm leading-6">hosting@gmail.com</p>
        </div>
        <div className="flex items-center gap-2.5">
          <PhoneIcon />
          <p className="text-[#FFFFFF] opacity-80 text-sm leading-6">+91 999999999</p>
        </div>
      </div>
      <div className="flex items-center gap-[50px]">
        <div className="flex items-center gap-2.5">
          <SupportIcon />
          <p className="text-[#FFFFFF] opacity-80 text-sm leading-6">Support</p>
        </div>
        <div className="flex items-center gap-2.5">
          <HelpIcon />
          <p className="text-[#FFFFFF] opacity-80 text-sm leading-6">Help</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
