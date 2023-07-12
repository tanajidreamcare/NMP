import { useTranslation} from "react-i18next";

const InformUsFeedback = () => {

    const { t } = useTranslation();

    const optionsFeedback = [
        { value: "option1", label: "Inform Us" },
        { value: "option2", label: "Feedback" },
      ];

    const optionsPoliceStation = [
        { value: "option1", label: t('apmc') },
        { value: "option2", label: t('cbd_belapur') },
        { value: "option3", label: t('kalamboli') },
        { value: "option4", label: t('kamothe') },
        { value: "option5", label: t('khandeshwar') },
        { value: "option6", label: t('kharghar') },
        { value: "option7", label: t('kopar_khairane') },
        { value: "option8", label: t('mora_sagari') },
        { value: "option9", label: t('nerul') },
        { value: "option10", label: t('nhava_sheva') },
        { value: "option11", label: t('nri') },
        { value: "option12", label: t('panvel') },
        { value: "option13", label: t('panvel_taluka') },
        { value: "option14", label: t('rabale') },
        { value: "option15", label: t('rabale_midc') },
        { value: "option16", label: t('sanpada') },
        { value: "option17", label: t('taloja') },
        { value: "option18", label: t('turbhe') },
        { value: "option19", label: t('uran') },
        { value: "option20", label: t('washi') },
      ];
    return(
        <>
        <div>
            <div>
                <h1 className='text-5xl font-extrabold leading-9 text-center text-black pt-52'>
                    Inform Us/ Feedback
                </h1>
            </div>

            <div className="flex">
            <div className="items-center justify-center my-20 mx-28">
                <h1 className="font-bold text-black">Disclaimer:</h1>
                <h1 className="text-black">As per the prevailing laws, FIR of a major crime (′cognizable crimes like theft, burglary, motor vehicle theft, accident, chain-snatching, assault, rape, murder, attempt to commit murder, robbery, dacoity, extortion etc) can only be registered at a Police Station. Please contact your nearest Police Station for the same.</h1>
                <h1 className="text-black">Report here feedback of experience about police.</h1>
            <div>

            <div className="container ">
                <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10 ">
                    <div>
                <label
                  htmlFor="dropdownValue"
                  className="font-bold text-gray-500"
                >
                  Category Type *
                </label>
                <br />
                <select
                  name="reportdropdownValue"
                //   onChange={handlereportType}
                  id="reportdropdownValue"
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                >
                  <option value="">Select Category Type</option>
                  {optionsFeedback.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
                    </div>
                    <div>
                <label
                  htmlFor="dropdownValue"
                  className="font-bold text-gray-500"
                >
                  Police Station
                </label>
                <br />
                <select
                  name="reportdropdownValue"
                //   onChange={handlereportType}
                  id="reportdropdownValue"
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                >
                  <option value="">Select Police Station</option>
                  {optionsPoliceStation.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
                    </div>
                    <div>
                <label htmlFor="name" className="font-bold text-gray-500">
                  Full Name*
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                //   onChange={handleNameChange}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
                    </div>
                </div>
                <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10 ">
                    <div>
                <label htmlFor="contact" className="font-bold text-gray-500">
                  Contact No *
                </label>
                <br />
                <input
                  type="number"
                  id="contact"
                  name="contact"
                //   onChange={handlenumber}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
                    </div>
                    <div>
                <label htmlFor="email" className="font-bold text-gray-500">
                  Email *
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                //   onChange={handleemail}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
                    </div>
                    <div className="justify-center md:flex md:space-x-7 md:mx-10">
              <div>
                <label htmlFor="address" className="font-bold text-gray-500">
                  Subject *
                </label>
                <br />
                <input
                  type="text"
                  id="address"
                  name="address"
                //   onChange={handleaddress}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
              </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center mx-10 my-5">
              <div className=" justify-center md:w-[100%] w-full">
                <label htmlFor="article" className="font-bold text-gray-500">
                  Address*
                </label>
                <br />
                <input
                  type="text"
                  id="article"
                  name="article"
                //   onChange={handledescription}
                  className="w-full py-1 border border-gray-500 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-center mx-10 my-5">
              <div className=" justify-center md:w-[100%] w-full">
                <label htmlFor="article" className="font-bold text-gray-500">
                  Description
                </label>
                <br />
                <input
                  type="text"
                  id="article"
                  name="article"
                //   onChange={handledescription}
                  className="w-full py-1 border border-gray-500 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="">
                <div className="flex justify-center">
                  <img src="" alt="captcha" className="bg-white" />
                  <button
                    type="button"
                    className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
                    // onClick={handleRefreshCaptcha}
                  >
                    Refresh
                  </button>
                </div>
                <div className="flex justify-center w-full mt-5">
                  <div className="w-full">
                    <input
                      type="text"
                      name="captcha"
                      placeholder="Enter the numbers above"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      // value={values.captcha}
                    //   onChange={handleCaptchaInput}
                    />
                    <div className="text-red-600 ">
                      <div className="justify-center text-center">
                      {/* <p>{errorMessage}</p> */}
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="p-1 mx-5 font-bold text-white bg-blue-800 border border-gray-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>

              </div>
            </div>
        </div>
        </div>
            </div>
        </div>
        </>
    )
};

export default InformUsFeedback;