import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Footer() {
  const marqueeComp = [
    { image1: "/digitalIndia_img.png" },
    { image2: "/G20_img.png" },
    { image3: "/nmp_logo_img.png" },
    { image4: "/mahadbt_img.png" },
    { image5: "/startupIndia_img.png" },
  ];
  return (
    <div>
      <div className="mt-[-24%]">
        <div className="w-full">
        <Image className="w-full " width={100} height={80} src={'/gal_img10.png'} />
        </div>
        <div className="bg-[#DDD]">
        <Marquee>
          {marqueeComp.map((images, index) => (
            <div key={index} className="mx-10 bg-[#DDD] ">
              <Image sizes="100" className="bg-[#DDD]" height={80} width={100} src={Object.values(images)[0]} />
            </div>
          ))}
        </Marquee>
        </div>
      </div>
      <div className="bg-[#15233E] w-full p-6 text-white">
        <div className="flex justify-center ">
          <h1 className="me-4">Emergency: 112</h1>
          <h1 className="me-4">Traffic Helpline : 7738393839</h1>
          <h1 className="me-4">Senior Citizen Helpline : 1090</h1>
          <h1 className="me-4">Coastal Helpline : 1093</h1>
          <h1>Women Helpline : 103</h1>
        </div>
        <div className="flex justify-between ms-16">
          <div>
            <h1 className="mt-6 mb-4 text-lg underline underline-offset-8">
              NAVI MUMBAI POLICE
            </h1>
            <div className="flex justify-end">
              <div>
                <h1 className="me-[48px]">Press Release</h1>
                <h1 className="me-[48px]">FAQ</h1>
                <h1 className="me-[48px]">Martyrs</h1>
                <h1 className="me-[48px]">Site Map</h1>
              </div>
              <div>
                <h1 className="me-[48px]">Senior Police Officers</h1>
                <h1 className="me-[48px]">History</h1>
                <h1 className="me-[48px]">Police Recruitment </h1>
                <h1 className="me-[48px]">Disclaimer</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-6 mb-4 text-lg underline underline-offset-8">
              INFORMATION & SERVICES
            </h1>
            <div className="flex justify-end">
              <div>
                <h1 className="me-[48px]">Safety Tips</h1>
                <h1 className="me-[48px]">Citizen Wall</h1>
                <h1 className="me-[48px]">Initiatives</h1>
                <h1 className="me-[48px]">Licensing Unit</h1>
              </div>
              <div>
                <h1 className="me-[48px]">Missing Persons</h1>
                <h1 className="me-[48px]">Unidentified Dead Bodies</h1>
                <h1 className="me-[48px]">Useful websites </h1>
                <h1 className="me-[48px]">Emergency Contacts</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-6 mb-4 text-lg underline underline-offset-8">
              QUICK LINKS
            </h1>
            <div className="flex justify-end">
              <div>
                <h1 className="me-[48px]">Tenders</h1>
                <h1 className="me-[48px]">Online Complaint</h1>
                <h1 className="me-[48px]">Lost / Found</h1>
                <h1 className="me-[48px]">Right To Information</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-16 mt-6">
          <div className="flex ">
            <h1 className="me-2">Follow Us</h1>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <AiOutlineInstagram />
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <AiOutlineFacebook />
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <FiTwitter />
            </div>
          </div>
          <div className="flex ">
            <h1 className="me-2">Mobile App</h1>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <AiOutlineApple />
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <AiOutlineAndroid />
            </div>
          </div>
        </div>
        <div className="mx-16 my-2">
          <hr />
        </div>
        <div className="w-full text-sm text-center">
          <h1>
            Copyright © 2023 Navi Mumbai Police | Developed By : Dreamcare
            Developers
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;