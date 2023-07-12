"use client";
import BestServices from "../components/BestServices";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import CPMessage from "../components/CPMessage";
import SocialMedia from "../components/SocialMedia";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Twitter from "../components/Twitter";
import Head from "next/head";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engTrans from "../locales/english.json";
import marTrans from "../locales/marathi.json";
import PoliceOfficer from '../components/seniorPoliceOfficer';
import DivisionalACP from "../components/DivisionalACP";
import Martyrs from "../components/Martyrs";
import ContactUs from '../components/ContactUs';
import PoliceMap from "../components/PoliceMap";
import OrganizationalStructure from "../components/OrganizationalStructure";
import LostFound from "../components/LostFound";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: engTrans
      },
      
      mr: {
        translation: marTrans
      }

    },

    lng: "en", 
    fallbackLng: "mr",

    interpolation: {
      escapeValue: false 
    }
  });

export default function Home() {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      
    {/* <Navbar/> */}
    {/* <Carousel/> */}
    {/* <BestServices/> */}
    {/* <CPMessage/> */}
    {/* <SocialMedia/> */}
    {/* <Gallery/> */}
    {/* <Footer/> */}
    {/* <Twitter/> */}
    {/* <PoliceOfficer/> */}
    {/* <DivisionalACP/> */}
    {/* <Martyrs/> */}
    {/* <PoliceMap/> */}
    {/* <ContactUs/> */}
    {/* <OrganizationalStructure/> */}
    <LostFound/>
    </>
  )
};