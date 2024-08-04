import React from "react";
import Brand1 from "../../assets/brand/brand1.svg";
import Brand2 from "../../assets/brand/brand2.svg";
import Brand3 from "../../assets/brand/brand3.svg";
import Brand4 from "../../assets/brand/brand4.svg";
import Brand5 from "../../assets/brand/brand5.svg";
import Brand6 from "../../assets/brand/brand6.svg";

const Brand = () => {
  return (
    <>
      <section className="bg-[#141414]">
        <div className="container flex justify-around gap-6 flex-wrap py-4">
          <img src={Brand1} alt="" className="max-w-[100px]" />
          <img src={Brand2} alt="" className="max-w-[100px]" />
          <img src={Brand3} alt="" className="max-w-[100px]" />
          <img src={Brand4} alt="" className="max-w-[100px]" />
          <img src={Brand5} alt="" className="max-w-[100px]" />
          <img src={Brand6} alt="" className="max-w-[100px]" />
        </div>
      </section>
    </>
  );
};

export default Brand;
