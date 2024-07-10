import { DownIcon } from "@/icons/Icons";

const Domain = () => {
  return (
    <div className="bg-[#FFFFFF1A]  mt-[98.93px] text-[#FFFFFF] ">
      <div className="w-[1330px] mx-auto flex h-[220px] justify-between items-center ">
        <div>
          <h2 className="text-[32px] font-bold">Get 10% Off Today</h2>
          <p className="text-lg leading-[26px] mt-2.5 opacity-80">
            Grab the holiday offer.This offer will end in 3 days.Hurry Up!
            <span className="block">
              Get your perfect domain starting from 149/Mo.
            </span>
          </p>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              placeholder="Type Your Domain Name"
              className="w-[576px]  bg-white h-[60px] pl-[35px] pr-[270px] rounded-[50px] border-none outline-none text-black"
            />
            <div className="absolute top-[5px] right-2">
              <p className="absolute top-[14.5px] -left-14 text-black flex items-center gap-x-[3px]">.com <DownIcon/></p>
              <button className="h-[50px] w-[181px] bg-[#CF088C] rounded-[50px] text-[#FFFFFF] ml-[15px]">
                Search
              </button>
            </div>
          </div>
          <div className="mt-[30px] flex items-center gap-[41px]">
            <div>
                <h4 className="text-lg">.com</h4>
                <p className="text-sm pt-2.5 opacity-60">199/Mo</p>
            </div>
            <div>
                <h4 className="text-lg">.org</h4>
                <p className="text-sm pt-2.5 opacity-60">179/Mo</p>
            </div>
            <div>
   
                <h4 className="text-lg">.info</h4>
                <p className="text-sm pt-2.5 opacity-60">189/Mo</p>
            </div>
            <div>
            <h4 className="text-lg">.store</h4>
                <p className="text-sm pt-2.5 opacity-60">199/Mo</p>
            </div>
            <div>
                <h4 className="text-lg">.net</h4>
                <p className="text-sm pt-2.5 opacity-60">159/Mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
