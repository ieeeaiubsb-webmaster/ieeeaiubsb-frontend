// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MissionAndVision from '@/components/MnV'
import MembershipBenefits from '@/components/membership benefits'
import JoinUs from '@/components/join us'
import WhyJoinIEEE from '@/components/whyjoinieee'

function Description() {
  return (
    <div className="relative -z-10 isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)"
            fillOpacity=".15"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative py-12 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* <div className="bg-white"> */}
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
              <div className="text-center">
                <p className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                  What is IEEE?
                </p>
                <p className="mt-5 text-justify mx-auto text-xl text-gray-500">
                  IEEE is a worldwide organization of professionals committed to
                  using technology to advance humanity. IEEE is renowned for
                  creating and disseminating industry standards, hosting
                  conferences, and offering opportunities for continuing
                  education and career advancement. Electrical engineering,
                  computer science, telecommunications, biomedical engineering,
                  and many other technological subjects are covered by IEEE,
                  which has a broad scope. The association is made up of
                  experts, researchers, students, and practitioners in different
                  sectors who work together to advance technical advancement and
                  address societal concerns. The creation of standards is one of
                  IEEE&epos; major contributions and these standards are essential
                  to several industries and sectors, including
                  telecommunications, power systems, the automotive industry,
                  and the healthcare sector. IEEE also produces technical
                  content in a variety of formats, including journals,
                  magazines, and conference proceedings in addition to setting
                  standards and hosting conferences. As a result of these
                  activities, technology and scientific knowledge are advanced
                  and researchers and practitioners can share their most recent
                  discoveries and information. All things considered, IEEE plays
                  a critical role in shaping the technological landscape,
                  promoting professional collaboration, and fostering
                  discoveries that benefit society. To improve the welfare of
                  individuals and communities worldwide, it promotes knowledge
                  exchange, the development of industrial standards, and the
                  extension of technological expertise.
                </p>
              </div>
            </div>
            {/* </div> */}
            <div className="grid place-items-center my-12">
              <img src="/images/logo/IEEE-01.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


function Glance() {
  return (
    <div className="bg-white grid place-items-center py-24 my-12">
      <div className="relative max-w-7xl px-6">
        <div className="h-56 rounded-t-lg lg:rounded-l-lg overflow-hidden shadow-lg bg-cyan-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/images/ieee-stat.jpg"
            alt="Support team"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
            <p className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
              IEEE At A Glance
            </p>
            <p className="mt-6 text-justify text-lg text-gray-500">
              The biggest technical professional association in the world, IEEE
              works to advance technology for the good of all. Through its
              frequently recognized publications, conferences, technology
              standards, professional and educational activities, and
              membership, IEEE inspires a global community.
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="grid grid-cols-4 gap-x-4 sm:gap-y-12 gap-y-8 place-items-center">
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Members
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    400k+
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Articles
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    5M+
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Societies
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    39
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Sections
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    340
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Conferenes
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    2000+
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Standards
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    1000+
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Projects
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    1000+
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-2 text-center text-sm md:text-base font-medium text-gray-500">
                    Regions
                  </dt>
                  <dd className="order-1 text-center text-2xl font-bold text-cyan-600 sm:text-3xl sm:tracking-tight">
                    10
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Conference() {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-20 lg:px-0">
          <div>
            <div className="mt-6">
              <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Conference & Events
                </h1>
                <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                  The Institute of Electrical and Electronics Engineers, or
                  IEEE, is a professional organization that organizes a variety
                  of conferences and other events in the areas of engineering,
                  technology, and computer science. As an example, consider the
                  IEEE International Conference on Big Data, IEEE International
                  Conference on Robotics and Automation, IEEE International
                  Symposium on Circuits and Systems, and the IEEE Global
                  Communications Conference. These are only a handful of the
                  conferences and events that IEEE sponsors in relation to many
                  areas of electrical engineering, electronics, and computer
                  science.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.ieee.org/conferences"
                    className="rounded-md bg-cyan-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
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
              alt="Customer profile user interface"
              src='/images/ieee-conference.jpg'
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cyan-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
                  Publications
                </h1>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                  The leading journals, transactions, letters, and magazines in
                  electrical engineering, computing, biotechnology,
                  telecommunications, power and energy, as well as dozens of
                  other technologies, are published by IEEE. IEEE journals
                  continue to hold positions at the top of their respective
                  fields and are the most frequently cited in US and European
                  patents. Additionally, the IEEE publishes over 1,200
                  cutting-edge conference proceedings each year, which are
                  regarded by both academia and business as the most significant
                  compilation of papers in the fields of electrical engineering,
                  computer science, and related fields.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.ieee.org/publications"
                    className="rounded-md bg-cyan-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
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
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-cyan-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-cyan-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img
                      src="/images/ieee-publication.jpg"
                      alt=""
                    />
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


export default function IEEE() {
  return (
    <>
      <Description />
      <MissionAndVision />
      <Glance />
      <Publication />
      <Conference />
      <WhyJoinIEEE />
      <MembershipBenefits />
      <JoinUs />
    </>
  )
}