import React from "react";
import Image from "next/image";
import { BsFiletypePdf } from "react-icons/bs";

const PressRelease = () => {
  const table = [
    {
      date: "15 Jun 2023 ",
      Title: " Press Note By Crime Branch Unit 2 Dtd 15.06.2023",

      PDF: "/pdf1.pdf",
    },
    {
        date: "02-Jun-2023 ",
        Title: " Press Note By Crime Branch Dtd 01.06.2023",
  
        PDF: "/pdf2.pdf",
      },
      {
        date: "10-May-2023 ",
        Title: " Press Note By Crime Branch Unit 3 Dtd 03.04.2023",
  
        PDF: "/pdf3.pdf",
      },
    //   {
    //     date: "10-May-2023",
    //     Title: " Press Note By Crime Branch Unit 3 Dtd 14.03.2023",
  
    //     PDF: "/pdf4.pdf",
    //   },
    //   {
    //     date: "10-May-2023 ",
    //     Title: " Press Note By Crime Branch EOW Unit 2 & AHTU Navi Mumbai Dtd 03.03.2023",
  
    //     PDF: "/pdf5.pdf",
    //   },
    //   {
    //     date: "10-May-2023 ",
    //     Title: " Press Note By Crime Branch Unit 2 Dtd 03.03.2023",
  
    //     PDF: "/pdf6.pdf",
    //   },
  ];
  return (
    <div>
      <div className="h-full bg-[#0C162B] ">
        <div className="pt-10 text-5xl font-bold leading-9 text-center text-white">
          <h1>Press Release</h1>
        </div>
        <table className="flex items-center justify-center pt-10 text-white ">
          <thead className="flex items-center justify-center ">
            <div className="mx-5">
              <tr className="mx-5 text-base text-center bg-[#15233E]">
                <th
                  scope="col"
                  className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
                >
                  Title
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
                >
                  Info
                </th>
              </tr>
              {table.map((hierarchy) => (
                <tr className="transition-transform duration-300 transform bg-[#15233E] hover:scale-105">
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-medium text-left text-white align-middle border"
                  >
                    {hierarchy.date}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-medium text-left text-white align-middle border"
                  >
                    {hierarchy.Title}
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-medium text-left text-white align-middle border"
                  >
                    
                    <span className="flex justify-center text-orange-700">
                     <a href={hierarchy.PDF} target="_blank">
                     <BsFiletypePdf size={30}  />
                     </a>
                    </span>
                  </th>
                </tr>
              ))}
            </div>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default PressRelease;