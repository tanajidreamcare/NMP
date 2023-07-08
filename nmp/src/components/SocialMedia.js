"use client";
// import Try from "./twit";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

export default function SocialMedia() {
  const startScroll = () => {
    const marquee = document.getElementById("scroll_news");
    marquee.start();
  };

  const stopScroll = () => {
    const marquee = document.getElementById("scroll_news");
    marquee.stop();
  };
  return (
    <>
      {/* <Try /> */}
      <div className="bg-zinc-500 md:bg-[url('/social_bg_img.png')] py-5">
        <div className="mx-20 mt-5 text-[24px] md:text-4xl font-extrabold md:justify-center md:flex text-white md:text-white">
          Social Media Feeds
        </div>
        <div className="items-center justify-center md:flex">
          <div className="justify-end mx-3 md:flex md:w-4/12">
            <div className="p-5 bg-white border-2 rounded-lg">
              <div className="flex justify-center my-3">
                <ImFacebook2 size={35} color="red" style={{ color: "blue" }} />
              </div>
              <hr className="border-2 border-solid" />
              <div className="my-3 font-bold text-center">
                @navimumbaipolice.gov.in
              </div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnavimumbaipolice.gov.in%2F%3Fref%3Dembed_page&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="300"
                height="300"
                frameborder="0"
                allowfullscreen="true"
                className="rounded-xl"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          <div className="justify-center p-3 my-10 md:flex md:w-4/12">
            <div className="p-5 bg-white border-2 rounded-lg">
              <div className="flex justify-center my-3 text-blue-500">
                <FaTwitterSquare size={40} color="red" />
              </div>
              <hr className="border-2 border-solid" />
              <div className="my-3 font-bold text-center">
                @navimumbaipolice.gov.in
              </div>
              <div className="twitter-embed">
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/vitekar_tanaji"
                  data-tweet-limit="5"
                  data-chrome="noheader nofooter noborders"
                  data-width="300"
                  data-height="300"
                >
                  Tweets by @NaviMumbaiPolice
                </a>
              </div>
            </div>
          </div>

          <div className="justify-start p-3 my-10 md:flex md:w-4/12">
            <div className="p-5 bg-white border-2 rounded-lg">
              <div className="flex justify-center my-3 text-blue-500">
                <GrUpdate size={35} color="red" />
              </div>
              <hr className="border-2 border-solid" />
              <div className="my-3 font-bold text-center">Latest Update</div>
              <div>
                <marquee
                  direction="up"
                  height="300px"
                  width="300px"
                  scrollamount="5"
                  id="scroll_news"
                >
                  <div onMouseOver={stopScroll} onMouseOut={startScroll}>
                    <div className="mt-1 card">
                      <div className="box-shadow py-5 px-5 border-x-4 border-gray-800  ">
                        <a href="#" target="_blank" className="web-link2">
                          Hello Welcome to the Navi Mumbai Police Hello Welcome to the Navi Mumbai Police Hello Welcome to the Navi Mumbai Police Hello Welcome to the Navi Mumbai Police
                        </a>
                      </div>
                    </div>
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
