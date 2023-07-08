import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [aboutUsToggle, setaboutUsToggle] = useState(false)
  const [reportUsToggle, setreportUsToggle] = useState(false)
  const [SpecialUnits1Toggle, setSpecialUnits1Toggle] = useState(false)
  const [CitizenCornerToggle, setCitizenCornerToggle] = useState(false)
  const [PoliceCornerToggle, setPoliceCornerToggle] = useState(false)
  const [ContactUsToggle, setContactUsToggle] = useState(false)
  const [selectedOption, setSelectedOption] = useState("En");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const aboutUs = ["Our mission", "Hall of Fame", "Responsibilities", "Hierarchy", "Organizational Structure", "Navi Mumbai Police Map", "History", "Initiatives", "Gallery", "Martyrs"]
  const ReportUs = ["Online Complaint", "Tenant Information", "Lost/found", "Inform Us/Feedback"]
  const SpecialUnits1 = ["Crime Branch", "Economic Offense Wing", "Traffic Branch", "Police Surgeon", "Motor Transport Unit", "Greater Mumbai Police Band"]
  const SpecialUnits2 = ["Local Armed Police", "Quick Response team", "Riot Control Police", "Modemized Control Room", "Protection & Security", "Special Branch"]
  const SpecialUnits3 = ["Cyber Crime", "Anti Narcotic Cell", "Crime against Women Unit", "Juvenile Aid Protection Unit(JAPU)", "Anti Human Trafficking Unit", "Crime Detection Unit"]
  const CitizenCorner = ["Search & View Public FIR", "Filming/Shooting Application", "Police Clearance Service", "Loudspeaker Permission", "Accident Compensation", "Right to Information(RTI)", "Your Contribution", "Passport Status"]
  const CitizenCorner2 = ["GRAS Payment", "Useful Websites", "Licensing Unit", "Citizen Wall", "Safety Tips", "DCP Visits", "Tenders", "FAQs"]
  const PoliceCorner = ["Police Staff Council Meeting", "Police Foundation", "Welfare Activities", "Media Coverage", "Press Release", "Crime Review", "Miscellaneous", "Police Recruitment", "Good Work"]
  const ContactUs = ["Police Station Incharge", "Divisional ACP's", "Senior Police Officers", "Emergency Contacts"]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-20 -mt-10 flex items-center w-full justify-between  px-2 bg-white">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[50px] h-[50px] mr-2"
        />
        <h1 className="mx-1 text-[1.4em]  md:w-auto font-semibold leading-[36px] text-sky-900">
          Navi Mumbai Police
        </h1>
      </div>

      <div className="flex items-center justify-around  md:mt-0">
        <div className="justify-around hidden md:flex">
          <ul className="flex flex-col mt-[2px] text-[1em] w-11/12 mr-5 space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-sky-900">
            <li className="inline-flex font-medium leading-[28px] cursor-pointer">
              Home
            </li>
            <li onMouseEnter={() => setaboutUsToggle(true)} onMouseLeave={() => setaboutUsToggle(false)} className={`relative ${aboutUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              About Us
              {aboutUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-sky-900 px-6 py-2 border-[1px] bg-white rounded-lg">
                    {aboutUs.map((about, i) => (
                      <li className="hover:text-[#E7581A] w-48" key={i}>{about}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setreportUsToggle(true)} onMouseLeave={() => setreportUsToggle(false)} className={`relative ${reportUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Report Us
              {reportUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-sky-900 px-6 py-2 border-[1px] bg-white rounded-lg">
                    {ReportUs.map((report, i) => (
                      <li className="hover:text-[#E7581A] w-48" key={i}>{report}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setSpecialUnits1Toggle(true)} onMouseLeave={() => setSpecialUnits1Toggle(false)} className={`relative ${SpecialUnits1Toggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Special Units
              {SpecialUnits1Toggle &&
                <div className="absolute z-50 -left-80">
                  <ul className="text-sky-900 px-6 py-2 flex border-[1px] bg-white rounded-lg">
                    <div>
                      {SpecialUnits1.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits2.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits3.map((special, i) => (
                        <li className="w-72 hover:text-[#E7581A]" key={i}>{special}</li>
                      ))}
                    </div>

                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setCitizenCornerToggle(true)} onMouseLeave={() => setCitizenCornerToggle(false)} className={`relative ${CitizenCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Citizen Corner
              {CitizenCornerToggle &&
                <div className="absolute z-50 -left-36">
                  <ul className="text-sky-900 px-6 py-2 flex border-[1px] bg-white rounded-lg">
                    <div>
                      {CitizenCorner.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special}</li>
                      ))}
                    </div>
                    <div>
                      {CitizenCorner2.map((special, i) => (
                        <li className="w-32 hover:text-[#E7581A]" key={i}>{special}</li>
                      ))}
                    </div>
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setPoliceCornerToggle(true)} onMouseLeave={() => setPoliceCornerToggle(false)} className={`relative ${PoliceCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Police Corner
              {PoliceCornerToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-sky-900 px-6 py-2 border-[1px] bg-white rounded-lg">
                    {PoliceCorner.map((report, i) => (
                      <li className="hover:text-[#E7581A] w-56" key={i}>{report}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>              <li onMouseEnter={() => setContactUsToggle(true)} onMouseLeave={() => setContactUsToggle(false)} className={`relative ${ContactUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Contact Us
              {ContactUsToggle &&
                <div className="absolute z-50 -left-28">
                  <ul className="text-sky-900 px-6 py-2 border-[1px] bg-white rounded-lg">
                    {ContactUs.map((report, i) => (
                      <li className="hover:text-[#E7581A] w-44" key={i}>{report}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
          </ul>
          <div className="flex items-center mx-2 w-1/12  text-[#E7581A]">
            {/* <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A+
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A-
              </div> */}
            <div className="relative flex">
              <button
                className="flex items-center space-x-1 cursor-pointer focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-black-500">{selectedOption}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-black transition-transform ${isDropdownOpen ? "rotate-180" : ""
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
              {isDropdownOpen && (
                <div className="absolute py-2 mt-2 bg-white rounded shadow -left-2">
                  <ul className="text-black">
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-white"
                      onClick={() => handleOptionChange("En")}
                    >
                      En
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-white"
                      onClick={() => handleOptionChange("Mr")}
                    >
                      Mr
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="">
              <BiSearch size={32} className="text-sky-900" />
            </div>
          </div>
        </div>
        <div className="relative flex md:hidden text-[#E7581A]">
          {/* <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A+
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A-
            </div> */}
          <button
            className="flex items-center space-x-1 cursor-pointer focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-black-500">{selectedOption}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-black transition-transform ${isDropdownOpen ? "rotate-180" : ""
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
          {isDropdownOpen && (
            <div className="absolute py-2 mt-2 bg-white rounded shadow -left-2 -top-2">
              <ul className="text-black">
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-white"
                  onClick={() => handleOptionChange("En")}
                >
                  En
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-white"
                  onClick={() => handleOptionChange("Mr")}
                >
                  Mr
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* for smaller devices */}
        <div className="md:hidden">
          <button
            className="flex items-center justify-center"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#E7581A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#E7581A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute top-[40] left-0 right-0 bg-white border-b border-gray-200">
              <ul className="text-center text-sky-900">
                <li className="px-4 py-2 cursor-pointer hover:bg-white">
                  Home
                </li>
                <li onClick={() => setaboutUsToggle(true)} className="px-4 py-2 cursor-pointer hover:bg-white">
                  About Us
                  {aboutUsToggle &&
                    <div className="absolute z-50 left-[20%]">
                      <ul className="text-sky-900 px-6 py-2 border-[1px] bg-white rounded-lg">
                      <div className="absolute right-5 text-[#E7581A] font-extrabold" onClick={() => setaboutUsToggle(false)}>X</div>
                        {aboutUs.map((about, i) => (
                          <><li className="hover:text-[#E7581A] w-48" key={i}>{about}</li></>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-white">
                  Report Us
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-white">
                  Special Units
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-white">
                  Citizen Corner
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-white">
                  Police Corner
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-white">
                  Contact Us
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
