import Image from "next/image";
import { useState } from "react";

const images = [
  "/gal_img1.png",
  "/gal_img2.png",
  "/gal_img3.png",
  "/gal_img4.png",
  "/gal_img5.png",
  "/gal_img6.png",
  "/gal_img7.jpeg",
  "/gal_img8.png",
  "/gal_img9.png",
  "/gal_img10.png",
  "/gal_img11.png",
  "/gal_img12.png",
  "/gal_img13.jpeg",
  "/gal_img5.png",
  "/gal_img6.png",
  "/gal_img7.jpeg",
  "/gal_img8.png",
  "/gal_img9.png",
  "/gal_img10.png",
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
      <div className="flex justify-center ">
      <div className="mt-5 md:w-6/12">
        <div className="max-w-5xl gap-5 p-5 pb-10 mx-auto mb-10 space-y-5 columns-3">
          {displayedImages.map((src, index) => (
            <div key={src} className="relative">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                // layout="responsive"
                height="200"
                width="200"
                onClick={() => handleImageClick(index + startIndex)}
              />
            </div>
          ))}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-10 flex items-center justify-center">
              <div className="absolute inset-0 w-full bg-gray-900 opacity-75"></div>
              <div className="relative w-[70%]">
                <Image
                  src={images[selectedImage]}
                  alt={`Image ${selectedImage + 1}`}
                  // layout="responsive"
                  className="h-[50%] w-full max-w-[70%]"
                  sizes="70vw"
                  height="500"
                  width="500"
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
        <div className="flex justify-center">
          <button
            className="px-4 py-2 mx-2 font-semibold text-white bg-blue-500 rounded-md"
            onClick={handlePrevClick}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 mx-2 font-semibold text-white bg-blue-500 rounded-md"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
      </div>
        </div>
    </>
  );
};

export default Gallery;
