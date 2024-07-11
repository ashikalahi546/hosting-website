import Image from "next/image";


const Hero = () => {
  return (
<div>
<div className="flex items-center justify-between mt-[57px]">
<div className="text-[#FFFFFF]">
      <div>
        <h1 className="text-[40px] leading-[60px] font-bold">
          Reliable Web Hosting Platform
          <span className="block"> for Your Website</span>
        </h1>
        <p className="text-lg leading-[26px] py-[30px] opacity-80">
          Fully Managed High Performance Web Hosting With Free Domain
        </p>
        <div>
          <button className="bg-[#CF088C] hover:border hover:bg-transparent duration-75 w-[187px] h-[47px] leading-[19.36px] rounded-[25px]">
            Try for 7 days free
          </button>
          <button className="border hover:bg-[#CF088C] hover:border-none duration-75 border-[#FFFFFF] w-[181px] h-[47px] rounded-[25px] ml-4 leading-[19.36px]">
            Choose your plan
          </button>
        </div>
      <div className="relative fade-image">
      <Image className="absolute top-20 right-0" src="/images/Vector.png" width={82} height={82} alt="loading....?"/>
      </div>
      </div>
    </div>
    <div className="">
        <Image src="/images/Banner.png" width={623} height={515} alt="loading....?"/>
    </div>
</div>

</div>
  );
};

export default Hero;
