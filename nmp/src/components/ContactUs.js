import React from "react";
import { CiLocationOn } from 'react-icons/ci';

const ContactUs = () => {
  return (
    <div className="">
      <div className="text-white bg-[#15233E]">
      <div className="">
        <div className="text-center ">
          <h1 className="text-5xl font-bold leading-9 ">Contact Us</h1>
          <h1 className="mt-4 text-3xl font-bold leading-10">Visiting hours for citizens on working days</h1>
        </div>
        <div className="flex justify-center text-center ">
          <div className="p-4 mx-10 mt-5 rounded-lg bg-[#0C162B]">
            <h1>Joint Commissioner of Police</h1>
            <h1>Time - 16:00 To 18:00 </h1>
          </div>
          <div className="p-4 mx-10 mt-5 rounded-lg bg-[#0C162B]">
            <h1>Commissioner of police</h1>
            <h1>Time - 16:00 To 18:00 </h1>
          </div>
        </div>
      </div>
      <div className="justify-center w-full mt-8 sm:flex px-62">
        <div className="flex justify-end hidden w-2/3 mx-10 md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30175.463471521143!2d72.99764171875024!3d19.02267671085052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snavi%20mumbai%20commissioner%20office!5e0!3m2!1sen!2sin!4v1689136991340!5m2!1sen!2sin"
            width="700"
            height="380"
            allowfullscreen=""
            className="p-2 bg-white border-2"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="md:w-2/3 ">
          <div className="p-3 text-center rounded-lg bg-[#0C162B] md:w-fit mx-5 md:mx-0">
            <h1>Emergency</h1>
            <h1>100 ,7738363836</h1>
            <h1>Whats app</h1>
            <h1>8424820686 ,8424820665</h1>
            <h1>Women Help Line </h1>
            <h1>103</h1>
          </div>
          <div className="items-center p-4 mt-5 rounded-lg bg-[#0C162B] md:w-fit mx-5 md:mx-0">
            <div className="flex justify-center">
            <span className=""><CiLocationOn size={30}/></span>
            </div>
            <h1>
              Commissioner of police,<br/> Navi Mumbai, Opposite RBI, <br/>Section No 10,
              CBD-<br/>Belapur,<br/> Navi Mumbai-400614
            </h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;