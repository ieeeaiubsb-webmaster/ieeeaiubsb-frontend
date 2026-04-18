import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  BookOpenIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  BuildingOffice2Icon,
  MicrophoneIcon,
  UserGroupIcon,
  NewspaperIcon,
  UserPlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Access the Latest Research",
    description:
      "The IEEE Computer Society provides access to a vast repository of cutting-edge research papers, articles, and publications, keeping individuals updated with the latest advancements in the field of computer science and technology.",
    icon: NewspaperIcon,
  },
  {
    name: "Network With Your Peers",
    description:
      "Engage with a global community of like-minded professionals, researchers, and experts through IEEE CS, fostering valuable connections and collaborations to enhance knowledge and career opportunities.",
    icon: GlobeAltIcon,
  },
  {
    name: "Get Recognized",
    description:
      "Participation in IEEE CS activities, conferences, and certifications enhances professional credibility, showcasing commitment to continuous learning and expertise in the domain of computer science.p",
    icon: UserPlusIcon,
  },
  {
    name: "Sharpen Your Skills to boost your career",
    description:
      "IEEE CS fosters a sense of community among its members, offering support and camaraderie in the pursuit of shared interests and goals. Whether you are seeking guidance, collaboration, or mentorship, the society provides a supportive environment.",
    icon: SparklesIcon,
  },
];

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
            fillOpacity=".1"
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
              <stop stopColor="#C36721" />
              <stop offset={1} stopColor="#FFCC33" />
            </linearGradient>
          </defs>
        </svg>
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
              <stop stopColor="#C36721" />
              <stop offset={1} stopColor="#FFCC33" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE CS?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                The IEEE Computer Society (IEEE CS) stands as a prominent and
                far-reaching global professional society, dedicated to driving
                the progress of computer and information processing technology.
                Boasting an impressive membership base of over three million
                computer science professionals, researchers, and practitioners
                hailing from all corners of the world, it serves as a thriving
                hub of innovation and knowledge dissemination. This esteemed
                society orchestrates a myriad of impactful activities, including
                technical conferences and workshops, which propel the frontiers
                of the computing industry into new realms of possibilities.
                Leveraging its extensive network and expertise, IEEE CS empowers
                its members and the broader tech community through a wide array
                of publications and programs. This empowerment nurtures a
                culture of collaboration among engineers, sparking ingenious
                solutions and forging unparalleled opportunities in the
                ever-evolving landscape of technology. In essence, IEEE Computer
                Society&epos;s unwavering commitment to excellence not only
                shapes the trajectory of the computing field but also fortifies
                the industry for a dynamic and promising future.
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/logo/CS-01.png" alt="join us btn" />
              </div>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-orange-500 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Join Us
                </a>
                <a
                  href="https://www.computer.org/"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
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
        <div className="mx-auto lg:text-center grid place-content-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-700">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
            Why join IEEE Computer Society?
          </p>
          <p className="mt-8 max-w-5xl text-center text-lg text-justify leading-8 text-gray-600">
            Joining the IEEE CS offers numerous compelling reasons for
            professionals, researchers, and students alike. Here are some key
            benefits of becoming a member -
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl mt-18">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:max-w-none lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <p className="mt-2 text-base text-justify leading-7 text-gray-600">
                  {feature.description}
                </p>
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
        <div className="mx-auto max-w-4xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div></div>
            <div className="mt-3">
              <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl">
                  Conferences & Events
                </h1>
                <p className="mt-3 text-lg leading-8  text-justify text-gray-600">
                  IEEE CS conducts technical conferences that bring together
                  students, researchers, and professionals from diverse
                  backgrounds. These conferences serve as platforms for
                  presenting research findings, innovative projects, and
                  cutting-edge technologies within the field of computer
                  science. In addition to conferences, the student branch hosts
                  workshops and seminars focused on emerging technologies,
                  industry trends, and skill development. These interactive
                  sessions provide hands-on training and insights from industry
                  experts, empowering participants to stay updated with the
                  latest advancements and preparing them for the challenges of
                  the tech industry. The IEEE CS also organizes hackathons and
                  coding competitions that unleash the creativity and
                  problem-solving skills of students. These events allow
                  participants to work collaboratively on real-world projects,
                  enhancing their practical knowledge and fostering teamwork.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.computer.org/conferences"
                    className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
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
              src="/images/_NBI2722.JPG"
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-amber-100/20">
        <div className="mx-auto mx-6s max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl">
                  Publications
                </h1>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                  The IEEE Computer Society publishes a variety of publications
                  including technical journals, magazines, conference
                  proceedings, books, and online resources. These publications
                  cover various topics related to computer science, technology,
                  and engineering, including but not limited to artificial
                  intelligence, computer networks, data science, cybersecurity,
                  software engineering, computer graphics, computer
                  architecture, machine learning, and human-computer
                  interaction.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.computer.org/publications"
                    className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
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
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-amber-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-amber-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <img src="/images/NBI_7091.JPG" alt="" />
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
    name: "Bodies of Knowledge",
    description:
      "IEEE CS provides comprehensive bodies of knowledge that serve as essential references for professionals, covering various domains within the technology industry.",
    icon: BookOpenIcon,
  },
  {
    name: "Online Courses",
    description:
      "IEEE CS offers a wide range of courses through its online learning platform, allowing individuals to access high-quality education conveniently from anywhere in the world.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Certifications",
    description:
      "IEEE CS certifications validate expertise in specific technical areas, bolstering professional credentials and recognition within the global tech community.",
    icon: AcademicCapIcon,
  },
  {
    name: "Webinars",
    description:
      "Regular webinars hosted by IEEE CS feature industry experts, offering insights into cutting-edge technologies and trends, fostering continuous learning.",
    icon: GlobeAltIcon,
  },
  {
    name: "Conferences",
    description:
      "IEEE CS organizes conferences that bring together researchers, practitioners, and enthusiasts, facilitating knowledge exchange and collaboration to advance the field.",
    icon: UserGroupIcon,
  },
  {
    name: "Boards",
    description:
      "IEEE CS establishes boards to address critical topics, promote research, and drive technological advancements, fostering innovation and best practices.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Podcasts",
    description:
      "The platform offers podcasts, presenting engaging discussions on various technology-related topics, making learning entertaining and accessible.",
    icon: MicrophoneIcon,
  },
  {
    name: "Digital Library",
    description:
      "IEEE CS provides an extensive digital library, housing a vast collection of research papers, journals, and publications, serving as a valuable resource for academic and professional researchers.",
    icon: BuildingOffice2Icon,
  },
];

function Education() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-600">
              Everything you need
            </h2>
            <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
              Education
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {educationFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <feature.icon
                    className="absolute top-1 left-0 h-5 w-5 text-amber-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-justify">{feature.description}</dd>
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
    <div className="bg-gradient-to-r from-amber-600 to-yellow-400">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-amber-900">
            Embark on a journey of limitless possibilities.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-amber-100">
          Explore the frontiers of innovation, share knowledge, and collaborate
          to advance technology for humanity.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-amber-50 py-3 px-5 text-base font-medium text-amber-700 hover:bg-amber-100 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}

export default function CS() {
  return (
    <>
      <Description />
      <Conference />
      <Publication />
      <Education />
      <Benefits />
      <JoinUs />
    </>
  );
}
