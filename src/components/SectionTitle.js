import React from "react";

const SectionTitle = ({ heading, subHeading,customClass }) => {
  return (
    <div>
      <div className="text-center text-white">
        <h1 className="text-[40px] font-semibold ">{heading}</h1>
        <p className={`text-lg opacity-90 leading-[32px]  pt-[15px] ${customClass}`}>
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
