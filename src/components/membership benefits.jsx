import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "IEEE Xplore Digital Library",
    href: "/images/logo/ieeexplore-01.png",
    description: "All the basics for starting a new business",
    link: "https://ieeexplore.ieee.org/",
    perks: [
      "Access all IEEE electronic publications in one location",
      "Access all IEEE conference papers and journal articles",
      "Convenient access and flexible subscription options",
      "Discounts on single article purchases",
    ],
  },
  {
    name: "IEEE Potentials",
    href: "/images/logo/ieeepotentials-02.png",
    description: "All the basics for starting a new business",
    link: "https://potentialsmagazine.ieee.org/",
    perks: [
      "Access to IEEE Potentials magazine",
      "Discounts on IEEE publications",
      "Discounts on IEEE conferences",
      "Discounts on IEEE products and services",
    ],
  },
  {
    name: "IEEE Job Site",
    href: "/images/logo/ieeejobsite-01.png",
    description: "All the basics for starting a new business",
    link: "https://jobs.ieee.org/",
    perks: [
      "Access to a wide range of jobs",
      "Confidential job postings",
      "Job alerts",
      "Networking opportunities",
    ],
  },
  {
    name: "IEEE Resume Lab",
    href: "/images/logo/ieeeresumelab-01.png",
    description: "All the basics for starting a new business",
    link: "",
    perks: [
      "Access to a variety of resume templates",
      "Access to resume tips and resources",
      "Resume reviewer service",
      "Resume builder service",
    ],
  },
  {
    name: "IEEE Collabratec",
    href: "/images/logo/ieeecollabratec-01.png",
    description: "All the basics for starting a new business",
    link: "https://ieee-collabratec.ieee.org/",
    perks: [
      "Connect and Network with IEEE Technical Experts and Peers",
      "Collaborate with Technology Professionals Globally",
      "Advance Your Research",
      "Find Your Community",
    ],
  },
  {
    name: "IEEE Xtreme",
    href: "/images/logo/ieeextreme-01.png",
    description: "All the basics for starting a new business",
    link: "https://ieeextreme.org/",
    perks: [
      "Global Coding Challenge within 24-hour virtual competition",
      "Innovation and Problem Solving",
      "Networking and Collaboration",
      "Skill Enhancement and Recognition",
    ],
  },
  {
    name: "IEEE Spectrum",
    href: "/images/logo/ieeespectrum-01.png",
    description: "All the basics for starting a new business",
    link: "https://spectrum.ieee.org/",
    perks: [
      "Expert opinion and news for engineering professionals",
      "Global Community of Experts",
      "Professional discussion, webinars, and events",
      "Career advice and job opportunities",
    ],
  },
  {
    name: "IEEE Google Apps",
    href: "/images/logo/ieeegoogleapps-01.png",
    description: "All the basics for starting a new business",
    link: "https://www.ieee.org/membership/products/google-apps.html",
    perks: [
      "A unique IEEE email address (e.g., John.A.Doe@ieee.org)",
      "30 GB of storage",
      "Access to Google Drive, Docs, Sheets, Slides, and more",
      "Collaborate with others in real time",
    ],
  },
];

export default function MembershipBenefits() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
        <div className="grid place-items-center">
          {/* <div className='grid place-items-center'></div> */}
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Membership Benefits
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center text-justify">
            IEEE membership offers a range of benefits, including access to IEEE
            Xplore extensive research, career insights from IEEE Potentials,
            industry-specific job sites, and tools like IEEE ResumeLab for
            creating professional resumes. These resources enhance knowledge,
            career opportunities, and networking for members.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            // eslint-disable-next-line react/jsx-key
            <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200">
              <div className="px-8 pt-8 pb-3 sm:pt-10 grid place-items-center ">
                {/* <h3 className="text-lg font-semibold leading-8 tracking-tight text-cyan-600" id="tier-hobby">Hobby</h3> */}
                <img src={tier.href} alt="" />
                {/* <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">A better workflow</p> */}
              </div>
              <div className="flex flex-1 flex-col p-2">
                <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                  <ul role="list" className="space-y-6">
                    {tier.perks.map((perk) => (
                      // eslint-disable-next-line react/jsx-key
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-cyan-600"
                            x-description="Heroicon name: outline/check"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-6 text-gray-600">
                          {perk}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 grid place-items-center">
                    <a
                      href={tier.link}
                      className="text-base font-semibold leading-7 text-cyan-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
