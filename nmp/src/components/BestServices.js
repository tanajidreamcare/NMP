"use client";
import Image from "next/image";
import { GrUserPolice, GrStatusUnknown } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { FaPassport, FaCarCrash } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillFileAdd } from "react-icons/ai";
import { GiDeadlyStrike } from "react-icons/gi";
import { TbUserSearch } from "react-icons/tb";
import { BsCheck2Square } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";

export default function BestServices() {
  const servicesName1 = [
    {
      index: 1,
      name:"Police Recruitment",
      message:"Join the Force: Empower Communities, Serve with Pride!",
      icon:<GrUserPolice size={35}/>,
    },
    {
      index: 2,
      name: "Press Release",
      message: "Strengthening Communities, Informing Press, Securing Trust",
      icon: <LuNewspaper size={35}/>,
    },
    {
      index: 3,
      name: "Passport Status",
      message: "Stay Informed, Stay Confident: Track Your Passport Progress",
      icon: <FaPassport size={35}/>,
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
      message: "Amplifying Safety: Empowering Communities, Ensuring Peace",
      icon: <AiFillFileAdd size={35} />,
    },
    {
      index: 6,
      name: "Unindentified Dead Bodies",
      message: "Amplifying Safety: Empowering Communities, Ensuring Peace",
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
      icon: <GrStatusUnknown size={35} />,
    },
  ];
  return (
    <>
      <div className="mt-40 mb-10 text-center">
        <div className="mb-10 text-3xl font-extrabold leading-9">
          Our Best Services
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-center w-4/12">
            <div>
              {servicesName1.map((serviceName) => (
                <div className="justify-center " key={serviceName.index}>
                  <div className="flex cursor-pointer">
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {serviceName.name}
                      </div>
                      <div className="text-xs font-normal">
                        {serviceName.message}
                      </div>
                    </div>
                    <div className="mx-2 mt-1">
                      <div className="flex justify-center w-16 h-16 bg-orange-500 rounded-full cursor-pointer hover:bg-sky-900">
                        <div className="flex items-center text-white">
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 font-extrabold">
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/12 mx-2 ">
            <Image
              src="/bestService_img.png"
              width={200}
              height={50}
              className="object-cover"
              alt="Picture of the Police Officer"
            />
          </div>
          <div className="flex justify-center w-4/12">
            <div>
              {servicesName2.map((serviceName) => (
                <div className="justify-center " key={serviceName.index}>
                  <div className="flex">
                  <div className="mx-2 mt-1">
                      <div className="flex justify-center w-16 h-16 bg-orange-500 rounded-full cursor-pointer hover:bg-sky-900 ">
                        <div className="flex items-center">
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      
                      <div className="text-2xl font-bold">
                        {serviceName.name}
                      </div>
                      <div className="text-xs font-normal">
                        {serviceName.message}
                      </div>
                    </div>
                    
                  </div>
                  <div className="my-4 font-extrabold">
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
