"use client";
import BestServices from "./BestServices";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import CPMessage from "./CPMessage";
import SocialMedia from "./SocialMedia";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Twitter from "./Twitter";

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
