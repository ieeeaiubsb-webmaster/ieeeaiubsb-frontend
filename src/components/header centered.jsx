"use client";
import { useState } from "react";
import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HeaderCentered() {
  const [showNotification, setShowNotification] = useState(true);

  const dismissNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      {showNotification && (
        <div className="flex flex-wrap relative bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-800   text-white">
          <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-1 items-center pr-16 sm:px-16 sm:text-center">
              <span className="rounded-lg  p-2">
                <MegaphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>

              <p className="font-medium text-neutral-50">
                <span className="md:hidden">
                  Membership Drive 2025 is here!
                </span>
                <span className="hidden md:inline">
                  Join the largest technical community in the world.
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdoSsNjA9hMXQeF9veebffdgR6IcHabzlR0B0m3KlQ9BUWyzw/viewform"
                    className="font-bold text-white underline"
                    target="_blank"
                  >
                    Learn more
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </span>
              </p>
              <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
                <button
                  type="button"
                  className="flex rounded-md p-2 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={dismissNotification}
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
