import { useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

const LostFound = ()=> {

    const { t } = useTranslation();

    useEffect(() => {
        handleRefreshCaptcha();
      }, []);
    
    //   const navigate = useNavigate();
    
      const [values, setValues] = useState({
        captcha: "",
      });

    const [errors, setErrors] = useState([]);
  const [captchaImage, setCaptchaImage] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [file, setFile] = useState(null);
  const [name, setname] = useState("");
  const [reportType, setreportType] = useState("");
  const [station, setstation] = useState("");
  const [articleType, setarticleType] = useState("");
  const [date, setdate] = useState("");
  const [place, setplace] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [description, setdescription] = useState("");
  const [captchaInput, setcaptchaInput] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
      const handleNameChange = (e) => {
        setname(e.target.value);
      };
    
      const handlereportType = (e) => {
        setreportType(e.target.value);
      };
    
      const handlestation = (e) => {
        setstation(e.target.value);
      };
    
      const handlearticleType = (e) => {
        setarticleType(e.target.value);
      };
    
      const handledate = (e) => {
        setdate(e.target.value);
      };
    
      const handleplace = (e) => {
        setplace(e.target.value);
      };
    
      const handleemail = (e) => {
        setemail(e.target.value);
      };
    
      const handlenumber = (e) => {
        setnumber(e.target.value);
      };
    
      const handleaddress = (e) => {
        setaddress(e.target.value);
      };
    
      const handlepincode = (e) => {
        setpincode(e.target.value);
      };
    
      const handleaadhar = (e) => {
        setaadhar(e.target.value);
      };
    
      const handledescription = (e) => {
        setdescription(e.target.value);
      };
    
      const handleCaptchaInput = (e) => {
        setcaptchaInput(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("reportType", reportType);
        formData.append("station", station);
        formData.append("articleType", articleType);
        formData.append("date", date);
        formData.append("place", place);
        formData.append("email", email);
        formData.append("number", number);
        formData.append("address", address);
        formData.append("pincode", pincode);
        formData.append("aadhar", aadhar);
        formData.append("description", description);
        formData.append("captchaInput", captchaInput);
    
        try {
          // Verify the captcha value on the server-side
        //   await axios.post("/lostAndFound", formData);
    
          setFile(null);
          setname("");
          setreportType("");
          setarticleType("");
          setdate("");
          setstation("");
          setplace("");
          setemail("");
          setnumber("");
          setaddress("");
          setpincode("");
          setaadhar("");
          setdescription("");
          navigate("/");
        } catch (error) {
          if (error.response && error.response.status === 400) {
            setErrors(error.response.data.errors);
          } else {
            console.error(error);
          }
        }
      };

    const optionsReport = [
        { value: "option1", label: "Lost Item Report" },
        { value: "option2", label: "Found Item Report" },
      ];
    
      const optionsArticle = [
        { value: "option1", label: "Driving License" },
        { value: "option2", label: "Pan Card" },
        { value: "option3", label: "Aadhar Card" },
        { value: "option4", label: "Voter ID Card" },
        { value: "option5", label: "Ration Card" },
        { value: "option6", label: "Educational Document" },
        { value: "option7", label: "Other" },
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

    const handleRefreshCaptcha = () => {
        // axios
        //   .get("/captcha")
        //   .then((response) => {
        //     const { data } = response;
        //     seterrorMessage("");
        //     setCaptchaImage("data:image/svg+xml;base64," + btoa(data));
        //   })
        //   .catch((error) => {
        //     console.log(error.message);
        //     // Handle error
        //   });
      };

    return(
        <>
        <div>
      <div className="flex justify-center mb-10 text-3xl font-bold text-blue-700 underline decoration-blue-300 decoration-4 underline-offset-8 sm:mt-40">
        <h1 title={t("lost_found")}>{t("lost_found")}</h1>
      </div>
      <div className="flex justify-center mx-10 text-lg font-bold md:mx-10">
        <div className="text-center">{t("top_lost_found")}</div>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="container mx-5 md:mx-10">
            <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10 ">
              <div>
                <label
                  htmlFor="dropdownValue"
                  className="font-bold text-gray-500"
                >
                  Report Type *
                </label>
                <br />
                <select
                  name="reportdropdownValue"
                  onChange={handlereportType}
                  id="reportdropdownValue"
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                >
                  <option value="">Select Report Type</option>
                  {optionsReport.map((option) => (
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
                  Article Type *
                </label>
                <br />
                <select
                  name="dropdownValue"
                  id="articledropdownValue"
                  onChange={handlearticleType}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                >
                  <option value="">Select Article Type</option>
                  {optionsArticle.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10">
              <div>
                <label
                  htmlFor="dropdownValue"
                  className="font-bold text-gray-500"
                >
                  Select Police Station *
                </label>
                <br />
                <select
                  as="select"
                  name="dropdownValue"
                  onChange={handlestation}
                  id="stationdropdownValue"
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
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
                <label htmlFor="dateTime" className="font-bold text-gray-500">
                  Date and Time *
                </label>
                <br />
                <input
                  type="date"
                  name="dateTime"
                  onChange={handledate}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                />
              </div>
            </div>

            <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10">
              <div>
                <label htmlFor="place" className="font-bold text-gray-500">
                  Place of Lost/Found *
                </label>
                <br />
                <input
                  type="text"
                  id="place"
                  name="place"
                  onChange={handleplace}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                />
              </div>

              <div>
                <label htmlFor="name" className="font-bold text-gray-500">
                  Full Name ( As Per Your Aadhar Card ) *
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleNameChange}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                />
              </div>
            </div>

            <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10">
              <div>
                <label htmlFor="email" className="font-bold text-gray-500">
                  Email *
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleemail}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                />
              </div>

              <div>
                <label htmlFor="contact" className="font-bold text-gray-500">
                  Contact No *
                </label>
                <br />
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  onChange={handlenumber}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                />
              </div>
            </div>

            <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10">
              <div>
                <label htmlFor="address" className="font-bold text-gray-500">
                  Address *
                </label>
                <br />
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={handleaddress}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                />
              </div>

              <div>
                <label htmlFor="pincode" className="font-bold text-gray-500">
                  Pin Code *
                </label>
                <br />
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  onChange={handlepincode}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-96"
                />
              </div>
            </div>

            <div className="flex justify-center mx-10 my-5">
              <div className=" justify-center md:w-[66.5%] w-full">
                <label htmlFor="aadharcard" className="font-bold text-gray-500">
                  Aadhar Card No *
                </label>
                <br />
                <input
                  type="number"
                  id="aadharcard"
                  name="aadharcard"
                  onChange={handleaadhar}
                  className="w-full py-1 border border-gray-500 rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-center mx-10 my-5">
              <div className=" justify-center md:w-[66.5%] w-full">
                <label htmlFor="article" className="font-bold text-gray-500">
                  Article description *
                </label>
                <br />
                <input
                  type="text"
                  id="article"
                  name="article"
                  onChange={handledescription}
                  className="w-full py-1 border border-gray-500 rounded-lg"
                />
              </div>
            </div>

            <div className="my-5 ml-[19%]">
              <label htmlFor="file" className="font-bold text-gray-500">
                Upload file *
              </label>
              <br />

              <input
                type="file"
                id="file"
                className="cursor-pointer"
                accept=".pdf, .png, .jpg, .jpeg"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex justify-center text-center ">
              <label>
                <input type="checkbox" name="isChecked" className="w-5 h-5" />
                {t("end_lost_found")}
              </label>
            </div>
            <br />

            <div className="flex justify-center ">
              <div className="">
                <div className="flex justify-center">
                  <img src={captchaImage} alt="captcha" className="bg-white" />
                  <button
                    type="button"
                    className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
                    onClick={handleRefreshCaptcha}
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
                      onChange={handleCaptchaInput}
                    />
                    <div className="text-red-600 ">
                      <div className="justify-center text-center">
                      <p>{errorMessage}</p>
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

                {errors.length > 0 && (
                    <div className="relative px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
                      <strong className="font-bold">Validation errors:</strong>
                      <ul className="mt-2">
                        {errors.map((error, index) => (
                          <li key={index}>{error.message}</li>
                        ))}
                      </ul>
                    </div>
                  )}

              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="m-5 md:m-10">
        <div className="justify-center text-lg font-bold text-gray-500 underline md:mx-10">
          Note:
        </div>
        <div className="justify-center md:mx-14">
          1. This is a digitally signed document and requires no signatureas per
          IT Act 2008.
        </div>
        <div className="justify-center md:mx-14">
          2. If required approach the concerned Police Station for Police
          Stamp/Signature.
        </div>
        <div className="justify-center md:mx-14">
          3. This application is for lodging report of Articles Lost in Thane
          only.
        </div>
      </div>
      <div className="m-5 md:m-10">
        <div className="justify-center text-lg font-bold text-gray-500 underline md:mx-10">
          Disclaimer:
        </div>
        <div className="justify-center md:mx-14">1. This is not an FIR.</div>
        <div className="justify-center md:mx-14">
          2. Report lodged with this application is a subject matter of enquiry
          and not an investigation.
        </div>
        <div className="justify-center md:mx-14">
          3. In case loss is due to theft or any other crime, contact nearest
          police station.
        </div>
        <div className="justify-center md:mx-14">
          4. False report to police is a punishable offence as per Indian Penal
          Code (IPC).
        </div>
      </div>

    </div>
        </>
    )
};

export default LostFound;