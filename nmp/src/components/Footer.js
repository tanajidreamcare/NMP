import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTranslation} from "react-i18next";

function Footer() {

  const { t } = useTranslation();
  
  const marqueeComp = [
    { image1: "/digitalIndia_img.png" },
    { image2: "/G20_img.png" },
    { image3: "/gal_img11.png" },
    { image4: "/mahadbt_img.png" },
    { image5: "/startupIndia_img.png" },
  ];
  return (
    <div className="-mt-28 ">
      <div className="mt-0">
        <div className="w-full">
        <img className="w-full "  src={'/footerBanner.png'} />
        </div>
        <div className="bg-[#DDD] bg-opacity-80">
        <Marquee>
          {marqueeComp.map((images, index) => (
            <div key={index} className="flex items-center justify-center p-0 mx-10">
              <img  className="p-2"  src={Object.values(images)[0]} />
            </div>
          ))}
        </Marquee>
        </div>
      </div>
      <div className="bg-[#15233E] w-full p-6 text-white hidden sm:block">
        <div className="w-full">
          <div className="justify-center md:flex text-[12px]">
            <div className="cursor-pointer me-4 ">Emergency: 112</div>
            <div className="cursor-pointer me-4">
              Traffic Helpline : 7738393839
            </div>
            <div className="cursor-pointer me-4">
              Senior Citizen Helpline : 1090
            </div>
            <div className="cursor-pointer me-4">Coastal Helpline : 1093</div>
            <div className="cursor-pointer">Women Helpline : 103</div>
          </div>
        </div>
        <div className="justify-start md:flex md:justify-between md:ms-16">
          <div>
            <div className="mt-6 mb-4 underline md:text-lg underline-offset-8 sm:font-semibold">
              NAVI MUMBAI POLICE
            </div>
            <div className="justify-start md:flex md:justify-end text-[12px]">
              <div>
                <div className="me-[48px] cursor-pointer">Press Release</div>
                <div className="me-[48px] cursor-pointer">FAQ</div>
                <div className="me-[48px] cursor-pointer">Martyrs</div>
                <div className="me-[48px] cursor-pointer">Site Map</div>
              </div>
              <div>
                <div className="me-[48px] cursor-pointer">
                  Senior Police Officers
                </div>
                <div className="me-[48px] cursor-pointer">History</div>
                <div className="me-[48px] cursor-pointer">
                  Police Recruitment{" "}
                </div>
                <div className="me-[48px] cursor-pointer">Disclaimer</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6 mb-4 underline md:text-lg underline-offset-8 sm:font-semibold">
              INFORMATION & SERVICES
            </div>
            <div className="md:flex justify-end text-[12px] ">
              <div>
                <div className="me-[48px] cursor-pointer">Safety Tips</div>
                <div className="me-[48px] cursor-pointer">Citizen Wall</div>
                <div className="me-[48px] cursor-pointer">Initiatives</div>
                <div className="me-[48px] cursor-pointer">Licensing Unit</div>
              </div>
              <div>
                <div className="me-[48px] cursor-pointer">Missing Persons</div>
                <div className="me-[48px] cursor-pointer">
                  Unidentified Dead Bodies
                </div>
                <div className="me-[48px] cursor-pointer">Useful websites </div>
                <div className="me-[48px] cursor-pointer">Emergency Contacts</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6 mb-4 md:text-lg underline underline-offset-8 sm:text-[12px] sm:font-semibold">
              QUICK LINKS
            </div>
            <div className="flex justify-start md:justify-end text-[12px]">
              <div>
                <div className="me-[48px] cursor-pointer">Tenders</div>
                <div className="me-[48px] cursor-pointer">Online Complaint</div>
                <div className="me-[48px] cursor-pointer">Lost / Found</div>
                <div className="me-[48px] cursor-pointer">
                  Right To Information
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-16 mt-6 md:flex md:justify-between">
          <div className="flex ">
            <div className="me-2">Follow Us</div>
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
        </div>
        <div className="mx-16 my-2">
          <hr />
        </div>
        <div className="w-full text-sm text-center sm-text-[10px]">
          <div>
            Copyright © 2023 Navi Mumbai Police | Developed By : Dreamcare
            Developers
          </div>
        </div>
      </div>

      {/* ----------Mobile Screen-------------- */}
      <div className="bg-[#15233E] w-full p-6 text-white md:hidden">

        <div className="flex justify-start">
          <div className="justify-start md:flex text-[12px]">
            <div className="cursor-pointer">Emergency: 112</div>
            <div className="cursor-pointer">
              Traffic Helpline : 7738393839
            </div>
            <div className="cursor-pointer">
              Senior Citizen Helpline : 1090
            </div>
            <div className="cursor-pointer">Coastal Helpline : 1093</div>
            <div className="cursor-pointer">Women Helpline : 103</div>
          </div>
          <div className="ms-5">
            <div className=" mb-4 underline underline-offset-8 text-[12px] sm:font-semibold">
              QUICK LINKS
            </div>
            <div className="flex justify-start md:justify-end text-[12px]">
              <div>
                <div className="cursor-pointer">Tenders</div>
                <div className="cursor-pointer">Online Complaint</div>
                <div className="cursor-pointer">Lost / Found</div>
                <div className="cursor-pointer">
                  Right To Information
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex items-center justify-center">
          <div>
            <div className="mt-6 mb-4 underline underline-offset-8 sm:font-semibold text-[12px]">
              NAVI MUMBAI POLICE
            </div>
            <div className="justify-start text-[12px]">
              <div>
                <div className="cursor-pointer">Press Release</div>
                <div className="me-[48px] cursor-pointer">FAQ</div>
                <div className="me-[48px] cursor-pointer">Martyrs</div>
                <div className="me-[48px] cursor-pointer">Site Map</div>
              </div>
              <div>
                <div className="me-[48px] cursor-pointer">
                  Senior Police Officers
                </div>
                <div className="me-[48px] cursor-pointer">History</div>
                <div className="me-[48px] cursor-pointer">
                  Police Recruitment{" "}
                </div>
                <div className="me-[48px] cursor-pointer">Disclaimer</div>
              </div>
            </div>
          </div>

          
          <div className="ms-7">
            <div className="mt-6 mb-4 underline underline-offset-8 sm:font-semibold text-[12px]">
              INFORMATION & SERVICES
            </div>
            <div className="md:flex justify-end text-[12px] ">
              <div>
                <div className="me-[48px] cursor-pointer">Safety Tips</div>
                <div className="me-[48px] cursor-pointer">Citizen Wall</div>
                <div className="me-[48px] cursor-pointer">Initiatives</div>
                <div className="me-[48px] cursor-pointer">Licensing Unit</div>
              </div>
              <div>
                <div className="me-[48px] cursor-pointer">Missing Persons</div>
                <div className="me-[48px] cursor-pointer">
                  Unidentified Dead Bodies
                </div>
                <div className="me-[48px] cursor-pointer">Useful websites </div>
                <div className="me-[48px] cursor-pointer">Emergency Contacts</div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="mx-16 mt-6 md:flex md:justify-between">
          <div className="flex ">
            <div className="me-2">Follow Us</div>
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
        </div>
        <div className="mx-16 my-2">
          <hr />
        </div>
        <div className="w-full text-sm text-center sm-text-[10px]">
          <div>
            Copyright © 2023 Navi Mumbai Police | Developed By : Dreamcare
            Developers
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
