import React from "react";

const years = [
  { year: 2025 },
  { year: 2024 },
  { year: 2023 },
  { year: 2022 },
  { year: 2021 },
  { year: 2020 },
  { year: 2019 },
  { year: 2018 },
  { year: 2017 },
  { year: 2016 },
  { year: 2015 },
  { year: 2014 },
  { year: 2013 },
  // More committees...
];

const committees = [
  {
    logo: "/images/logo/executive.png",
    name: "Executive Committee",
    href: "/executive-committee",
  },
  {
    logo: "/images/logo/volunteer.png",
    name: "Volunteers",
    href: "/volunteers",
  },
  {
    logo: "/images/logo/CS-icon.png",
    name: "CS Committee",
    href: "/cs-committee",
  },
  {
    logo: "/images/logo/IAS-2ND-01.png",
    name: "IAS Committee",
    href: "/ias-committee",
  },
  {
    logo: "/images/logo/EMBS 1st-01.png",
    name: "EMBS Committee",
    href: "/embs-committee",
  },
  {
    logo: "/images/logo/MTTS-icon.png",
    name: "MTTS Committee",
    href: "/mtts-committee",
  },
  {
    logo: "/images/logo/WIE-icon.png",
    name: "WIE Committee",
    href: "/wie-committee",
  },
];

export default function Panel(props) {
  let linkPrefix = "/our-team";
  if (props.year) linkPrefix = linkPrefix + "/" + props.year;
  // const year = props.year
  // if(year>'2022' || year<'2013')
  //   return (
  //     <>
  //       <div className="grid place-items-center p-8">
  //         <p className="mt-1 text-4xl text-center font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
  //           Not Found!
  //         </p>
  //         <img className='max-w-xl w-full' src="/images/icon/warning.gif" alt="" />
  //       </div>
  //     </>
  //   );

  return (
    <>
      <p className="mt-1 text-4xl text-center font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
        Our Team
      </p>
      <div className="mt-6 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-4 lg:mt-8">
        {committees.map((committee, index) => (
          <a
            key={index}
            href={linkPrefix + committee.href}
            className="grid grid-cols-1 gap-y-4 justify-items-center max-w-sm h-full w-full  p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100"
          >
            <img className="h-32 text-center" src={committee.logo} alt="" />
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-600 hover:text-gray-900">
              {committee.name} {props.year}
            </h5>
          </a>
        ))}
        <a
          href="#prev"
          className="text-base font-semibold leading-7 text-cyan-600 grid place-items-center"
        >
          {/* <div>
            View more <span aria-hidden="true">→</span>
          </div> */}
        </a>
      </div>

      <p className="mt-20 text-4xl text-center font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
        Previous Committees
      </p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-4 md:grid-cols-4 lg:mt-8">
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> */}
        {years.map((year) => (
          // eslint-disable-next-line react/jsx-key
          <div className="relative w-full flex items-center justify-center space-x-3 overflow-hidden rounded-lg border border-gray-300 bg-white px-auto py-5 shadow-sm hover:border-gray-400">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <a href={"/our-team/" + year.year} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-2xl font-bold text-gray-600">{year.year}</p>
              </a>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </>
  );
}
