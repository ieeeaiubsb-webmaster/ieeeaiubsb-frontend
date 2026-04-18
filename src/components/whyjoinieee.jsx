import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    name: "Professional Networking",
    description:
      "IEEE provides a platform for professionals and students to interact with others locally and internationally in the field of electrical and electronics engineering. By becoming an IEEE member, people can go to conferences, seminars, and workshops to connect with like-minded people, advance their careers, and broaden their network.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Career Resources",
    description:
      "One's career may benefit from being an IEEE member. IEEE provides a range of activities and programs, including career tools, job fairs, and mentorship programs, to assist professionals in advancing their careers. Being a member of IEEE can also increase one&epos; professional credibility and create new prospects.",
    icon: LockClosedIcon,
  },
  {
    name: "Professional Profile",
    description:
      "Being a member of IEEE allows you to attend a variety of workshops and seminars and network with people from all over the world in a variety of professions. Additionally, they will participate in a variety of IEEE activities, which will benefit them in their professional lives.",
    icon: ArrowPathIcon,
  },
  {
    name: "Collaboration",
    description:
      "Through its communities, technical committees, and special interest groups, IEEE promotes collaboration among its members. By becoming an IEEE member, one can work on cutting-edge projects, collaborate with professionals from around the globe, and promote the study of electrical and electronic engineering.",
    icon: FingerPrintIcon,
  },
  {
    name: "Events and Activities",
    description:
      "Throughout the year IEEE sponsors a variety of events like IEEE Conferences, Hackathons and coding competitions, Networking events, and Awards and recognition programs and participates in a range of activities, including job fairs, career fairs, seminars, webinars, and mentorship programs.",
    icon: FingerPrintIcon,
  },
  {
    name: "Education(Discount/scholarships)",
    description:
      "IEEE books and eBooks, journals, articles, conferences, proceedings, standards, society memberships, and continuing education courses are all discounted for IEEE members. A sign-in with an IEEE account might be necessary for some of the sites listed below to protect access to certain member benefit programs.",
    icon: FingerPrintIcon,
  },
];

export default function WhyJoinIEEE() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-cyan-900">
            Benefits
          </h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE?
          </h1>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            Numerous advantages come with joining IEEE, such as networking
            possibilities, resource access, access to professionals, career
            progress, collaboration, and acknowledgment. Electrical and
            electronics engineering professionals and students can study, grow,
            and contribute to their field in an accepting and welcoming
            environment provided by IEEE.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
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
                      href="https://www.ieee.org/"
                      className="text-base font-semibold leading-7 text-cyan-600"
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
