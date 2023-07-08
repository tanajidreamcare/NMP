import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation} from "react-i18next";

const Carousel = () => {

  const { t } = useTranslation();
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setisDropDownOpen(!isDropDownOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="relative w-full  p-0 ">


      <div className="relative md:block pb-[50%] md:pb-0 w-full mt-10" >

        <iframe className="hidden md:block rep " width="560" height="315" src="https://www.youtube-nocookie.com/embed/EoYWwSalaJ4?autoplay=1&loop=1&playlist=EoYWwSalaJ4&mute=1&controls=0&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="md:hidden rep " width="560" height="315" src="https://www.youtube.com/embed/ixomwj9LP2s?autoplay=1&mute=1&loop=1&playlist=ixomwj9LP2s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div className="z-10 md:bg-opacity-[68%] md:w-[7%] w-[25%] opacity- h-screen ">
          <div className="flex">
            <Image
              src="/call_img.png"
              alt="hb"
              width={60}
              height={60}
              className="absolute w-16 h-16 cursor-pointer bottom-[45%] right-[5%] md:right-16 md:top-16"
            />
          </div>
          <div className="flex bg-[#15233EAD] md:h-full  justify-center ">
            <div className="z-10 flex  justify-center py-6 bg-transparent">
              <ul className="space-y-2 z-20 mt-8">
                <li className="border-b-4 cursor-pointer text-white  ">
                  <div className="flex justify-center">
                    <Image
                      src="/emergency_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] mt-2 hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815] ">
                    {t('emergency')}
                  </h1>
                </li>
                <li className="text-white border-b-4 cursor-pointer">
                  <div className="flex justify-center">
                    <Image
                      src="/traffic_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full  mb-4 text-center hover:text-[#EB1815]">
                    {t('traffic_branch')}
                  </h1>
                </li>

                <li className="text-white border-b-4 cursor-pointer">
                  <div className="flex justify-center">
                    <Image
                      src="/passport_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[34px] hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815]">
                    {t('passport_status')}
                  </h1>
                </li>

                <li className="text-white border-b-4 cursor-pointer">
                  <div className="flex justify-center">
                    <Image
                      src="/crime_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815]">
                    {t('crime_branch')}
                  </h1>
                </li>

                <li className=" cursor-pointer text-white ">
                  <div className="flex justify-center">
                    <Image
                      src="/citizen_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full mb-4 text-center min-w-fit hover:text-[#EB1815]">
                    {t('citizen_corner')}
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          {/* <div>Headline</div> */}
        </div>

        <div className="absolute top-[2%] md:top-[55%] left-[25%] md:left-[40%] w-[60%] md:w-[25%] bg-white border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
          <button onClick={toggleDropdown} className="dropdown-toggle text-[#E7581A] flex justify-between w-full">
            <span>{t('select_police_station')}</span> 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-[#E7581A] transition-transform ${toggleDropdown ? "" : "rotate-180"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                 <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
          </button>
          {isDropDownOpen && (
            <ul cclassName="cursor-pointer hover:text-[#E7581A]"lassName="dropdown-menu text-[#15233E] ">
              <li className="cursor-pointer hover:text-[#E7581A]">{t('apmc')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('cbd_belapur')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('kalamboli')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('kamothe')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('khandeshwar')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('kharghar')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('kopar_khairane')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('mora_sagari')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('nerul')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('nhava_sheva')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('nri')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('panvel')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('panvel_taluka')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('rabale')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('rabale_midc')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('sanpada')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('taloja')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('turbhe')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('uran')}</li>
              <li className="cursor-pointer hover:text-[#E7581A]">{t('washi')}</li>
            </ul>
          )}
        </div>

        <div className=" absolute bottom-[35%] md:bottom-20 left-[5%] w-[90%] flex justify-center">
          <div className=" md:w-[70%]  z-10 flex items-center justify-center ">
            <div className="flex w-full  border-1">
              <div className="w-[172px] h-[48px] px-3 text-base bg-orange-600 rounded-l-full font-extrabold leading-7 text-center align-middle">
                <h5 className="flex items-center text-white justify-center h-full">{t('headline')}</h5>
              </div>
              <div className="flex items-center justify-center w-full text-center text-black bg-white rounded-r-full h-50">
                <marquee>
                  <p className="text-base font-medium">{t('headline1')} | {t('headline2')} | {t('headline3')} | {t('headline4')}</p>
                </marquee>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
