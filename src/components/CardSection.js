import React from 'react';
import { cardData } from './../data/CardData';
import SectionTitle from './SectionTitle';
const CardSection = () => {
    
    return (
        <div className='py-[130px]'>
            <SectionTitle 
            customClass="w-[979px] mx-auto"
            heading={"Why Choose Host.Co.In ?"} 
            subHeading={"With Host.co.in stand apart in the sphere of World Wide Web with maximum flexibility offering elevated packages for all your business needs ensuring smooth execution of your business activities."}/>
            <div className='grid grid-cols-3 gap-[19px] pt-28'>
                {cardData.map((card)=>(
              
                    <div key={card.id} className=" bg-[url('/images/Frame51.png')] h-[240px] bg-no-repeat relative"> 
                    
                    <div className=" bg-[url('/images/Vector(11).png')] size-[82px] left-[25px] absolute -top-[51px] flex items-center justify-center">
                    <span>{card?.icon}</span>

                    </div>
                    <div className='pt-[60px] px-[35px] text-white'>
                        <h2 className='text-[26px] font-semibold'>{card?.name}</h2>
                        <p className='leading-[22px] pt-[15px]'>{card?.title}</p>
                    </div>
                </div>
             
                ))}
            </div>
        </div>
    );
};

export default CardSection;