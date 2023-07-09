"use client";
import Image from "next/image";
import { useTranslation} from "react-i18next";

export default function CPMessage() {

  const { t } = useTranslation();

  return (
    <>
      <div className="py-5 md:py-12 bg-sky-950">
        <div className="justify-center w-full h-full md:flex">
          <div className="flex items-center justify-center">
            <div className="text-[24px] font-extrabold leading-9 text-white md:hidden">Meet The Chief</div>
          </div>
          <div className="flex justify-center md:w-full">
            <div className="items-center md:w-[85%] justify-center md:flex md:items-right md:justify-center">
              <div className="flex justify-center w-full md:w-4/12">
                <img
                  src="/CP_NMP_img.png"
             
                  // layout="responsive"
                  className="object-cover w-[60%] md:w-full"
                  alt="Commissioner of Police Navi Mumbai"
                />
              </div>
              <div className="mx-10 md:w-8/12">


                  <div className="hidden text-[40px] text-left font-extrabold leading-9 text-white sm:block">{t('from_cp_desk')}</div>


                  <h1 className="mt-3 text-white md:text-lg">{t('namaskar_navi_mumbai')}</h1>

                  <h1 className="mt-3 text-sm leading-6 text-justify text-white md:text-lg">
                  {t('cp_msg1')}
                    <br />
                    <br />
                  {t('cp_msg2')}
                  </h1>

                  <h1 className="mt-3 text-lg text-white md:text-2xl">
                    {t('cp_msg3')}
                    <br />
                    {t('cp_msg4')}
                  </h1>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
