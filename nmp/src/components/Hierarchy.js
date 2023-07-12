import React from "react";
import Image from "next/image";

const Hierarchy = () => {
  const table = [
    {
      designation: "Commissioner of Police ",
      shortForm: " C.P.",
      rank: "Director General of Police/Additional Director General of Police ",
      img: "/cp.png",
    },

    {
      designation: "Joint Commissioner of Police ",
      shortForm: "Jt. C.P. ",
      rank: "Special Inspector General of Police ",
      img: "/jcp.png",
    },
    {
      designation: "Additional Commissioner of Police ",
      shortForm: "Addl. C.P. ",
      rank: "Deputy Inspector General of Police ",
      img: "/addcp.png",
    },
    {
      designation: "Deputy Commissioner of Police ",
      shortForm: "D.C.P. ",
      rank: " Superintendent of Police (Selection Grade)",
      img: "/dcp1.png",
    },
    {
      designation: "Deputy Commissioner of Police ",
      shortForm: "D.C.P. ",
      rank: "Superintendent of Police (Junior Management Grade) ",
      img: "/dcp2.png",
    },
    {
      designation: "Deputy Commissioner of Police ",
      shortForm: "D.C.P. ",
      rank: " Addl. Superintendent of Police (Less than 10 years of service)",
      img: "/dcp3.png",
    },
    {
      designation: "Deputy Commissioner of Police ",
      shortForm: "D.C.P. ",
      rank: "Addl. Superintendent of Police (State Police Service) ",
      img: "/dcp3.png",
    },
    {
      designation: "Assistant Commissioner of Police ",
      shortForm: "A.C.P. ",
      rank: "Deputy Superintendent of Police ",
      img: "/acp.png",
    },
    {
      designation: "Sr Police Inspector / Police Inspector ",
      shortForm: "Sr. P.I. / P.I. ",
      rank: " Police Inspector",
      img: "/srPi.png",
    },
    {
      designation: "Assistant Police Inspector ",
      shortForm: "A.P.I. ",
      rank: " 	Assistant Police Inspector",
      img: "/api.png",
    },
    {
      designation: "Police Sub Inspector ",
      shortForm: "P.S.I. ",
      rank: "Police Sub Inspector ",
      img: "/psi.png",
    },
    {
      designation: "Assistant Police Sub Inspector ",
      shortForm: " A.S.I.",
      rank: "Assistant Police Sub Inspector ",
      img: "/asi.png",
    },
    {
      designation: "Head Constable ",
      shortForm: "H.C. ",
      rank: " Head Constable",
      img: "/headconst.png",
    },
    {
      designation: "Police Naik ",
      shortForm: "P.N. ",
      rank: "Police Naik ",
      img: "/pn.png",
    },
    {
      designation: "Police Constable ",
      shortForm: " P.C.",
      rank: " Police Constable",
      img: "/constable.png",
    },
  ];
  return (
    <div>
      <div className="h-full bg-[#0C162B]">
        <div className="pt-10 text-5xl font-bold leading-9 text-center text-white">
          <h1>Hierarchy</h1>
        </div>
        <table className="flex items-center justify-center pt-10 text-white ">
          <thead className="flex items-center justify-center ">
            <div className="mx-5">
              <tr className="mx-5 text-base text-center bg-[#15233E]">
                <th
                  scope="col"
                  className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
                >
                  Designation
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
                >
                  Short Form
                </th>
                <th
                  scope="col"
                  className="hidden px-6 py-3 font-medium tracking-wider text-center text-white uppercase border sm:table-cell"
                >
                  Rank
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
                >
                  Insignia
                </th>
              </tr>
              {table.map((hierarchy) => (
                <tr className="bg-[#15233E]">
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-medium text-left text-white align-middle border"
                  >
                    {hierarchy.designation}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-medium text-left text-white align-middle border"
                  >
                    {hierarchy.shortForm}
                  </th>
                  <th
                    scope="col"
                    className="hidden px-6 py-3 text-sm font-medium text-left text-white align-middle border md:table-cell"
                  >
                    {hierarchy.rank}
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-sm font-medium text-left text-white align-middle border"
                  >
                    <Image width={150} height={80} src={hierarchy.img}></Image>
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

export default Hierarchy;