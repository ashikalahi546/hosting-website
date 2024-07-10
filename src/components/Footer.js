import { FaccebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/icons/Icons";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#03091D] h-[500px] relative">
      <div className="w-[1330px] mx-auto flex pt-[120px] justify-between ">
        <div className="w-[296px]">
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
          <p className="text-[#E6E6E6] leading-6 pt-[15px] pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>
          <div className="flex items-center gap-[25px]">
            <FaccebookIcon/>
            <InstagramIcon/>
            <LinkedinIcon/>
                 <TwitterIcon/>
          </div>
        </div>
       <nav className="text-white">
       <h2 className="text-lg font-bold leading-6">Company</h2>
       <ul className="text-[#E6E6E6] leading-[32px] mt-[15px] flex flex-col gap-[5px]  *:cursor-pointer">
         <li>Abous Us</li>
         <li>Contact Us</li>
         <li>Client Area</li>
         <li>Data Center</li>
         <li>Site Map</li>
        </ul>
       </nav>
       <nav className="text-white">
       <h2 className="text-lg font-bold leading-6">Services</h2>
       <ul className="text-[#E6E6E6] leading-[32px] mt-[15px] flex flex-col gap-[5px]  *:cursor-pointer">
         <li>cPanel Hosting</li>
         <li>VPS Hosting</li>
         <li>Dedicated Servers</li>
         <li>Cloud Hosting</li>
         <li>Reseller Hosting</li>
        </ul>
       </nav>
       <nav className="text-white">
       <h2 className="text-lg font-bold leading-6">Resources</h2>
       <ul className="text-[#E6E6E6] leading-[32px] mt-[15px] flex flex-col gap-[5px]  *:cursor-pointer">
         <li>Web Hosting Blogs</li>
         <li>Knowledge Base</li>

        </ul>
       </nav>
       <nav className="text-white">
       <h2 className="text-lg font-bold leading-6">Legal</h2>
       <ul className="text-[#E6E6E6] leading-[32px] mt-[15px] flex flex-col gap-[5px]  *:cursor-pointer">
         <li>Terms of Service</li>
         <li>TService Level Aggrement</li>
         <li>Privacy Policy</li>
         <li>Billing Policy</li>

        </ul>
       </nav>
      </div>
      <div className="absolute right-[190px]  cursor-pointer ">
        <Image src="/images/Group 51.png" width={65} height={65} alt="loading.......?"/>
      </div>
      <p className="text-center pt-[87px] text-[#E6E6E6] leading-[32px]">Copyright © 2022, host.co.in. All rights reserved.</p>
    </div>
  );
};

export default Footer;
