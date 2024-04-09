"use client";
import Link from "next/link";
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
import { useRef, useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const swiperRef = useRef();

  return (
    <main className="">
      <section className="relative">
        {/* <nav className="flex items-center gap-16 absolute left-[4.2%] 1xl:top-[7%] z-10 bg-[transfarent] text-white">
          <svg
            onClick={() => setIsMobileMenuOpen(true)}
            className="1xl:hidden"
            width="20"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
          {isMobileMenuOpen ? (
            <Link className="text-3xl leading-none" href="/">
              room
            </Link>
          ) : null}
          <ul className="collapse 1xl:visible 1xl:flex gap-7 items-center">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">shop</Link>
            </li>
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <Link href="/">contact</Link>
            </li>
          </ul>
        </nav> */}

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
              <div className="grid grid-cols-1 1xl:grid-cols-[60%,40%]">
                <div className="relative">
                  <Image
                    src={slide.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="hero1"
                    priority
                  />
                  {/* navigation */}
                  <div className="1xl:hidden absolute z-10 right-0 bottom-0 bg-black text-white w-28 h-14 flex justify-center items-center gap-9">
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
                  <div className="px-5 1xl:px-16 py-7 1xl:py-16">
                    <h1 className="mb-3 text-black font-bold text-4xl 1xl:text-5xl">
                      {slide.title}
                    </h1>

                    <p className="text-grey text-sm 1xl:text-base">
                      {slide.description}
                    </p>

                    <div className="flex items-center mt-3 gap-4">
                      <p className="uppercase font-semibold tracking-[1em] text-black">
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
                  <div className="invisible 1xl:visible absolute z-10 left-0 bottom-0 bg-black text-white w-28 h-14 flex justify-center items-center gap-9">
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

        <div className="grid grid-cols-1 1xl:grid-cols-[minmax(max-content,1fr)_auto_minmax(max-content,1fr)]">
          <div>
            <Image src={aboutImageDark} alt="dark" />
          </div>
          <div className="flex flex-col justify-center px-5 sm:px-8 py-8">
            <h4 className="uppercase font-bold text-black tracking-[.2em] sm:tracking-[.5em] mb-2 1xl:mb-3">
              about our furniture
            </h4>
            <p className="text-grey text-sm">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div>
            <Image src={aboutImageLight} alt="dark" />
          </div>
        </div>
      </section>
    </main>
  );
}
