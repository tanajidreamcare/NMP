"use client";
import Image from "next/image";

export default function CPMessage() {

  return (
    <>
      <div className="py-5 md:py-24 bg-sky-950">
        <div className="justify-center w-full h-full md:flex">
          <div className="flex items-center justify-center">
            <div className="text-[24px] font-extrabold leading-9 text-white md:hidden">Meet The Chief</div>
          </div>
          <div className=" md:w-full flex justify-center">
            <div className="items-center md:w-[85%] justify-center md:flex md:items-right md:justify-center">
              <div className="w-full flex justify-center md:w-4/12">
                <img
                  src="/CP_NMP_img.png"
             
                  // layout="responsive"
                  className="object-cover w-[60%] md:w-full"
                  alt="Commissioner of Police Navi Mumbai"
                />
              </div>
              <div className="mx-10 md:w-8/12">


                  <div className="hidden text-[40px] text-left font-extrabold leading-9 text-white sm:block">Meet The Chief</div>


                  <h1 className="text-white mt-3 md:text-lg">Namaskar Navi Mumbaikars.!</h1>

                  <h1 className="text-sm mt-3 leading-6 text-justify text-white md:text-lg">
                    Our vibrant city, known for its thriving economy and diverse communities,
                    is home to conscientious citizens who actively contribute to the governance
                    and well-being of our society. As the head of the Navi Mumbai Police Force,
                    I take immense pride in shouldering the responsibility of ensuring the
                    impartial and firm enforcement of law and order. Our primary aim is to foster
                    a secure and fear-free environment that nurtures the growth and progress of
                    our beautiful city.
                    <br />
                    <br />
                    Navi Mumbai Police is committed to ensuring safety
                    and well-being. We prevent, detect, and deter crime through frontline
                    policing, community engagement, and advanced technology. Visit our website
                    for valuable resources. Together, let's build a secure Navi Mumbai, resolving
                    grievances and problems, aligned with Maharashtra
                    Police's motto: “SADRAKSHANAY KHALNIGRAHANAY”.
                  </h1>

                  <h1 className="text-lg mt-3 text-white md:text-2xl">
                    Jai Hind.!
                    <br />
                    Commissionar of Police, Navi Mumbai
                  </h1>


              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
