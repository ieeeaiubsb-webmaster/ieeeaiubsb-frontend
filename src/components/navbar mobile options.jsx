"use client";
import { Fragment, useState, useEffect } from "react";
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

const links = [
  {
    name: "Home",
    href: "/",
    icon: ChartBarIcon,
  },

  {
    name: "Chapters and Affinity Group",
    href: "#",
    icon: ShieldCheckIcon,
    options: [
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
    ],
  },
  {
    name: "Activity",
    href: "#",
    icon: Squares2X2Icon,
    options: [
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
    ],
  },
  {
    name: "Our Team",
    href: "#",
    icon: PlayIcon,
    options: [
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
    ],
  },
  {
    name: "About",
    href: "#",
    icon: CursorArrowRaysIcon,
    options: [
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
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    icon: PhoneIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileOptions() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest(".mobile-menu")) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Transition
        in={menuOpen}
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          {({ close }) => (
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {links.map((item) =>
                      item.options ? (
                        <Disclosure key={item.name}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                <CalendarIcon className="h-6 w-6 flex-shrink-0 text-cyan-600" />
                                <span className="mx-3 text-base font-medium text-gray-900">
                                  {item.name}
                                </span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "" : "rotate-180 transform right-0"
                                  } h-5 w-5 text-purple-500`}
                                />
                              </Disclosure.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                  {item.options.map((option) => (
                                    <Link
                                      key={option.name}
                                      href={option.href}
                                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                      onClick={async () => {
                                        close();
                                      }}
                                    >
                                      <option.icon
                                        className="h-6 w-6 flex-shrink-0 text-cyan-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {option.name}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </Disclosure.Panel>
                              </Transition>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                          onClick={async () => {
                            close();
                          }}
                        >
                          <ChartBarIcon
                            className="h-6 w-6 flex-shrink-0 text-cyan-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      )
                    )}
                  </nav>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </>
  );
}
