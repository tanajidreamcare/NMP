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

export default function Home() {
  return (
    <>
<<<<<<< Updated upstream
    {/* <Navbar/> */}
    {/* <Carousel/> */}
    {/* <BestServices/> */}
    {/* <CPMessage/> */}
    <SocialMedia/>
    {/* <Gallery/> */}
=======
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
    <Navbar/>
    <Carousel/>
    <BestServices/>
    <CPMessage/>
    <SocialMedia/>
    <Gallery/>
>>>>>>> Stashed changes
    {/* <Footer/> */}
    <Twitter/>
    </>
  )
}
