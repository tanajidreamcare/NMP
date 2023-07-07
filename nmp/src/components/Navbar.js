import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("En");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex fixed z-10 items-center justify-between w-full px-2 bg-white md:flex-row">
        <div className="flex items-center">
          <img
            src="/gal_img11.png"
            alt="Logo"
            className="w-[50px] h-[50px] mr-2"
          />
          <h1 className="mx-1 text-[1.4em] w-2/12 md:w-auto font-semibold leading-[36px] text-sky-900">
            Navi Mumbai Police
          </h1>
        </div>

        <div className="flex items-center justify-end float-right mt-4 md:mt-0">
          <div className="hidden md:flex justify-end">
            <ul className="flex flex-col mt-3 text-[1em] space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-sky-900">
              <li className="inline-flex font-medium leading-[28px] cursor-pointer">
                Home
              </li>
              <li className="inline font-medium leading-[28px] cursor-pointer">
                About Us
              </li>
              <li className="font-medium leading-[28px] cursor-pointer">
                Report Us
              </li>
              <li className="font-medium leading-[28px] cursor-pointer">
                Special Units
              </li>
              <li className="font-medium leading-[28px] cursor-pointer">
                Citizen Corner
              </li>
              <li className="font-medium leading-[28px] cursor-pointer">
                Police Corner
              </li>
              <li className="font-medium leading-[28px] cursor-pointer">
                Contact Us
              </li>
            </ul>
            <div className="flex items-center mx-2 border-l-[2px] border-r-[2px] text-[#E7581A]">
              <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A+
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A-
              </div>
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
                  <div className="absolute -left-2  py-2 mt-2 bg-white rounded shadow">
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
              <div className="border-l-[2px]">
                <BiSearch size={32} className="text-sky-900" />
              </div>
            </div>
          </div>
          <div className="relative flex md:hidden text-[#E7581A]">
            <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A+
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A-
            </div>
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
              <div className="absolute -left-2 -top-2 py-2 mt-2 bg-white rounded shadow">
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
              <div className="absolute top-[115px] left-0 right-0 bg-white border-b border-gray-200">
                <ul className="text-sky-900 text-center">
                  <li className="px-4 py-2 cursor-pointer hover:bg-white">
                    Home
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-white">
                    About Us
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
    </>
  );
};

export default Navbar;
