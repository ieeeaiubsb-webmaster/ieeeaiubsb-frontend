import { AcademicCapIcon, AdjustmentsHorizontalIcon, ArrowPathIcon, BanknotesIcon, BookOpenIcon, ChatBubbleLeftRightIcon, CloudArrowUpIcon, CubeTransparentIcon, CurrencyEuroIcon, FingerPrintIcon, GlobeAltIcon, LifebuoyIcon, LockClosedIcon, NewspaperIcon, PresentationChartBarIcon, RocketLaunchIcon, ServerIcon, StarIcon, TrophyIcon } from '@heroicons/react/24/outline'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

const benefits = [
  {
    name: 'Networking opportunities',
    description: "IEEE Women in Engineering offers a forum for networking between women working in engineering. By becoming a member of this organization, individuals can broaden their professional networks and make connections with like-minded people who might be able to offer insightful advice, support, and mentorship.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Newsletters and magazines',
    description: "Numerous materials, including newsletters, magazines, and journals, are provided by IEEE Women in Engineering which shows it’s collaborations and showcases women’s outstanding achievements. ",
    icon: NewspaperIcon,
  },
  {
    name: 'Awards and recognition',
    description: "Women can use IEEE Women in Engineering as a forum to increase their visibility and respect in the engineering community. Members can present their work, share research, and participate in conversations and activities. In addition, they get prizes for their outstanding achievements.",
    icon: TrophyIcon,
  },
  {
    name: 'Discounted registration',
    description: "They can register to a variety of useful seminars, webinars, and events at discounted rates by being a member of IEEE Women in Engineering.   ",
    icon: BanknotesIcon,
  },
  {
    name: 'Travel grants',
    description: "The IEEE WIE Travel Grant program offers grants to IEEE WIE members so they can present at conferences or other activities that IEEE or IEEE WIE sponsors.",
    icon: CurrencyEuroIcon,
  },
  {
    name: 'Scholarship for Students',
    description: "Members of IEEE Women in Engineering are eligible for several scholarships and grants in different stages like pre-university, undergraduate, and graduate.",
    icon: AcademicCapIcon,
  },
]

function Description() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE WIE?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                IEEE Women in Engineering (WIE) is a global network of IEEE
                members and volunteers committed to promoting women scientists
                and engineers and motivating young women to pursue careers in
                science and engineering. WIE&epos; mission is to support women&epos;
                recruitment and retention in technical disciplines on a global
                scale. We picture a thriving IEEE community made up of both men
                and women who work together to develop for the good of all.
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/logo/WIE-01.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-fuchsia-700 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-fuchsia-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900"
                >
                  Join Us
                </a>
                <a
                  href="https://wie.ieee.org/"
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
                  <stop stopColor="#6b21a8" />
                  <stop offset={1} stopColor="#86198f" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}


const strives = [
  {
    description: "Provide support to ongoing activities and aid in the creation of new IEEE WIE Affinity Groups.",
    icon: LifebuoyIcon,
  },
  {
    description: "Nominate women for IEEE Awards to honor their excellent contributions to electrical and electronics engineering.",
    icon: TrophyIcon,
  },
  {
    description: "Create workshops at significant technical conferences to promote IEEE WIE membership and improve networking.",
    icon: PresentationChartBarIcon,
  },
  {
    description: "Encourage women to take up leadership positions in IEEE governance and to enhance their careers.",
    icon: RocketLaunchIcon,
  },
  {
    description: "Encourage the promotion of female members to the IEEE membership grades of Senior Member and Fellow.",
    icon: StarIcon,
  },
  {
    description: "Encourage the creation of programs and activities that encourage women&epos; enrollment in and retention in engineering programs.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    description: "To mentor young women in junior high and high school, administer the IEEE Student-Teacher and Research Engineer/Scientist (STAR) Program.",
    icon: AcademicCapIcon,
  },
];

function Strive() {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl">
                IEEE WIE Strives to...
              </h1>
              <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                The IEEE WIE aims to honor the remarkable
                accomplishments of women by featuring the most recent webinars,
                events, and program information. Additionally, the weekly
                highlights WIE&epos; partnerships with the IEEE Foundation, IEEE
                ILN, IEEE Reach, etc.
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-800 lg:max-w-none">
                {strives.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="text-gray-600">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-fuchsia-600"
                        aria-hidden="true"
                      />
                      <p className="text-justify">{feature.description}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div className="py-6 lg:m-0 lg:h-full lg:px-0">
            <img
              className="w-full h-[80%] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto"
              src="/images/SPAVe 6.0-695_cropped.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


const publications = [
  {
    name: 'Newsletter',
    description:"IEEE WIE members receive the bi-monthly WIE Exchange newsletter which contains reports on WIE and Affinity Group activities and other relevant WIE information and features opportunities to network, volunteer, and participate in local and global WIE activities. ",
    icon: NewspaperIcon,
  },
  {
    name: 'Magazine.',
    description: "The award-winning 'IEEE Women in Engineering Magazine' includes profiles of women with successful careers in science, technology, engineering, and mathematics, as well as coverage of educational programs that attract young women to those disciplines. ",
    icon: BookOpenIcon,
  },
  {
    name: 'Manga Contest',
    description: "To bridge the gender gap and promote gender diversity, IEEE Women-in-Engineering (WIE) is organizing a Manga story contest. The winners‘ stories will be plotted in the format of Manga comics, which will be socialized with the community through IEEE WIE Newsletter and website.",
    icon: ChatBubbleLeftRightIcon,
  },
]

function Publication() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-fuchsia-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 place-items-center lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl py-2 max-w-fit font-bold tracking-tight bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl">
                Publications & Digital Media
              </h1>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {publications.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-fuchsia-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <p className="text-justify lg: pr-4">{feature.description}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-fuchsia-900/10 ring-1 ring-fuchsia-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-fuchsia-900 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-fuchsia-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_1627.JPG" alt="" />
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

const metrics = [
  { id: 1, stat: '30K+', emphasis: 'Members', rest: 'are part of IEEE WIE.' },
  { id: 4, stat: '100+', emphasis: 'Countries', rest: 'connected from all around the world.' },
  { id: 2, stat: '214', emphasis: 'Sections', rest: 'in total under IEEE.' },
  { id: 3, stat: '958', emphasis: 'Student Branches', rest: 'have WIE Affinity Groups.' },
]

function Stats() {
  return (
    <div className="bg-fuchsia-900 grid place-items-center">
      <div className="relative max-w-7xl">
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="/images/SPAVe 6.0-169_cropped.jpg"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-fuchsia-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 h-32 bg-gradient-to-b from-fuchsia-900 right-0 xl:h-full xl:w-32 xl:bg-gradient-to-l"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-base font-semibold text-white">
              Valuable Metrics
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white">
              IEEE WIE by the Numbers
            </p>
            <p className="mt-5 text-lg text-justify text-fuchsia-300">
              IEEE Women in Engineering (WIE) has experienced significant growth
              since its inception in 1994. This global network encourages women
              to pursue careers in engineering, promoting diversity and
              inclusion. It provides support through various programs, events,
              and initiatives, fostering a vibrant community for female
              engineers worldwide.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-white">
                    {item.stat}
                  </span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">
                      {item.emphasis}
                    </span>{" "}
                    {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-fuchsia-700">
            Benefits
          </h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Women in Engineering?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            There are several reasons why one might consider joining IEEE Women
            in Engineering
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-600">
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
                      //change
                      href='https://wie.ieee.org/'
                      className="text-base font-semibold leading-7 text-fuchsia-600"
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


function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-900">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-fuchsia-900">
            Embark on a journey of limitless possibilities.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-fuchsia-100">
          Explore the frontiers of innovation, share knowledge, and collaborate to advance technology for humanity.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-fuchsia-50 py-3 px-5 text-base font-medium text-fuchsia-700 hover:bg-fuchsia-200 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}


export default function WIE() {
  return (
    <>
      <Description />
      <Strive />
      <Publication />
      <Stats />
      <Benefits> </Benefits>
      <JoinUs />
    </>
  )
}