import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";
import i18n from "i18next";
import { useTranslation} from "react-i18next";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

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

  const [aboutUsMobile, setaboutUsMobile] = useState(false)
  const [reportUsMobile, setreportUsMobile] = useState(false)
  const [SpecialUnits1Mobile, setSpecialUnits1Mobile] = useState(false)
  const [CitizenCornerMobile, setCitizenCornerMobile] = useState(false)
  const [PoliceCornerMobile, setPoliceCornerMobile] = useState(false)
  const [ContactUsMobile, setContactUsMobile] = useState(false)

  const KEY = "selectedLanguage"
  const [currentLang, setCurrentLang] = useState(localStorage.getItem(KEY) || 'en');

  useEffect(()=>{
    i18n.changeLanguage(currentLang);
    localStorage.setItem(KEY, currentLang)
  },[currentLang])
  
  const { t } = useTranslation();
  
  const handleOptionChange = (option) => {
    setCurrentLang(option);
    setIsDropdownOpen(false);
  };
  const aboutUs = [ 
    { title: t('our_mission') },
  { title: t('hall_of_fame') },
  { title: t('responsibility')},
  { title: t('hierarchy') },
  { title: t('organizational_structure') },
  { title: t('navi_mumbai_police_map')},
  { title: t('history') },
  { title: t('initiative') },
  { title: t('gallery')},
  { title: t('martyrs') },
  ]

  const ReportUs = [
    { title: t('online_complaint') },
  { title: t('tenant_information') },
  { title: t('lost_found')},
  { title: t('feedback') },
  ]

  const SpecialUnits1 = [
    { title: t('crime_branch') },
  { title: t('economic_offence_wing') },
  { title: t('traffic_branch')},
  { title: t('police_sergeon') },
  { title: t('motor_transport_unit') },
  { title: t('navi_mumbai_police_band')},
  ]

  const SpecialUnits2 = [
    { title: t('local_armed_police') },
  { title: t('quick_response_team') },
  { title: t('riot_control_police')},
  { title: t('modemized_control_room') },
  { title: t('protection_security') },
  { title: t('special_branch')},
  ]

  const SpecialUnits3 = [
    { title: t('cyber_crime') },
  { title: t('anti_narcotics_cell') },
  { title: t('crime_against_women_unit')},
  { title: t('juvenile_aid_protection_unit') },
  { title: t('anti_human_trafficking_unit') },
  { title: t('crime_detection_unit')},
  ]

  const CitizenCorner = [
    { title: t('search_and_view_fir') },
  { title: t('shooting_aaplication') },
  { title: t('police_clearance')},
  { title: t('loudspeaker_permission') },
  { title: t('accident_compensation') },
  { title: t('right_to_info')},
  { title: t('your_contribution') },
  { title: t('passport_status')},
  ]

  const CitizenCorner2 = [
    { title: t('gras_payment') },
  { title: t('useful_website') },
  { title: t('licensing_unit')},
  { title: t('citizen_wall') },
  { title: t('safety_tips') },
  { title: t('dcp_visits')},
  { title: t('tenders') },
  { title: t('faqs')},
  ]

  const PoliceCorner = [
    { title: t('police_staff_council_meetings') },
  { title: t('police_foundation') },
  { title: t('welfare_activities')},
  { title: t('media_coverage') },
  { title: t('press_release') },
  { title: t('crime_review')},
  { title: t('miscellaneoue') },
  { title: t('police_recruitments')},
  { title: t('good_work')},
  ]

  const ContactUs = [
    { title: t('police_station_incharge') },
  { title: t('divisional_acp') },
  { title: t('senior_police_officers')},
  { title: t('emergency_contacts') },
  ]
  // const aboutUs = ["Our mission", "Hall of Fame", "Responsibilities", "Hierarchy", "Organizational Structure", "Navi Mumbai Police Map", "History", "Initiatives", "Gallery", "Martyrs"]
  // const ReportUs = ["Online Complaint", "Tenant Information", "Lost/found", "Inform Us/Feedback"]
  // const SpecialUnits1 = ["Crime Branch", "Economic Offense Wing", "Traffic Branch", "Police Surgeon", "Motor Transport Unit", "Greater Mumbai Police Band"]
  // const SpecialUnits2 = ["Local Armed Police", "Quick Response team", "Riot Control Police", "Modemized Control Room", "Protection & Security", "Special Branch"]
  // const SpecialUnits3 = ["Cyber Crime", "Anti Narcotic Cell", "Crime against Women Unit", "Juvenile Aid Protection Unit(JAPU)", "Anti Human Trafficking Unit", "Crime Detection Unit"]
  // const CitizenCorner = ["Search & View Public FIR", "Filming/Shooting Application", "Police Clearance Service", "Loudspeaker Permission", "Accident Compensation", "Right to Information(RTI)", "Your Contribution", "Passport Status"]
  // const CitizenCorner2 = ["GRAS Payment", "Useful Websites", "Licensing Unit", "Citizen Wall", "Safety Tips", "DCP Visits", "Tenders", "FAQs"]
  // const PoliceCorner = ["Police Staff Council Meeting", "Police Foundation", "Welfare Activities", "Media Coverage", "Press Release", "Crime Review", "Miscellaneous", "Police Recruitment", "Good Work"]
  // const ContactUs = ["Police Station Incharge", "Divisional ACP's", "Senior Police Officers", "Emergency Contacts"]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-30 flex items-center justify-between w-full px-2 -mt-10 bg-white">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[50px] h-[50px] mr-2"
        />
        <h1 className="mx-1 text-[1.4em]  md:w-auto font-semibold leading-[36px] text-sky-900">
          {t('navi_mumbai_police')}
        </h1>
      </div>

      <div className="flex items-center justify-around md:mt-0">
        <div className="justify-around hidden md:flex">
          <ul className="flex flex-col mt-[2px] text-[1em] w-11/12 mr-5 space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-sky-900">
            <li className="inline-flex font-medium leading-[28px] cursor-pointer">
              {t('home')}
            </li>
            <li onMouseEnter={() => setaboutUsToggle(true)} onMouseLeave={() => setaboutUsToggle(false)} className={`relative ${aboutUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
            {t('about_us')}
              {aboutUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {aboutUs.map((about, i) => (
                      <li className="hover:text-[#E7581A] w-48" key={i}>{about.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setreportUsToggle(true)} onMouseLeave={() => setreportUsToggle(false)} className={`relative ${reportUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('report_us')}
              {reportUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {ReportUs.map((report, i) => (
                      <li className="hover:text-[#E7581A] w-48" key={i}>{report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setSpecialUnits1Toggle(true)} onMouseLeave={() => setSpecialUnits1Toggle(false)} className={`relative ${SpecialUnits1Toggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('special_units')}
              {SpecialUnits1Toggle &&
                <div className="absolute z-50 -left-80">
                  <ul className="text-black bg-white px-6 py-2 flex border-[1px]  rounded-lg">
                    <div>
                      {SpecialUnits1.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits2.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits3.map((special, i) => (
                        <li className="w-72 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>

                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setCitizenCornerToggle(true)} onMouseLeave={() => setCitizenCornerToggle(false)} className={`relative ${CitizenCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('citizen_corner')}
              {CitizenCornerToggle &&
                <div className="absolute z-50 -left-36">
                  <ul className="text-black bg-white px-6 py-2 flex border-[1px]  rounded-lg">
                    <div>
                      {CitizenCorner.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {CitizenCorner2.map((special, i) => (
                        <li className="w-32 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setPoliceCornerToggle(true)} onMouseLeave={() => setPoliceCornerToggle(false)} className={`relative ${PoliceCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('police_corner')}
              {PoliceCornerToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {PoliceCorner.map((report, i) => (
                      <li className="hover:text-[#E7581A] w-56" key={i}>{report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>              <li onMouseEnter={() => setContactUsToggle(true)} onMouseLeave={() => setContactUsToggle(false)} className={`relative ${ContactUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('contact_us')}
              {ContactUsToggle &&
                <div className="absolute z-50 -left-28">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {ContactUs.map((report, i) => (
                      <li className="hover:text-[#E7581A] w-44" key={i}>{report.title}</li>
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
        <span className="text-black-500">
          {currentLang === 'en' ? 'En' : 'Mr'}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-black transition-transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute py-2 mt-2 bg-white rounded shadow -left-2">
          <ul className="text-black">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-white"
              onClick={() => handleOptionChange('en')}
            >
              En
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-white"
              onClick={() => handleOptionChange('mr')}
            >
              Mr
            </li>
          </ul>
        </div>
      )}
            </div>
            <div className="w-16">
              {/* <BiSearch size={32} className="text-sky-900" /> */}
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
                  // value={}
                >
                  Mr
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* for smaller devices */}
        <div className="md:hidden ">
          <button
            className="flex items-center justify-center"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 z-40 absolute top-20 right-10 text-[#E7581A]"
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
            <div className="absolute top-12 w-full h-screen right-0  overflow-scroll  border-b border-gray-200">
              <ul className="text-left px-6 pb-6 items-center ml-28 pt-20 overflow-auto bg-white  text-black text-lg">
                <li className="px-8 py-4 cursor-pointer h-full hover:bg-white">
                  {t('home')}
                </li>
                <li onClick={() => setaboutUsMobile(!aboutUsMobile)} className="px-8 py-4">
                 <div  className="flex"> <span className="pr-12">{t('about_us')}</span> {aboutUsMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {aboutUsMobile &&
                    <div className=" h-full w-full ml-6 text-sm  mt-2">
                      <ul className="  rounded-lg ">
                        {aboutUs.map((about, i) => (
                          <><li className="py-2 " key={i}>{about.title}</li></>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setreportUsMobile(!reportUsMobile)} className="px-8 py-4">
                 <div  className="flex"> <span className="pr-10">{t('report_us')}</span> {reportUsMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {reportUsMobile &&
                    <div className="h-full w-full ml-6 text-sm  mt-2">
                      <ul className="  rounded-lg ">
                        {ReportUs.map((about, i) => (
                          <><li className="py-2 " key={i}>{about.title}</li></>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                
                <li onClick={() => setSpecialUnits1Mobile(!SpecialUnits1Mobile)} className="px-8 py-4">
                <div  className="flex"> <span className="pr-4">{t('special_units')}</span> {SpecialUnits1Mobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {SpecialUnits1Mobile &&
                    <div className="h-full w-full ml-6 text-sm  mt-2">
                      <ul className=" rounded-lg ">                        
                      {SpecialUnits1.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                    
                      {SpecialUnits2.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                    
                      {SpecialUnits3.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                      
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setCitizenCornerMobile(!CitizenCornerMobile)} className="px-8 py-4  ">
                <div  className="flex"> <span className="pr-1">{t('citizen_corner')}</span> {CitizenCornerMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {CitizenCornerMobile &&
                    <div className="h-full w-full ml-6 text-sm  mt-2">
                      <ul className=" rounded-lg ">
                      {CitizenCorner.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                      {CitizenCorner2.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setPoliceCornerMobile(!PoliceCornerMobile)} className="px-8 py-4">
                <div  className="flex"> <span className="pr-3">{t('police_corner')}</span> {PoliceCornerMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {PoliceCornerMobile &&
                    <div className="h-full w-full ml-6 text-sm  mt-2">
                    <ul className="rounded-lg ">
                      {PoliceCorner.map((report, i) => (
                      <li className="py-2" key={i}>{report.title}</li>
                    ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setContactUsMobile(!ContactUsMobile)} className="px-8 py-4 mb-3">
                <div  className="flex"> <span className="pr-8">{t('contact_us')}</span> {ContactUsMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {ContactUsMobile &&
                    <div className="h-full w-full ml-6 text-sm  mt-2">
                    <ul className=" rounded-lg ">
                      {ContactUs.map((report, i) => (
                      <li className="py-2" key={i}>{report.title}</li>
                    ))}
                      </ul>
                    </div>
                  }
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
