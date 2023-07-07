import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('En');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="fixed z-20 bg-red-300">
        <nav className="fixed flex flex-col items-center justify-between w-full px-6 py-4 bg-white md:flex-row">
          <div className="flex items-center">
            <img src="/gal_img11.png" alt="Logo" className="w-16 h-16 mr-2" />
            <h1 className="mx-3 text-2xl font-semibold leading-9 text-sky-900">
              Navi Mumbai Police
            </h1>
          </div>
          <div className="flex items-center justify-end mt-4 md:mt-0">
            <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-sky-900">
              <li className="text-xl font-medium leading-7 cursor-pointer">
                Home
              </li>
              <li className="text-xl font-medium leading-7 cursor-pointer">
                About Us
              </li>
              <li className="text-xl font-medium leading-7 cursor-pointer">
                Report Us
              </li>
              <li className="text-xl font-medium leading-7 cursor-pointer">
                Special Units
              </li>
              <li className="text-xl font-medium leading-7 cursor-pointer">
                Citizen Corner
              </li>
              <li className="text-xl font-medium leading-7 cursor-pointer">
                Police Corner
              </li>
              <li className="text-xl font-medium leading-7 cursor-pointer">
                Contact Us
              </li>
            </ul>
            <div className="flex items-center mx-3 border-l-4 border-r-4">
              <div className="p-2 m-3 font-bold border-2 rounded-md cursor-pointer">
                A+
              </div>
              <div className="p-2 m-3 font-bold border-2 rounded-md cursor-pointer">
                A
              </div>
              <div className="p-2 m-3 font-bold border-2 rounded-md cursor-pointer">
                A-
              </div>
            </div>
            <div className="relative">
              <button
                className="flex items-center space-x-1 cursor-pointer focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-black-500">{selectedOption}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-white transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
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
                <div className="absolute right-0 w-24 py-2 mt-2 bg-white rounded shadow">
                  <ul className="text-black">
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-white"
                      onClick={() => handleOptionChange('En')}
                    >
                      En
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-white"
                      onClick={() => handleOptionChange('Mr')}
                    >
                      Mr
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="ml-3 border-l-4">
              <BiSearch size={35} className="m-4 mx-2 text-sky-900" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;


// ---------------------------

// import { BiSearch } from "react-icons/bi";
// import { useState } from "react";

// const Gallery = () => {

//   const [selectedOption, setSelectedOption] = useState('En');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setIsDropdownOpen(false);
//   };
//   return (
//     <>
//       <div className="bg-red-300">
//         <nav className="fixed flex items-center justify-between w-full px-6 py-4 bg-white">
//           <div className="flex items-center">
//             <img src="/gal_img11.png" alt="Logo" className="w-16 h-16 mr-2" />
//             <h1 className="mx-3 text-2xl font-semibold leading-9 text-sky-900">
//               Navi Mumbai Police
//             </h1>
//           </div>
//           <div className="flex items-center justify-end">
//             <ul className="flex space-x-4 text-sky-900">
//               <li className="text-xl font-medium leading-7 cursor-pointer text-sky-900">
//                 Home
//               </li>
//               <li className="text-xl font-medium leading-7 cursor-pointer text-sky-900">
//                 About Us
//               </li>
//               <li className="text-xl font-medium leading-7 cursor-pointer text-sky-900">
//                 Report Us
//               </li>
//               <li className="text-xl font-medium leading-7 cursor-pointer text-sky-900">
//                 Special Units
//               </li>
//               <li className="text-xl font-medium leading-7 cursor-pointer text-sky-900">
//                 Citizen Corner
//               </li>
//               <li className="text-xl font-medium leading-7 cursor-pointer text-sky-900">
//                 Police Corner
//               </li>
//               <li className="text-xl font-medium leading-7 cursor-pointer text-sky-900">
//                 Contact Us
//               </li>
//             </ul>
//             <div className="flex items-center mx-3 border-l-4 border-r-4">
//               <div className="p-2 m-3 font-bold border-2 rounded-md cursor-pointer">A+</div>
//               <div className="p-2 m-3 font-bold border-2 rounded-md cursor-pointer">A</div>
//               <div className="p-2 m-3 font-bold border-2 rounded-md cursor-pointer">A-</div>
//             </div>
//             <div className="">
//             <div className="relative">
//         <button
//           className="flex items-center space-x-1 cursor-pointer focus:outline-none"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         >
//           <span className="text-black-500">{selectedOption}</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className={`h-4 w-4 text-white transition-transform ${
//               isDropdownOpen ? 'rotate-180' : ''
//             }`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//         {isDropdownOpen && (
//           <div className="absolute right-0 w-24 py-2 mt-2 bg-white rounded shadow">
//             <ul className="text-white">
//               <li
//                 className="px-4 py-2 cursor-pointer hover:bg-white"
//                 onClick={() => handleOptionChange('En')}
//               >
//                 En
//               </li>
//               <li
//                 className="px-4 py-2 cursor-pointer hover:bg-white"
//                 onClick={() => handleOptionChange('Mr')}
//               >
//                 Mr
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//             </div>
//               <div className="ml-3 border-l-4">
//               <BiSearch size={35} className="m-4 mx-2 text-sky-900"/>
              
//             </div>
            
//           </div>
//         </nav>
//       </div>
      
//     </>
//   );
// };

// export default Gallery;
