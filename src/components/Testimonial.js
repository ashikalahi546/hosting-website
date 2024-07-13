
"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { testimonialData } from "@/data/TestimonialData";
import Image from "next/image";
import { SwiperNavButtons } from './SwiperNavButtons';
// import { Star } from './Star';
import React, { useEffect, useState } from 'react';
import Star from './Star';

const Testimonial = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(()=>{
  async function fetchData (){
    try{
      await new Promise (resolve =>setTimeout(resolve ,500))
      setData(testimonialData) 
    }finally{
      setLoading(false)
    }
  }
  fetchData()
},[])




  return (
    <div className=" relative">
      <div className="w-[1330px] mx-auto">
      <div className="py-[130px] ">
      <div className="text-center text-white">
        <h1 className="text-[40px] font-semibold ">What our clients say</h1>
        <p className="text-lg opacity-90 leading-[32px]  pt-[15px]">
          Your trusted hosting partner since 2005. {`Here's`} what some of our
          customers say about HOST.CO.IN
        </p>
      </div>
     <div className="w-[1267px] mx-auto">
     <div  className="swiper-container  mt-[60px] relative  ">
       {loading ? <div className="flex items-center justify-center">
        <div className="loading-spinner "></div> 
       </div>:   <Swiper 
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3}
          spaceBetween={32}>
          
          {data?.map((testimonial) => (
            <SwiperSlide key={testimonial.id} >
              <div className="flex items-center justify-center ">
                <Image
                  src={testimonial?.image}
                  width={100}
                  height={100}
                  alt="loading.....?"
                />
              </div>
              <div className="flex items-center justify-center relative top-[1.2px] mt-[19px]">
                <Image
                  src="/images/Polygon.png"
                  width={19}
                  height={19}
                  alt="loading....?"
                />
              </div>
              <div className="border rounded-[20px] px-[17px] py-[34px] ">
                <p className="leading-[22px] text-white">
                  {testimonial?.title}
                </p>
              </div>
              <div className="flex flex-col items-center pt-[15px] gap-[15px]">
                <h3 className="text-lg font-medium text-white">{testimonial?.name}</h3>
                {/* <div className="text-white ">
                    {testimonial?.rating}
                </div> */}
       <Star/>
              </div>
            </SwiperSlide>
          ))}
      <div >
      <SwiperNavButtons  />
      </div>
        </Swiper>}
      
      </div>
     </div>
    </div>
    </div>
    </div>
  );
};

export default Testimonial;
