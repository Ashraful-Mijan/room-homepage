"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import DesktopHero1 from "../../public/images/desktop-image-hero-1.jpg";
import DesktopHero2 from "../../public/images/desktop-image-hero-2.jpg";
import DesktopHero3 from "../../public/images/desktop-image-hero-3.jpg";
import aboutImageDark from "../../public/images/image-about-dark.jpg";
import aboutImageLight from "../../public/images/image-about-light.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

// data
const data = [
  {
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you what you love.",
    image: DesktopHero1,
  },
  {
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: DesktopHero2,
  },
  {
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: DesktopHero3,
  },
];

export default function Home() {
  const swiperRef = useRef();

  return (
    <main className="">
      <section className="relative">
        <Navbar />
        <Swiper
          ref={swiperRef}
          spaceBetween={5}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={slide.title + index}>
              <div className="grid grid-cols-1 1xl:grid-cols-[60%,40%] md:grid-cols-[2fr,1.5fr]">
                <div className="relative">
                  <Image
                    src={slide.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="hero1"
                    priority
                  />
                  {/* navigation */}
                  <div className="xl:hidden absolute z-10 right-0 bottom-0 bg-black text-white w-28 h-14 flex justify-center items-center gap-9">
                    <svg
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                      className="cursor-pointer"
                      width="14"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 0L1 12l12 12"
                        stroke="#FFF"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                    <svg
                      onClick={() => swiperRef.current.swiper.slideNext()}
                      className="cursor-pointer"
                      width="14"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 0l12 12L1 24"
                        stroke="#FFF"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white flex justify-center items-center relative">
                  <div className="px-5 py-7 xl:px-10 xl:py-0 1xl:px-16 1xl:py-16">
                    <h1 className="mb-3 text-black font-bold leading-none text-4xl md:text-xl lg:text-4xl xl:text-5xl">
                      {slide.title}
                    </h1>

                    <p className="text-grey text-sm md:text-[12px] lg:text-sm xl:text-lg leading-normal 1xl:text-base">
                      {slide.description}
                    </p>

                    <div className="flex items-center mt-3 gap-4">
                      <p className="uppercase font-semibold tracking-[1em] md:tracking-[.6em] lg:text-lg text-black">
                        shop now
                      </p>
                      <svg
                        width="40"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                          fill="#000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* navigation */}
                  <div className="invisible xl:visible absolute z-10 left-0 bottom-0 bg-black text-white w-28 h-14 flex justify-center items-center gap-9">
                    <svg
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                      className="cursor-pointer"
                      width="14"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 0L1 12l12 12"
                        stroke="#FFF"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                    <svg
                      onClick={() => swiperRef.current.swiper.slideNext()}
                      className="cursor-pointer"
                      width="14"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 0l12 12L1 24"
                        stroke="#FFF"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[minmax(max-content,1fr)_4fr_minmax(max-content,1fr)] 1xl:grid-cols-[minmax(max-content,1fr)_1.5fr_minmax(max-content,1fr)]">
          <div className="sm:order-1 md:order-2 xl:order-1">
            <Image
              className="w-full h-auto sm:h-full"
              src={aboutImageDark}
              alt="dark"
            />
          </div>

          <div className="flex flex-col justify-center px-5 sm:px-8 md:px-5 1xl:px-10 1xl:py-10 py-8 sm:order-3 sm:col-span-full xl:col-auto xl:order-2 1xl:col-auto 1xl:order-2 md:order-1">
            <h4 className="uppercase font-bold text-black tracking-[.2em] sm:tracking-[.5em] mb-2 1xl:mb-3 lg:text-center xl:text-left lg:text-xl xl:text-2xl">
              about our furniture
            </h4>

            <p className="text-grey text-sm lg:text-lg 1xl:text-base lg:text-justify xl:text-left">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>

          <div className="sm:order-2 1xl:order-3 md:order-3 xl:order-3">
            <Image
              className="w-full h-auto sm:h-full"
              src={aboutImageLight}
              alt="dark"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
