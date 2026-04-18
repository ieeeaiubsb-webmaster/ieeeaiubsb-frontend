"use client";
import { Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const about = [
  {
    name: "About IEEE",
    href: "/about-ieee",
    icon: CheckIcon,
  },
  {
    name: "IEEE R10",
    href: "/about-r10",
    icon: CheckIcon,
  },
  {
    name: "IEEE Bangladesh Section",
    href: "/about-ieeebds",
    icon: CheckIcon,
  },
  {
    name: "IEEE AIUB Student Branch",
    href: "/about",
    icon: CheckIcon,
  },
];

const chaptersandaffinitygroup = [
  {
    name: "Computer Society",
    href: "/computer-society",
    icon: CheckIcon,
  },
  {
    name: "Engineering in Medicine and Biology Society",
    href: "/engineering-in-medicine-and-biology-society",
    icon: CheckIcon,
  },
  {
    name: "Industry Applications Society",
    href: "/industry-application-society",
    icon: CheckIcon,
  },
  {
    name: "Microwave Theory and Techniques Society",
    href: "/microwave-theory-techniques-society",
    icon: CheckIcon,
  },
  {
    name: "WIE Affinity Group",
    href: "/women-in-engineering",
    icon: CheckIcon,
  },
];

const activity = [
  {
    name: "Our Events",
    href: "/our-events",
    icon: CheckIcon,
  },
  {
    name: "Achievements",
    href: "/achievements",
    icon: CheckIcon,
  },
  {
    name: "Abozzo",
    href: "/abozzo",
    icon: CheckIcon,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: CheckIcon,
  },
];

const team = [
  {
    name: "Our Team",
    href: "/our-team",
    icon: CheckIcon,
  },
  {
    name: "Membership",
    href: "/membership",
    icon: CheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Options() {
  // const popover = usePopover();
  return (
    <>
      <div className="-my-2 -mr-2 lg:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group
        as="nav"
        className="hidden block space-x-6 lg:flex items-center mr-2"
      >
        {/* ??? */}
        <a
          href="/"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Home
        </a>
        <Popover className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 outline-none"
                )}
              >
                <span>Chapters & AG</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 -ml-4 mt-3 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid min-w-[420px] gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {chaptersandaffinitygroup.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          onClick={async () => {
                            close();
                          }}
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-cyan-600"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group inline-flex items-center bg-white text-base font-medium hover:text-gray-900 outline-none"
                )}
              >
                <span>Activity</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 left-1/2 mt-3 max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {activity.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          onClick={async () => {
                            close();
                          }}
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-cyan-600"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group inline-flex items-center bg-white text-base font-medium hover:text-gray-900 outline-none"
                )}
              >
                <span>Team</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 left-1/2 mt-3 max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {team.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          onClick={async () => {
                            close();
                          }}
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-cyan-600"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group inline-flex items-center bg-white text-base font-medium hover:text-gray-900 outline-none"
                )}
              >
                <span>About</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 left-1/2 mt-3 max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid min-w-[300px] gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {about.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          onClick={async () => {
                            close();
                          }}
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-cyan-600"
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Link
          href="contact"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Contact
        </Link>
      </Popover.Group>
    </>
  );
}
