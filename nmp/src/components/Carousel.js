import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
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
    <div className="flex relative flex-col items-center w-full justify-center  overflow-hidden ">


      <div className="container relative h-full w-full border-b-2 mt-10 border-black">

        <iframe className="rep" width="560" height="315" src="https://www.youtube-nocookie.com/embed/EoYWwSalaJ4?autoplay=1&loop=1&playlist=EoYWwSalaJ4&mute=1&controls=0&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <BackgroundVideo /> */}

        <div className="z-10 bg-[#15233EAD] bg-opacity-[68%] w-[7%] opacity- h-screen ">
          <div className="flex">
            <Image
              src="/call_img.png"
              alt="hb"
              width={60}
              height={60}
              className="absolute w-16 h-16 cursor-pointer right-16 top-16"
            />
          </div>
          <div className="flex justify-center">
            <div className="z-10 flex items-center justify-center py-6 bg-transparent">
              <ul className="space-y-2 z-30 ">
                <li className="border-b-4 cursor-pointer text-white  ">
                  <div className="flex justify-center">
                    <Image
                      src="/emergency_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815] ">
                    Emergency
                  </h1>
                </li>
                <li className="border-b-4 cursor-pointer text-white">
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
                    Traffic branch
                  </h1>
                </li>

                <li className="border-b-4 cursor-pointer text-white">
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
                    Passport Branch
                  </h1>
                </li>

                <li className="border-b-4 cursor-pointer text-white">
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
                    Crime Branch
                  </h1>
                </li>

                <li className="border-b-4 cursor-pointer text-white ">
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
                    Citizen Portal
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          {/* <div>Headline</div> */}
        </div>

        <div className="absolute top-[60%] left-[42%] w-[25%] bg-white border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
          <button onClick={toggleDropdown} className="dropdown-toggle text-[#E7581A] flex justify-between w-full">
            <span>Nearest Police Statioin</span> 
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
            <ul className="dropdown-menu text-[#E7581A]">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>

        <div className="w-full absolute bottom-20 left-[5%] flex justify-center">
          <div className=" w-[70%]  z-10 flex items-center justify-center ">
            <div className="flex w-full  border-1">
              <div className="w-[172px] h-[48px]  text-base bg-orange-600 rounded-l-full font-extrabold leading-7 text-center align-middle">
                <h5 className="flex items-center text-white justify-center h-full">Headline</h5>
              </div>
              <div className="flex items-center w-full justify-center text-center text-black  h-50 bg-white rounded-r-full">
                <marquee>
                  <p className="text-base font-medium">Headline 1, headline 2, headline 3</p>
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
