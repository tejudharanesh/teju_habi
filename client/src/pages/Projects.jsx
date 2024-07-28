import * as React from "react";
import thumbNail from "../assets/images/tumbnail.png";
import home from "../assets/images/home.png";
import Footer from "../components/Footer";
import youtube from "../assets/svg/youtube.svg";

function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center font-poppins w-full bg-background ">
      <div className="flex flex-col w-full h-full bg-layoutColor md:px-24 lg:px-52 xl:px-96 p-4">
        <div className="text-2xl font-semibold text-center text-black">
          Projects
        </div>
        <div className="text-lg text-black mt-4">Completed</div>
      </div>

      <div className="flex flex-col w-full  bg-layoutColor md:px-24 lg:px-52 xl:px-96 p-4 mb-2">
        <div className="mt-1 w-full">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <div className="mt-7 rounded-xl border border-solid border-stone-300 w-[173px] h-[117px] md:h-[117px] md:w-[222px] lg:w-[270px]  lg:h-[143px] relative">
                <a href="https://youtu.be/tVH_rxUKsvM?si=04ErJhT9KYM2igXw">
                  <img
                    src={thumbNail}
                    className="w-[173px] h-[117px] md:w-[222px] md:h-[117px] lg:w-[270px] lg:h-[143px]"
                  />
                  <img
                    src={youtube} // Replace with the path to your YouTube icon
                    alt="YouTube Icon"
                    className="absolute inset-0 m-auto w-7 h-8"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full mt-6 ">
              <div className="text-lg text-black">Arvind Kumar</div>
              <div className="text-gray-500">Bengaluru</div>
              <div className="shrink-0 border border-solid bg-stone-300 border-stone-300 my-2" />
              <div className="text-sm">1200 Sq. Feet</div>
              <div className="text-sm">3BHK Duplex villa</div>
              <div className="text-sm">Orientation: West</div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, index) => (
              <div className="w-1/5 md:w-1/6" key={index}>
                <img src={home} className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 w-full" />
        <div className="mt-4 text-black w-full text-left text-xs md:text-sm">
          habi has satisfied all my requirements and has done a very beautiful
          and quality construction. Their architects visited the site and made a
          convenient plan despite difficulties due to COVID 19. Overall we are
          very happy with the construction of our house.
        </div>
      </div>

      <div className="flex flex-col w-full  bg-layoutColor md:px-24 lg:px-52 xl:px-96 p-4 mb-2">
        <div className="mt-1 w-full">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <div className="mt-7 rounded-xl border border-solid border-stone-300 w-[173px] h-[117px] md:h-[117px] md:w-[222px] lg:w-[270px]  lg:h-[143px] relative">
                <a href="">
                  <img
                    src={thumbNail}
                    className="w-[173px] h-[117px] md:w-[222px] md:h-[117px] lg:w-[270px] lg:h-[143px]"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full mt-6 ">
              <div className="text-lg text-black">Arvind Kumar</div>
              <div className="text-gray-500">Bengaluru</div>
              <div className="shrink-0 border border-solid bg-stone-300 border-stone-300 my-2" />
              <div className="text-sm">1200 Sq. Feet</div>
              <div className="text-sm">3BHK Duplex villa</div>
              <div className="text-sm">Orientation: West</div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, index) => (
              <div className="w-1/5 md:w-1/5" key={index}>
                <img src={home} className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 w-full" />
        <div className="mt-4 text-black w-full text-left text-xs md:text-sm">
          habi has satisfied all my requirements and has done a very beautiful
          and quality construction. Their architects visited the site and made a
          convenient plan despite difficulties due to COVID 19. Overall we are
          very happy with the construction of our house.
        </div>
      </div>

      <div className="flex flex-col w-full  bg-layoutColor md:px-24 lg:px-52 xl:px-96 p-4">
        <div className="text-lg text-black mt-4">Ongoing</div>
      </div>

      <div className="flex flex-col w-full  bg-layoutColor md:px-24 lg:px-52 xl:px-96 p-4 mb-2">
        <div className="mt-1 w-full">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <div className="mt-7 rounded-xl border border-solid border-stone-300 w-[173px] h-[117px] md:h-[117px] md:w-[222px] lg:w-[270px]  lg:h-[143px]">
                <img
                  src={thumbNail}
                  className="w-[173px] h-[117px] md:w-[222px] md:h-[117px] lg:w-[270px] lg:h-[143px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-6 ">
              <div className="text-lg text-black">Arvind Kumar</div>
              <div className="text-gray-500">Bengaluru</div>
              <div className="shrink-0 border border-solid bg-stone-300 border-stone-300 my-2" />
              <div className="text-sm">1200 Sq. Feet</div>
              <div className="text-sm">3BHK Duplex villa</div>
              <div className="text-sm">Orientation: West</div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, index) => (
              <div className="w-1/5 md:w-1/5" key={index}>
                <img src={home} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full  bg-layoutColor md:px-24 lg:px-52 xl:px-96 p-4">
        <div className="mt-1 w-full">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <div className="mt-7 rounded-xl border border-solid border-stone-300 w-[173px] h-[117px] md:h-[117px] md:w-[222px] lg:w-[270px]  lg:h-[143px]">
                <img
                  src={thumbNail}
                  className="w-[173px] h-[117px] md:w-[222px] md:h-[117px] lg:w-[270px] lg:h-[143px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-6 ">
              <div className="text-lg text-black">Arvind Kumar</div>
              <div className="text-gray-500">Bengaluru</div>
              <div className="shrink-0 border border-solid bg-stone-300 border-stone-300 my-2" />
              <div className="text-sm">1200 Sq. Feet</div>
              <div className="text-sm">3BHK Duplex villa</div>
              <div className="text-sm">Orientation: West</div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, index) => (
              <div className="w-1/5 md:w-1/5" key={index}>
                <img src={home} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full  bg-layoutColor md:px-24 lg:px-52 xl:px-96 p-4">
        <Footer />
      </div>
    </div>
  );
}
export default Projects;
