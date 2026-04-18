"use client";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import Options from "./navbar options";
import MobileOptions from "./navbar mobile options";

export default function NavBar2() {
  return (
    <>
      <div className="bg-white shadow ">
        <Popover className="relative shadow">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center space-x-4 justify-between py-6 lg:justify-center">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">IEEEAIUBSB</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/images/logo/Branch logo-01.png"
                    alt=""
                  />
                </a>
              </div>
              <Options />
              {/* <div className="hidden items-center justify-end space-x-6 lg:flex lg:flex-1 lg:w-0">
                <Link
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 invisible"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-sky-700 py-2 px-4 text-base font-medium text-white hover:bg-sky-800 invisible"
                >
                  Sign up
                </Link>
              </div> */}
            </div>
          </div>
          <MobileOptions />
        </Popover>
      </div>
    </>
  );
}
