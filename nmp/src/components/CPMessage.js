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
      <div className="mx-10 md:w-4/12">
        <div className="flex items-center justify-center md:justify-end md:flex md:items-right">
          <div>
            <Image
            src="/CP_NMP_img.png"
            width={228}
            height={368}
            // layout="responsive"
            className="w-[228px] h-[368px] md:h-[570px] md:w-[361px]"
            alt="Commissioner of Police Navi Mumbai"
            />
          </div>
        </div>
      </div>

      <div className="mx-10 md:w-4/12">
        <div className="text-left">
          
          <div className="hidden text-[40px] font-extrabold leading-9 text-white sm:block">Meet The Chief</div>
            
          
          <br/>
          <br/>
          <div className="text-white md:text-lg">Namaskar Navi Mumbaikars.!</div>
          <br/>
          <div className="text-sm leading-6 text-justify text-white md:text-lg">
            Our vibrant city, known for its thriving economy and diverse communities, 
            is home to conscientious citizens who actively contribute to the governance
             and well-being of our society. As the head of the Navi Mumbai Police Force,
              I take immense pride in shouldering the responsibility of ensuring the
               impartial and firm enforcement of law and order. Our primary aim is to foster
                a secure and fear-free environment that nurtures the growth and progress of 
                our beautiful city.
                <br/>
                <br/>
                Navi Mumbai Police is committed to ensuring safety 
                and well-being. We prevent, detect, and deter crime through frontline 
                policing, community engagement, and advanced technology. Visit our website 
                for valuable resources. Together, let's build a secure Navi Mumbai, resolving 
                grievances and problems, aligned with Maharashtra 
                Police's motto: “SADRAKSHANAY KHALNIGRAHANAY”.
          </div>
          <br/>
          <div className="text-lg text-white md:text-2xl">
            Jai Hind.!
            <br/>
            Commissionar of Police, Navi Mumbai
          </div>

        </div>
      </div>
      </div>
    </div>
    </>
  );
}
