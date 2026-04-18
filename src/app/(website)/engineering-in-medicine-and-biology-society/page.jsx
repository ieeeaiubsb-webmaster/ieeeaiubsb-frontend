import { AcademicCapIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, NewspaperIcon, UserGroupIcon } from '@heroicons/react/24/outline'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]


function Example() {
  return (
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE EMBS?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                The IEEE Engineering in Medicine and Biology Society (EMBS)
                stands as a vibrant and globally connected international
                society, bringing together a diverse community of biomedical
                engineers. At its core, EMBS is dedicated to bridging the realms
                of engineering, biology, and medicine, where cutting-edge
                innovations thrive. By seamlessly integrating engineering
                principles and methodologies into the fabric of medical and
                biological sciences, EMBS paves the way for groundbreaking
                advancements with far-reaching implications for human health and
                well-being. Members of this esteemed society gain unparalleled
                access to a rich tapestry of resources, including a vast network
                of likeminded professionals, pioneering practices, invaluable
                information, and a wealth of transformative ideas and
                perspectives. EMBS serves as an epicenter of progress, where the
                brightest minds unite to shape the future of science, unlocking
                new frontiers of knowledge, and revolutionizing healthcare for
                generations to come.
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/logo/EMBS-01.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-purple-600 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Join Us
                </a>
                <a
                  href="https://www.embs.org/"
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


function Conference() {
  return (
    <div className="mx-auto max-w-7xl px-6 mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div>
              {/* <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span> */}
            </div>
            <div className="mt-6">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-sky-500 to-purple-900 bg-clip-text text-transparent sm:text-5xl">
                  Conferences & Events
                </h1>
                <p className="mt-6 text-lg leading-8  text-justify text-gray-600">
                  The IEEE EMBS organizes a wide range of conferences and events
                  that play a crucial role in advancing the field of biomedical
                  engineering. These gatherings provide a platform for
                  researchers, practitioners, and industry experts to exchange
                  knowledge, present their latest findings, and foster
                  collaborations. EMBC, the annual conference of the Society is
                  designed as a general topic conference with multiple technical
                  themes. We have a vibrant student and young professional (post
                  grad) participation in the General Conference. Attendees range
                  from high school students to senior industry and academic
                  researchers. EMB Special Topic Conferences are designed to
                  create a high quality, technological event with leading
                  technology experts. Attendees range from graduate students to
                  senior industry and academic researchers. All EMBS Conference
                  Proceedings are published in IEEE Xplore, a digital library of
                  the IEEE. EMBS also co-sponsors events with other IEEE
                  Societies. Additionally, several Conference Proceedings of
                  EMBS Conferences are indexed in Medline/PUBmed, Elsevier
                  (Compendex, ScienceDirect and Scopus), Google Scholar, INSPEC,
                  CiteSeerX and Web of Science.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.embs.org/events"
                    className="rounded-md bg-purple-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
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
              src="/images/NBI_7228.JPG"
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl max-w-fit font-bold tracking-tight bg-gradient-to-r from-sky-500 to-purple-900 bg-clip-text text-transparent sm:text-5xl">
                  Publications
                </h1>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                  IEEE EMBS offers a range of prestigious publications that
                  cover diverse areas of biomedical engineering and healthcare
                  technology and is regarded as the leading publisher of
                  original research in biomedical engineering. We have 11
                  technical journals and transactions, including the
                  award-winning IEEE PULSE Magazine, which attracts a broad
                  readership, with its general and technical articles.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.embs.org/publications"
                    className="rounded-md bg-purple-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
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
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-purple-600/10 ring-1 ring-purple-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-purple-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-purple-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_7071.JPG" alt="" />
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

const benefits = [
  {
    name: 'Technical community',
    description: 'IEEE Engineering in Medicine and Biology Society (EMBS) provides a vibrant technical community where professionals in the field of biomedical engineering connect, collaborate, and share knowledge. Through conferences, workshops, and online forums, members stay updated on the latest advancements, exchange ideas, and contribute to the growth of this interdisciplinary field.',
    href: 'https://www.embs.org/',
    // change
    icon: UserGroupIcon,
  },
  {
    name: 'Career development',
    description:"EMBS offers valuable resources for career development  including job boards, mentoring programs and professional networking opportunities. Members can access career guidance, find job openings, and connect with experienced mentors to enhance their skills and advance in their biomedical engineering careers.",
    href: 'https://www.embs.org/',
    icon: AcademicCapIcon,
  },
  {
    name: 'Research and Publications',
    description:"EMBS supports and promotes research in biomedical engineering through its publications, such as journals, magazines, and conference proceedings. Researchers can disseminate their work to a wide audience, gain recognition for their contributions, and stay informed about the latest research trends and findings in the field.",
    href: 'https://www.embs.org/',
    icon: NewspaperIcon,
  },
]

function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-purple-700">
            Benefits
          </h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl text-center font-extrabold bg-gradient-to-r from-sky-500 to-purple-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Engineering in Medicine and Biology Society?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
            Joining will provide professionals and researchers in biomedical,
            healthcare, and medicine with a platform for networking, sharing
            ideas and perspectives, and collaboration. By becoming a member,
            individuals can access valuable resources, attend conferences,
            publish research, and contribute to the advancement of technology in
            the medical sector and practices.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-justify">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-base font-semibold leading-7 text-purple-600"
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
    <div className="bg-gradient-to-r from-sky-500 to-purple-800">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-purple-900">
            Embark on a journey of limitless possibilities.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-purple-100">
          Explore the frontiers of innovation, share knowledge, and collaborate to advance technology for humanity.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-50 py-3 px-5 text-base font-medium text-purple-700 hover:bg-purple-100 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}


export default function EMBS() {
  return (
    <>
      <Example />
      <Conference />
      <Publication />
      <Benefits />
      <JoinUs />
    </>
  )
}