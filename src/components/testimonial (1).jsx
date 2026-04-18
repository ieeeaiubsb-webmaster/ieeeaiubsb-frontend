import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";


const slides = [
  {
    imageSrc: "//ieeeaiubsb.com/wp-content/uploads/2020/09/NBI_1405-1.jpg",
    imageAlt: "image",
    text: "Always hang-out with people smarter than you” – AIUB SB is a pack of smart volunteers with myriad of expertise. Unwavering dedication, engaging activities and persistent drive for excellence set them apart. They are an exemplary student branch not only in Bangladesh but also in the Region 10. Wish they will evolve continually into new heights.",
    name: "Abdullah A.S.H. Saki, ",
    title: "Former Student Activities Coordinator, IEEE Bangladesh Section"
  },
  {
    imageSrc: "//ieeeaiubsb.com/wp-content/uploads/2020/09/NBI_1405-1.jpg",
    imageAlt: "Farah Nazifa",
    text: "I really appreciate the efforts coming from the enthusiastic IEEE AIUB Student Branch volunteers who worked together to make the event of Women Techmakers a successful one. In the near future, we are looking forward to organize more events at your wonderful campus! Best wishes!",
    name: "Farah Nazifa",
    title: "Lead, Google Women Techmakers Bangladesh"
  },
  {
    imageSrc: "//ieeeaiubsb.com/wp-content/uploads/2020/09/NBI_1405-1.jpg",
    imageAlt: "image",
    text: "Congratulations to all of the members of the IEEE AIUB Student Branch! I love reading about all of your achievements in Abozzo. I enjoy reading about the awards you’ve won and the activities you hold like industrial tours, the FREEDM Concept seminar, and STEM events for children. I wish you the best of luck and continued success in your efforts!",
    name: "Justine Spack",
    title: "Online Community Specialist, IEEE Member and Geographic Activities (MGA), Big Media Co"
  },
  {
    imageSrc: "/images/sarangsheikh.jpg",
    imageAlt: "image",
    text: "I have known IEEE people from AIUB SB since 2013. I have always seen this branch creating not just amazing IEEE volunteer/leaders but also great human beings. AIUB is not just a SB, its a process that takes an average student and shape them into a responsible citizen by creating interest for both engineering and community development. I have always been a fan, follower and a supporter to AIUB and I feel really honored when I happen to get chance to assist or guide them with any IEEE related decision. Wish AIUB and its amazing people all the very best for their personal and mutual endeavors.",
    name: "Sarang Shaikh",
    title: "Founder, Humans of IEEE (HOIEEE)"
  },
  {
    imageSrc: "//ieeeaiubsb.com/wp-content/uploads/2020/09/NBI_1405-1.jpg",
    imageAlt: "image",
    text: "It’s an honour to write for AIUB.It was great visiting biggest student branch of Bangladesh section in 2015. I believe the AIUB Student Branch is setting an exemplary role in R10 in terms of teamwork, motivation, volunteering, commitment and innovation.I look forward to the branch team to continue their devotion in raising the bar everyday.",
    name: "Mehvish Zahoor",
    title: "Former Regional Student Representative(RSR), IEEE Region 10(Asia- Pacific)"
  },
]

export default function Testimonial() {
  return (
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <>
            <SwiperSlide>
            <div className="bg-white pt-16 lg:py-24">
              <div className="bg-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                  <div className="relative lg:-my-8">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                    <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                      <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                        <img
                          className="object-cover lg:h-full lg:w-full"
                          src= {slide.imageSrc}
                          alt={slide.imageAlt}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                      <blockquote>
                        <div>
                          <svg
                            className="h-12 w-12 text-white opacity-25"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="mt-6 text-2xl font-medium text-white">
                            {slide.text}
                          </p>
                        </div>
                        <footer className="mt-6">
                          <p className="text-base font-medium text-white">{slide.name}</p>
                          <p className="text-base font-medium text-cyan-100">{slide.title}</p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  )
}
