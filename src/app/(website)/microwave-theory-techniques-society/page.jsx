import {
  AcademicCapIcon,
  ArrowPathIcon,
  BanknotesIcon,
  CloudArrowUpIcon,
  CurrencyDollarIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  LockClosedIcon,
  NewspaperIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

const benefits = [
  {
    name: "Professonal Networking",
    description:
      "IEEE Microwave Theory and Techniques Society (MTTS) provides a platform for professionals to connect and collaborate with like-minded individuals, fostering valuable networking opportunities within the microwave and RF community.",
    icon: GlobeAltIcon,
  },
  {
    name: "Publications and Education Activities",
    description:
      "MTTS offers access to high-quality publications, including journals and conference proceedings, as well as educational resources, enabling members to stay updated with the latest research and advancements in the field.",
    icon: NewspaperIcon,
  },
  {
    name: "Discounts on IEEE/Wiley Books",
    description:
      "Members enjoy exclusive discounts on IEEE and Wiley publications, allowing them to access a wealth of technical literature at reduced prices.",
    icon: BanknotesIcon,
  },
  {
    name: "Discount for Conferences Registration",
    description:
      "MTTS members receive discounted rates for attending conferences, symposiums, and workshops, facilitating their participation in key industry events.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "GOOGLEAPPS@IEEE",
    description:
      "MTTS provides members with access to Google Apps, facilitating efficient communication and collaboration among members using tools such as Gmail, Google Drive, and Google Calendar.",
    icon: SquaresPlusIcon,
  },
  {
    name: "Scholarship for Students",
    description:
      "The society offers scholarships to support and encourage students pursuing studies and research in the field of microwave theory and techniques, empowering the next generation of RF and microwave professionals.",
    icon: AcademicCapIcon,
  },
];

function Description() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE MTTS?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                The IEEE Microwave Theory and Techniques Society (MTTS) stands
                as an illustrious and influential global community passionately
                committed to propelling the frontiers of microwave and radio
                frequency (RF) technologies to unprecedented heights. Steeped in
                a legacy of pioneering breakthroughs and unwavering excellence,
                MTTS serves as a dynamic platform where brilliant minds from all
                corners of the world converge to explore, collaborate, and
                exchange visionary ideas. Researchers, seasoned professionals,
                and aspiring students alike find a nurturing environment within
                MTTS, fostering an atmosphere of innovation and knowledge
                sharing that resonates throughout the realm of wireless
                communications and beyond. This prestigious society acts as a
                beacon of progress, championing the development of cutting-edge
                technologies, and steering the course of wireless connectivity
                towards an era of boundless possibilities. By uniting the
                brightest minds and promoting a culture of exploration, MTTS
                heralds a future where communication knows no bounds,
                transforming how the world connects and thrives.
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/logo/MTTS-01.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-sky-800 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                >
                  Join Us
                </a>
                <a
                  href="https://mtt.org"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1200 878"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5b21b6" />
                  <stop offset={1} stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-700">
            Benefits
          </h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Engineering in Medicine and Biology Society?
          </h1>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            Joining MTTS (IEEE Microwave Theory and Techniques Society) opens
            doors to a world of opportunities in microwave and radio frequency
            (RF) technologies. As a member, you gain access to a vibrant global
            community of researchers, professionals, and students, fostering
            collaboration and idea exchange. Stay updated with cutting-edge
            innovations, advance your career, and contribute to shaping the
            future of wireless communications and beyond.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-justify">
                    {feature.description}
                  </p>
                  <p className="mt-6">
                    <a
                      // href={feature.href}
                      href="https://mtt.org"
                      className="text-base font-semibold leading-7 text-sky-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Conference() {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-24 lg:px-0">
          <div>
            <div>
              {/* <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-sky-800 to-blue-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span> */}
            </div>
            <div className="mt-6">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl">
                  Conferences & Events
                </h1>
                <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                  At IEEE MTTS, technical gatherings bring together experts and
                  enthusiasts from various disciplines, creating a vibrant
                  environment to present cutting-edge research, share
                  breakthroughs, and discuss emerging trends.
                </p>
                <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                  The IEEE MTTS International Microwave Symposium (IMS) is one
                  of the most prominent and highly regarded conferences in the
                  field of microwave theory and techniques. Organized by the
                  IEEE Microwave Theory and Techniques Society (MTTS), the IMS
                  attracts researchers, engineers, and professionals from around
                  the world.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://mtt.org/mtt-s-sponsored-conferences/"
                    className="rounded-md bg-sky-800 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                  >
                    Learn More
                  </a>
                  {/* <a
                    href="#"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div className="py-6 lg:m-0 lg:h-full lg:px-0">
            <img
              className="w-full h-[80%] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto"
              src="/images/NBI_7122.JPG"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Publication() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 place-items-center lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl">
                  Publications
                </h1>
                <p className="mt-6 lg:pr-5 text-lg text-justify leading-8 text-gray-600">
                  The MTT-S Book Series sponsored by the MTT Society and
                  co-published by IEEE and John Wiley is the leading series on
                  microwave and wireless component technology. The Society has
                  extensive Digital Products including Multimedia Products. All
                  this has been made possible by volunteers, authors, and
                  readers like you. The MTT-S publish monthly e-Newsletter and
                  quarterly Student Newsletter which announcements of upcoming
                  microwave events and deadlines for nominations, applications
                  and calls for papers. IT also publishes peer reviewed papers
                  in IEEE Transactions on Microwave Theory and Techniques, IEEE
                  Transactions on Terahertz Science and Technology, IEEE
                  Microwave and Wireless Technology Letters, IEEE Journal of
                  Microwaves (Open Access) and IEEE Microwave Magazine that
                  focus on that part of engineering and theory associated with
                  microwave/millimeter-wave technology and components,
                  electronic devices, guided wave structures and theory,
                  electromagnetic theory, Radio Frequency Hybrid and Monolithic
                  Integrated Circuits, including mixed-signal circuits, and
                  systems from a few MHz to THz.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://mtt.org/publications"
                    className="rounded-md bg-sky-800 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                  >
                    Learn More
                  </a>
                  {/* <a
                    href="#"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-sky-800/10 ring-1 ring-sky-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-sky-800 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_7180.JPG" alt="" />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-800">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-sky-900">
            Embark on a journey of limitless possibilities.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-sky-100">
          Explore the frontiers of innovation, share knowledge, and collaborate
          to advance technology for humanity.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-50 py-3 px-5 text-base font-medium text-sky-700 hover:bg-sky-100 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}

export default function MTTS() {
  return (
    <>
      <Description />
      <Conference />
      <Publication />
      <Benefits />
      <JoinUs />
    </>
  );
}
