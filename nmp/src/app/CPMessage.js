"use client";
import Image from "next/image";

export default function CPMessage() {
  
  return (
    <>
    <div className="py-24 bg-sky-950">
      <div className="flex justify-center w-full">
      <div className="w-4/12 mx-10">
        <div className="flex justify-end items-right">
          <div>
            <Image
            src="/CP_NMP_img.png"
            width={300}
            height={300}
            layout="responsive"
            alt="Commissioner of Police Navi Mumbai"
            />
          </div>
        </div>
      </div>

      <div className="w-4/12 mx-10">
        <div className="text-left">
          <div className="text-4xl font-extrabold leading-9 text-white">Meet The Chief</div>
          <br/>
          <br/>
          <div className="text-lg text-white">Namaskar Navi Mumbaikars.!</div>
          <br/>
          <div className="text-sm leading-5 text-white">
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
          <div className="text-lg text-white">
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
