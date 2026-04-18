import { ArrowPathIcon, CloudArrowUpIcon, ComputerDesktopIcon, FingerPrintIcon, HomeModernIcon, LifebuoyIcon, LockClosedIcon, NewspaperIcon, PresentationChartBarIcon, PresentationChartLineIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Informative Meetings, Seminars and Conferences.',
    description: "By personally attending chapter meetings, seminars, and regional, national, and international conferences—all of which can be found on the Events and Conferences page—you will have the chance to converse with the leading industrial experts.",
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Valuable Professional Publications.',
    description: "By supporting a variety of publications and journals within its technical specialty, IEEE IAS fosters the link between professional knowledge and practice. Working Groups are active throughout the Society, and the IAS is one of the major contributors to IEEE Standards.",
    icon: NewspaperIcon,
  },
  {
    name: 'Advance Your Industry.',
    description: "An important benefit for IAS members is the chance to individually improve your industry. More than 25% of all IEEE industrial standards are developed by committees within IAS. Four technical departments, each servicing a significant industry sector, bring experts together to further the field&epos; objectives.",
    icon: HomeModernIcon,
  },
  {
    name: 'Community of Professionals.',
    description: "The benefits of being an IAS member go beyond what is discussed in technical journals or during conference sessions. It results from actively participating in a community of young and experienced engineers who are connected by a shared passion. It includes developing a network of business contacts and keeping abreast of developments in the industry. ",
    icon: UserGroupIcon,
  },
]


function Example() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE IAS?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                The IEEE Industry Applications Society (IAS) stands out from the
                other IEEE societies because they bridge theory and practice,
                advancing the work of academics and other engineers while
                establishing the standards for its implementation. There are
                many chances to provide you during your career, from networking
                with other experts in our field to developing your professional
                abilities and traits to contributing to mission-driven
                activities. Join global organization, which is run by volunteers
                in the business sector and has members from all around the
                world.
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/logo/IAS-01.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-green-600 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Join Us
                </a>
                <a
                  href="https://ias.ieee.org/"
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
                  <stop stopColor="#148b44" />
                  <stop offset={1} stopColor="#37b54a" />
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
    <div className="bg-white py-12 sm:mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-700">Benefits</h2>
          <p className="mt-2 p-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
            Why Join IEEE Industry Applications Society?
          </p>
          <p className="mt-8 text-lg text-justify leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus quisquam et delectus nostrum nam atque numquam suscipit nesciunt eligendi sapiente vero accusantium explicabo laudantium quo, hic dolorem aperiam cupiditate!

          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl mt-18">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:max-w-none lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <p className="mt-2 text-base text-justify leading-7 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



function Conference() {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
          <div>
            <div className="mt-6">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent sm:text-5xl">
                  Conferences & Events
                </h1>
                <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                  In addition to providing support with planning, forecasting,
                  and the final financial submission, this department makes sure
                  that all IEEE-required paperwork is delivered on time and is
                  available to the conference organizers for guidance on IEEE
                  rules and regulations. They host conferences on relevant
                  subjects. As long as one of these organizations is the sole
                  sponsor, IAS members are eligible to register at member rates
                  for any meetings, conferences, or seminars that they organize.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://ias.ieee.org/conferences"
                    className="rounded-md bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
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
              src="/images/NBI_6900.JPG"
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent sm:text-5xl">
                  Publications
                </h1>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                  The society&epos;s publishing activities are handled by the
                  Publications Department. This involves putting out the IAS
                  Newsletter, Industry Applications Magazine, and IEEE
                  Transactions on Industry Applications. IAS also sponsors a
                  variety of journals, transactions, and magazines in
                  collaboration with other organizations. The Technical
                  Department and Technical Committees serve as the foundation
                  for operations flagship publications, as they do for other
                  elements of IAS. The Paper Review Chairs of each Technical
                  Committee (TCPRC) are the focal point of the distinctive
                  editorial system that governs IAS.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://ias.ieee.org/publications"
                    className="rounded-md bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
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
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-green-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_7088.JPG" alt="" />
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


const educationFeatures = [
  {
    name: 'IEEE IAS Expert Webinars ',
    description: "The foremost authorities in their fields who are relevant to the IAS membership will deliver these technical webinars. The series began in the middle of 2015, and you can watch previous webinars whenever it&epos; convenient for you. Future webinars will be available in a live setting where participants can prepare questions in advance to ask the presenter. ",
    icon: ComputerDesktopIcon,
  },
  {
    name: 'IEEE IAS Young Professional (YP) Webinars ',
    description: "Several webinars are available from IEEE IAS that were created by and for students and young professionals. These IAS webinars, which concentrate on the younger members, are accessible to everyone who has a keen interest in the subject matter. Anyone, IAS member or not, may also access them. Program planning for the IEEE IAS YP Webinars is currently underway.",
    icon: PresentationChartLineIcon
  },
  {
    name: 'Mentoring Resource',
    description: "The IAS Magazine&epos; Pathways articles, which show how some IAS young professionals are finding their way to fulfilling careers, can be used as an e-mentoring tool. Perhaps one of these tales can motivate or inspire you on your own professional path. To get a summary of the articles and links to read any of them, kindly click on the link below.",
    icon: LifebuoyIcon
  }
]

function Education() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-800">
              Everything you need
            </h2>
            <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
              Education
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600 text-justify">
              The IAS Education Department oversees assessing the educational
              options available to IAS members. With the variety of educational
              choices provided by the organization and IEEE, you have a ton of
              opportunities to remain on top of things both technically and
              professionally.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 lg:gap-y-16">
            {educationFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <feature.icon
                    className="absolute top-1 left-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <p className="mt-2 text-justify">{feature.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}



function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-800">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-green-900">
            Embark on a journey of limitless posibilities.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-green-100">
          Explore the frontiers of innovation, share knowledge, and collaborate to advance technology for humanity.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-50 py-3 px-5 text-base font-medium text-green-700 hover:bg-green-100 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}


export default function IAS() {
  return (
    <>
      <Example />
      <Conference />
      <Publication />
      <Education />
      <Benefits />
      <JoinUs />
    </>
  )
}