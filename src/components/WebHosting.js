import { hostingData } from "@/data/HostingData";
import SectionTitle from "./SectionTitle";
import { RupiIcons } from "@/icons/Icons";

const WebHosting = () => {
  return (
    <div>
      <SectionTitle
        heading={"Web Hosting Add-Ons"}
        subHeading={
          "HOST.CO.IN. offers several Add-Ons services that you can use to increase your web site's functionality, security, and more."
        }
      />
      <div className="flex mt-[60px] w-full gap-4 ">
        {hostingData?.map((hosting,id) => (
          <div key={id} className=" cardBg     text-white">
             <div className="px-[45px] flex text-center items-center justify-center flex-col ">
             <p className="mt-[30px]">{hosting?.icon}</p>
              <h3 className="text-[26px] font-semibold pt-[30px]">
                {hosting?.name}
              </h3>
              <p className="leading-[22px] pt-6">{hosting?.title}</p>
              <div className="flex items-center pt-8">
                <div className="h-10 w-[42.5px] ">
                  <RupiIcons />
                </div>

                <h2 className="text-[32px] leading-[36.57px] font-semibold">{hosting?.price}</h2>
               <div className="text-2xl font-semibold">
               {(id === 1 || id === 2) ? <p>Mo</p> : <p>Yr</p>    }
               </div>
             
              </div>
              <div className="bg-[url('/images/frame1.png')] w-[235px] rounded-full h-[60px] relative top-6 flex items-center justify-center cursor-pointer">
                <p className="text-lg font-medium">Learn More</p>
              </div>
             </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default WebHosting;
