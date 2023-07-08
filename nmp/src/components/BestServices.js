"use client";
import Image from "next/image";
import { GrStatusUnknown } from "react-icons/gr";
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { LuNewspaper } from "react-icons/lu";
import { FaPassport, FaCarCrash } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillFileAdd } from "react-icons/ai";
import { GiDeadlyStrike } from "react-icons/gi";
import { TbUserSearch } from "react-icons/tb";
import { BsCheck2Square, BsQuestionSquare } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

export default function BestServices() {
  const [hoveredItem, setHoveredItem] = useState(null);


  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const servicesName1 = [
    {
      index: 1,
      name: "Police Recruitment",
      message: "Join the Force: Empower Communities, Serve with Pride!",
      icon: <GiPoliceOfficerHead size={35} style={{ color: "white" }} />,
    },
    {
      index: 2,
      name: "Press Release",
      message: "Strengthening Communities, Informing Press, Securing Trust",
      icon: <LuNewspaper size={35} />,
    },
    {
      index: 3,
      name: "Passport Status",
      message: "Stay Informed, Stay Confident: Track Your Passport Progress",
      icon: <FaPassport size={35} />,
    },
    {
      index: 4,
      name: "Laudspeaker Permission",
      message: "Amplifying Safety: Empowering Communities, Ensuring Peace",
      icon: <HiSpeakerphone size={35} />,
    },
    {
      index: 5,
      name: "Accident Compensation",
      message: "Comensation of Accident",
      icon: <AiFillFileAdd size={35} />,
    },
    {
      index: 6,
      name: "Unindentified Dead Bodies",
      message: "Un-identified dead boadies",
      icon: <GiDeadlyStrike size={35} />,
    },
  ];

  const servicesName2 = [
    {
      index: 7,
      name: "DCP Visits",
      message: "Bridging the Gap between Police and Society",
      icon: <TbUserSearch size={35} />,
    },
    {
      index: 8,
      name: "Police Clearance",
      message: "Seamless Clearance Solutions: Empowering Trust,Securing Lives",
      icon: <BsCheck2Square size={35} />,
    },
    {
      index: 9,
      name: "GRAS Payment",
      message: "Empowering with Hassle-Free Transactions",
      icon: <IoMdWallet size={35} />,
    },
    {
      index: 10,
      name: "Inform Us/ Feedback",
      message: "Our Voice, Our Strength: Empowering Together",
      icon: <BiMessageDetail size={35} />,
    },
    {
      index: 11,
      name: "Stolen & Unclaimed Vehicle",
      message: "Track, Trace, and Retrieve",
      icon: <FaCarCrash size={35} />,
    },
    {
      index: 12,
      name: "Missing Persons",
      message: "Reuniting Hearts,Restoring Hope",
      icon: <BsQuestionSquare size={35} />,
    },
  ];
  return (
    <>
      <div className="text-center md:mb-10  bg-green-50">
        <div className="mb-10 pt-10 md:text-3xl font-extrabold leading-9 sm:text-[24px]">
          Our Best Services
        </div>
        <div className="flex justify-center w-full p-3">
          <div className="flex justify-center md:w-3/12 w-[138px] lg:w-3/12 mx-2">
            <div>
              {servicesName1.map((serviceName) => (
                <div className="text-left md:justify-center" key={serviceName.index}>
                  <div  className={`flex  cursor-pointer justify-end`}>
                  <div onMouseEnter={() => handleMouseEnter(serviceName.index)} onMouseLeave={handleMouseLeave} className={`mt-1 my-14 md:mx-2 md:hidden md:my-0 ${hoveredItem === serviceName.index ? "bg-sky-900" : "bg-[#E7581A] "}`}>
                      <div  className="flex justify-center w-16 h-16 rounded-full cursor-pointer">
                        <div className={`flex items-center text-white`}>
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                    <div className="sm:text-left md:text-right">
                      <div className="text-[16px] md:text-[24px] lg:text-xl font-bold mt-2 ml-2 md:ml-0 md:mt-0">
                        {serviceName.name}
                      </div>
                      <div className="hidden text-xs font-normal sm:block md:text-sm">
                        {serviceName.message}
                      </div>
                    </div>
                    <div className="hidden mx-2 mt-1 md:block">
                      <div  className={`flex justify-center md:w-16 md:h-16 w-[50px] h-[50px] ${hoveredItem === serviceName.index ? "bg-sky-900" : "bg-[#E7581A] "}  rounded-full cursor-pointer`}>
                        <div className={`flex  items-center text-white`}>
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden my-4 font-extrabold md:block">
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-2 sm:w-1/12 md:w-2/12  flex justify-center ">
            <Image
              src="/bestService_img.png"
              width={200}
              height={50}
              className="hidden object-cover sm:block"
              alt="Picture of the Police Officer"
            />
          </div>
          <div className="flex justify-center md:w-3/12 w-[138px] lg:w-3/12 mx-2 ">
            <div>
              {servicesName2.map((serviceName) => (
                <div className="justify-center " key={serviceName.index}>
                  <div className="flex">
                    <div className="mx-2 mt-1 my-14 md:my-0">
                      <div className="flex justify-center w-16 h-16 bg-orange-500 rounded-full cursor-pointer hover:bg-sky-900">
                        <div className="flex items-center text-white">
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-[16px] md:text-xl font-bold mt-2 ml-2 md:ml-0 md:mt-0">
                        {serviceName.name}
                      </div>
                      <div className="hidden text-xs md:text-sm font-normal sm:block md:text-[16px]">
                        {serviceName.message}
                      </div>
                    </div>
                  </div>
                  <div className="hidden my-4 font-extrabold md:block">
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
