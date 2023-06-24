import React from "react";
import Image from "next/image";
import fire from "../../../public/img/fire.svg";
import vahalla from "../../../public/img/vahalla.svg";
import listo from "../../../public/img/listo.svg";
import bibox from "../../../public/img/bibox.svg";
import think from "../../../public/img/think.svg";
import inge from "../../../public/img/inge.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Job = () => {
  return (
    <div className="my-8">
      <div className="flex gap-3">
        <Image
          src={fire}
          className=" "
          alt="lang"
          width={25}
          height={25}
          priority
        />
        <p className="text-[#068C95] text-[26px] font-[600]">Job Experience</p>
      </div>
      <div className="mt-3 w-[97%] mx-auto flex gap-[4.5%] flex-wrap">
        <div className="">
          <div className="flex justify-between items-center">
            <p className="py-1.5 pl-2.5 pr-7 text-[16px] font-[500] rounded-tr-[40px] bg-blue">
              Recent
            </p>
            <p className=" text-[16px] font-[500]">june 1</p>
          </div>
          <Image
            src={vahalla}
            className=" "
            alt="lang"
            width={170}
            height={65}
            priority
          />
          <div className="flex items-center">
            <div className="mt-4">
              <p className="font-[500]">888valhalla</p>
              <p className="text-t_blue text-[15px] font-[500]">cardona</p>
            </div>
            <AiOutlineArrowRight className="text-light_blue ml-auto w-[30px] h-[20px] font-bold" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <p className="py-1.5 pl-2.5 pr-7 text-[16px] font-[500] rounded-tr-[40px] bg-blue">
              Recent
            </p>
            <p className=" text-[16px] font-[500]">March 12</p>
          </div>
          <Image
            src={listo}
            className=" "
            alt="lang"
            width={170}
            height={65}
            priority
          />
          <div className="flex items-center">
            <div className="mt-4">
              <p className="font-[500]">888valhalla</p>
              <p className="text-t_blue text-[15px] font-[500]">cardona</p>
            </div>
            <AiOutlineArrowRight className="text-light_blue ml-auto w-[30px] h-[20px] font-bold" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <p className="py-1.5 pl-2.5 pr-7 text-[16px] font-[500] rounded-tr-[40px] bg-blue">
              Recent
            </p>
            <p className=" text-[16px] font-[500]">2022</p>
          </div>
          <Image
            src={bibox}
            className=" "
            alt="lang"
            width={170}
            height={65}
            priority
          />
          <div className="flex items-center">
            <div className="mt-4">
              <p className="font-[500]">888valhalla</p>
              <p className="text-t_blue text-[15px] font-[500]">cardona</p>
            </div>
            <AiOutlineArrowRight className="text-light_blue ml-auto w-[30px] h-[20px] font-bold" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <p className="py-1.5 pl-2.5 pr-7 text-[16px] font-[500] rounded-tr-[40px] bg-blue">
              Recent
            </p>
            <p className=" text-[16px] font-[500]">2022</p>
          </div>
          <Image
            src={think}
            className=" "
            alt="lang"
            width={170}
            height={65}
            priority
          />
          <div className="flex items-center">
            <div className="mt-4">
              <p className="font-[500]">888valhalla</p>
              <p className="text-t_blue text-[15px] font-[500]">cardona</p>
            </div>
            <AiOutlineArrowRight className="text-light_blue ml-auto w-[30px] h-[20px] font-bold" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <p className="py-1.5 pl-2.5 pr-7 text-[16px] font-[500] rounded-tr-[40px] bg-blue">
              Recent
            </p>
            <p className=" text-[16px] font-[500]">2022</p>
          </div>
          <Image
            src={inge}
            className=" "
            alt="lang"
            width={170}
            height={65}
            priority
          />
          <div className="flex items-center">
            <div className="mt-4">
              <p className="font-[500]">888valhalla</p>
              <p className="text-t_blue text-[15px] font-[500]">cardona</p>
            </div>
            <AiOutlineArrowRight className="text-light_blue ml-auto w-[30px] h-[20px] font-bold" />
          </div>
        </div>
      </div>
      
    </div>
  );
};
