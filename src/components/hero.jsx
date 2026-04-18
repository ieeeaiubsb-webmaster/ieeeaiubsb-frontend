"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    imageSrc: "/images/Spave7.0.png",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "SPAVE 7.0",
  },
  {
    imageSrc: "/images/1_SPAVe 6.0-340.jpg",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "SPAVE 6.0",
  },
  {
    imageSrc: "/images/ieee-day-23-314-edit2.jpg",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "IEEE Day 2023",
  },
  {
    imageSrc: "/images/orientation-2023_19-cropped-2.jpg",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "Members Orientation 2023",
  },
  {
    imageSrc: "/images/4_NBI_1819.JPG",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "SPAW 2.0",
  },
  {
    imageSrc: "/images/5_icrest-33.jpg",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "ICREST 2023",
  },
  {
    imageSrc: "/images/6_NBI_0481.JPG",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "Industry Tour",
  },
  {
    imageSrc: "/images/7_NBI_0654.JPG",
    imageAlt: "image",
    heading: "IEEE AIUB Student Branch",
    subheading: "Robo Soccer",
  },
];

export default function Hero() {
  return (
    <div className="relative my-2">
      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> */}
      <div className=" -bottom-5 overflow-hidden bg-cyan-50">
        <Image
          alt=""
          src="https://img.freepik.com/free-vector/blue-background-with-abstract-waves_1393-258.jpg"
          // decoding="async"
          // data-nimg="future"
          className="absolute top-0 w-full h-full object-cover object-center opacity-10"
          // loading="lazy"
          // style="color:transparent"
          width={918}
          height={1495}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <>
            <SwiperSlide>
              <div className=" mx-auto max-w-7xl bottom-2 sm:px-6 lg:px-8">
                <div className="relative shadow-xl lg:h-[80vh] max-h-[720px] sm:overflow-hidden sm:rounded-2xl">
                  <div className="absolute inset-0 aspect-w-16 aspect-h-9">
                    <Image
                      className="h-full w-full object-cover "
                      src={slide.imageSrc}
                      alt={slide.subheading}
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-sky-100 mix-blend-multiply" />
                  </div>
                  <div className="relative h-full pb-12 flex flex-col justify-end">
                    <h1 className="text-center text-2xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      {/* <span className="block text-gray-200">
                        {slide.heading}
                      </span> */}
                      <span className="block text-cyan-400">
                        {slide.subheading}
                      </span>
                    </h1>
                    {/* <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                          amet fugiat veniam occaecat fugiat aliqua.
                        </p> */}
                    <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                      <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                        <a
                          href="https://www.ieee.org/"
                          className="flex items-center justify-center rounded-md lg:border lg:border-transparent bg-white px-4 lg:py-3 text-base font-medium text-cyan-700 shadow-sm hover:bg-cyan-50 invisible md:visible "
                        >
                          Get started
                        </a>
                        <a
                          href="/membership"
                          className="flex items-center justify-center rounded-md border border-transparent bg-cyan-500 bg-opacity-60 py-1 text-sm font-medium text-white shadow-sm hover:bg-opacity-70 sm:text-base md:visible invisible"
                        >
                          Join Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
