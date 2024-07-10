import Image from "next/image";


const Migration = () => {
  return (

      <div>
      <div className="text-center text-white">
        <h1 className="text-[40px] font-semibold ">
          Migration is not an issue with us
        </h1>
        <p className="text-lg opacity-90  pt-[15px]">
          We provied free migration service so that ours customers can manage
          their work easily
        </p>
      </div>

   <div className="flex items-center justify-between mt-[60px] gap-20">
   <div>
        <div className="text-white">
          <h1 className="text-[32px] font-semibold">Hassle Free Migration</h1>
          <p className="opacity-90 leading-[22px] pt-2.5">
            Our technical expert team will help you to migrate your site from
            your <span className="block"> current hosting provider to Host.co.in, You don't have to worry
            about any</span> of the migration issues.
          </p>
        </div>

        <div className=" bg-[url('/images/Frame27.png')] h-[59px] w-[192px] bg-cover flex items-center justify-center mt-[35px] cursor-pointer">
          <p className="text-lg font-medium text-white">Contact Sales</p>
        </div>
      </div>
      <Image src="/images/Migration41.png" width={669} height={453} alt="loading......?"/>
   </div>
    </div>
    
 
  );
};

export default Migration;
