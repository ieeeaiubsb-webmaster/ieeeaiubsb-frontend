import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const startTime = {
  ST0800: 2,
  ST0915: 37,
  ST0940: 50,
  ST1030: 71,
  ST1120: 93,
  ST1145: 105,
  ST0100: 139,
  ST0215: 174,
  ST0240: 185,
  ST0330: 201
}

const classStyle = {
  regular: {
    span: 30,
    color: 'bg-blue-50',
    hover: 'bg-blue-100',
  },
  theory: {
    span: 48,
    color: 'bg-green-50',
    hover: 'bg-green-100',
  },
  lab: {
    span: 69,
    color: 'bg-pink-50',
    hover: 'bg-pink-100',
    text_dark: 'text-pink-700',
    text_light: 'text-pink-500',
  }
}

const classes = {
  R0800: {
    id: 'R0800',
    time: '08:00 AM - 09:15 AM',
    gridRow: startTime.ST0800,
    style: classStyle.regular,
  },
  //...all regular classes
  T0940: {
    id: 'T0940',
    time: '08:00 AM - 09:40 AM',
    gridRow: startTime.ST0940,
    style: classStyle.theory,
  },
  //...all theory classes
  L0100: {
    id: 'L0130',
    time: '01:00 PM - 03:30 PM',
    gridRow: startTime.ST0130,
    style: classStyle.lab,
  }
  //...all lab classes
}

const schedule = [
  {
    day: 1,
    user: 'user1',
    className: classes.R800,
  }
]
 const day = [1,2,3,4,5]

export default function Routine() {
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
        <h1 className="text-lg font-semibold text-gray-900">
          <time dateTime="2022-01">January 2022</time>
        </h1>
      </header>
      <div ref={container} className="isolate flex flex-auto flex-col overflow-auto bg-white">
        <div style={{ width: '165%' }} className="flex max-w-full flex-none flex-col max-w-full">
          <div
            ref={containerNav}
            className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 pr-8"
          >
            <div className="-mr-px grid grid-cols-5 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500">
              <div className="col-end-1 w-14" />
              <div className="flex items-center justify-center py-3">
                Sunday
              </div>
              <div className="flex items-center justify-center py-3">
                Monday
              </div>
              <div className="flex items-center justify-center py-3">
                Tuesday
              </div>
              <div className="flex items-center justify-center py-3">
                Wednesday
              </div>
              <div className="flex items-center justify-center py-3">
                Thursday
              </div>
            </div>
          </div>
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: 'repeat(21, minmax(4rem, 2fr))' }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    8AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    9AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    12PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    1PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    2PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    3PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    4PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    5PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    6PM
                  </div>
                </div>
                <div />
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 divide-x divide-gray-100 grid grid-cols-5">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full w-8" />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-5 pr-8"
                style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto' }}
              >
                {
                    Object.values(classes).map((_class, index) => {
                      let list = [];
                      day.forEach(_day => {
                       list.push(<li id={`${_class.id}`} className={`relative mt-px flex col-start-${_day}`} style={{ gridRow: `${_class.gridRow} / span ${(_class.style.span)}` }}></li>)
                      });
                      return list;
                    })
                }
                 <li className="relative z-30 mt-px flex col-start-4" style={{ gridRow: '37 / span 35' }}>
                  <div
                    
                    className={`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg ${classStyle.regular.color} p-2 text-xs leading-5 hover:${classStyle.regular.hover}`}
                  >
                    <p className="order-1 font-semibold text-blue-700">Breakfast</p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-01-12T06:00">6:00 AM</time>
                    </p>
                  </div>
                </li>
                
                <li className={`relative z-20 mt-px flex col-start-${4}`} style={{ gridRow: `2 / span ${classStyle.theory.span}` }}>
                  <div

                    className={` hover:z-20 group absolute inset-1 flex flex-col overflow-y-auto rounded-lg ${classStyle.theory.color} p-2 text-xs leading-5 hover:${classStyle.theory.hover}`}
                  >
                    <p className="order-1 font-semibold text-pink-700">Flight to USA</p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-12T07:30">7:30 AM</time>
                    </p>
                  </div>
                </li>
                <li className={`relative z-10 overflow-hidden mt-px flex col-start-${4}`} style={{ gridRow: `80 / span ${classStyle.lab.span}` }}>
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-full px-1 sm:px-2"
                  >
                    <SwiperSlide>
                      <div

                        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      >
                        <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                        <p className="text-pink-500 group-hover:text-pink-700">
                          <time dateTime="2022-01-12T07:30">7:30 AM</time>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div

                        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      >
                        <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                        <p className="text-pink-500 group-hover:text-pink-700">
                          <time dateTime="2022-01-12T07:30">7:30 AM</time>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div

                        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      >
                        <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                        <p className="text-pink-500 group-hover:text-pink-700">
                          <time dateTime="2022-01-12T07:30">7:30 AM</time>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div

                        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      >
                        <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                        <p className="text-pink-500 group-hover:text-pink-700">
                          <time dateTime="2022-01-12T07:30">7:30 AM</time>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div

                        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      >
                        <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                        <p className="text-pink-500 group-hover:text-pink-700">
                          <time dateTime="2022-01-12T07:30">7:30 AM</time>
                        </p>
                      </div>
                    </SwiperSlide><SwiperSlide>
                      <div

                        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      >
                        <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
                        <p className="text-pink-500 group-hover:text-pink-700">
                          <time dateTime="2022-01-12T07:30">7:30 AM</time>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div

                        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                      >
                        <p className="order-1 font-semibold text-pink-700">Flight to USA</p>
                        <p className="text-pink-500 group-hover:text-pink-700">
                          <time dateTime="2022-01-12T07:30">7:30 AM</time>
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </li> 
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
