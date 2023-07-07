"use client";
import BestServices from "../components/BestServices";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import CPMessage from "../components/CPMessage";
import SocialMedia from "../components/SocialMedia";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Twitter from "../components/Twitter";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <BestServices/>
    <CPMessage/>
    <SocialMedia/>
    <Gallery/>
    <Footer/>
    <Twitter/>
    </>
  )
}
