import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const images = [
    "/gal_img14.png",
    "/gal_img2.png",
    "/gal_img3.png",
    "/gal_img4.png",
    "/gal_img5.png",
  ];

  return (
    <div className="flex relative flex-col items-center justify-center h-screen overflow-hidden ">
      {images.map((image, index) => (
        <div
          key={index}
          className={` h-screen w-full bg-cover bg-center absolute top-[55px] left-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="z-10 bg-[#15233EAD] bg-opacity-[68%] w-[7%] opacity-50 h-screen ">
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
                <ul className="space-y-4 z-30 ">
                  <li className="border-b-4 cursor-pointer text-white  ">
                    <div className="flex justify-center">
                      <Image
                        src="/emergency_img.png"
                        alt="Emergency Help"
                        className="hover:filter w-[36px] h-[32px] hover:brightness-75"
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
                        className="hover:filter w-[36px] h-[32px] hover:brightness-75"
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
                        className="hover:filter w-[36px] h-[32px] hover:brightness-75"
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
                        className="hover:filter w-[36px] h-[32px] hover:brightness-75"
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
                        className="hover:filter w-[36px] h-[32px] hover:brightness-75"
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

          <div className="w-full absolute bottom-40 left-[5%] flex justify-center">
          <div className=" w-[70%]  z-10 flex items-center justify-center ">
            <div className="flex w-full  border-1">
              <div className="w-[172px] h-[48px]  text-base bg-orange-600 rounded-l-full font-extrabold leading-7 text-center align-middle">
                <h5 className="flex items-center justify-center h-full">Headline</h5>
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
      ))}
    </div>
  );
};

export default Carousel;
