import Image from "next/image";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const images = [
  { path: "/gallery/farariPathak_img.jpg", prop: "w-[32.91%] h-[53.88%] top-0 left-0", title: "" },
  { path: "/gallery/foundMissingPerson_img.jpg", prop: "w-[28.66%] h-[60.36%] top-0 left-[37%]", title: "" },
  { path: "/gallery/maharashtraDay.jpg", prop: "w-[30.57%] h-[41.56%] top-0 right-0", title: "" },
  { path: "/gallery/missingbag.jpg", prop: "w-[32.91%] h-[42.08%] bottom-0 left-0", title: "" },
  { path: "/gallery/retirement_img.jpg", prop: "w-[28.66%] h-[34.44%] bottom-0 left-[37%]", title: "" },
  { path: "/gallery/wareHelmet.jpg", prop: "w-[30.57%] h-[53.88%] bottom-0 right-0", title: "" },
  { path: "/gallery/workersDay.jpg", prop: "w-[32.91%] h-[53.88%] top-0 left-0", title: "" },
  { path: "/gallery/yoga_img.jpg", prop: "w-[28.66%] h-[60.36%] top-0 left-[37%]", title: "" },
  { path: "/gal_img9.png", prop: "w-[30.57%] h-[41.56%] top-0 right-0", title: "" },
  { path: "/gal_img10.png", prop: "w-[32.91%] h-[42.08%] bottom-0 left-0", title: "" },
  { path: "/gal_img11.png", prop: "w-[28.66%] h-[34.44%] bottom-0 left-[37%]", title: "" },
  { path: "/gal_img12.png", prop: "w-[30.57%] h-[53.88%] bottom-0 right-0", title: "" },
  // {path: "/gal_img1.png"},
  // {path: "/gal_img2.png"},
  // {path:"/gal_img3.png"},
  // {path: "/gal_img4.png"},
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setSelectedImage(null);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setSelectedImage(null);
  };

  const handlePrevClick1 = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick1 = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  const displayedImages = images.slice(startIndex, endIndex);

  return (
    <>
      <div className="">
        <div className="text-center " id="gallery">
          <h1 className="mt-12 mb-8 text-3xl font-bold text-black">
            Gallery
          </h1>
        </div>
        <div className=" h-screen">
          <div className="mt-5 w-full h-[70%] flex justify-center">
            <div className="relative w-[70%] h-[95%] rounded-lg flex items-center justify-center">
              {displayedImages.map((src, index) => (
                <><div key={src} className={`absolute ${src.prop} `}>
                  <Image
                    src={src.path}
                    alt={`Image ${index + 1}`}
                    // layout="responsive"
                    height="200"
                    width="200"
                    className="w-full h-full object-cover rounded-lg"
                    onClick={() => handleImageClick(index + startIndex)} />
                </div><div className="md:absolute bg-black bg-opacity-95 top-0 left-0 flex justify-center items-center h-full w-full md:opacity-0 hover:opacity-100 transition-all duration-500">
                    <div className="md:absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className=" text-white px-1 text-center">
                        {displayedImages.title}
                      </div>
                    </div>
                  </div></>
              ))}
              {selectedImage !== null && (
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                  <div className="absolute inset-0 w-full bg-gray-900 opacity-75"></div>
                  <div className="relative w-[70%]">
                    <img
                      src={images[selectedImage].path}
                      alt={`Image ${selectedImage + 1}`}
                      layout="responsive"
                      className="h-[50%] w-full max-w-[70%]"

                    />
                    <button
                      className="absolute top-0 bottom-0 left-0 w-1/2 bg-transparent"
                      onClick={handlePrevClick1}
                    ></button>
                    <button
                      className="absolute top-0 bottom-0 right-0 w-1/2 bg-transparent"
                      onClick={handleNextClick1}
                    ></button>
                    <button
                      className="absolute top-0 right-0 p-2 mt-4 mr-4 text-white bg-gray-800 border border-white rounded-full"
                      onClick={() => setSelectedImage(null)}
                    >
                      <span className="font-bold">X</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 text-white  bg-slate-400 w-[65px] h-[56px]"
              onClick={handlePrevClick}
            >
              <FaArrowLeftLong size={35} />
            </button>
            <button
              className=" py-2 text-white bg-[#15233E] w-[113px] h-[56px]"
              onClick={handleNextClick}
            >
              <div className="flex justify-center"><FaArrowRightLong size={40} /></div>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center w-full h-[800px] mt-32">
          <div className="relative w-[70%] h-[55%] rounded-lg flex items-center justify-center">
            {images.map((image, i) => (
            <div className={`absolute  rounded-lg ${image.prop} `}>
              <img className="object-cover h-full w-full" src={image.path} alt={`Image ${i + 1}`}/>
            </div>     
            ))}     
          </div>
      </div> */}
    </>
  );
};

export default Gallery;
