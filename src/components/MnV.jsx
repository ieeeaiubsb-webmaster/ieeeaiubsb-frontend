import {
  ArrowsRightLeftIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "Technology",
    href: "#",
    description:
      'In accordance to the first half of the IEEE motto, "Advancing Technology...," we strive to assist all of our members in strengthening their fundamental skills and providing them with access to the latest technical knowledge and research.  We want to equip them with the resources they need to find answers to the major engineering issues that our community is currently experiencing.',
    icon: GlobeAltIcon,
  },
  {
    name: "Humanity",
    href: "#",
    description: `In order to fulfill the second part of the IEEE tagline, "... For Humanity," we are committed to confronting the humanitarian issues. We work to improve people&epos; lives, assist those in need, and motivate young people to pursue careers in STEM sectors through fostering collaborations with charity and philanthropic organizations.'`,
    icon: HandRaisedIcon,
  },
  {
    name: "Collaboration",
    href: "#",
    description:
      "Collaboration and networking play a crucial role in accomplishing our ultimate goal. At the IEEE AIUB Student Branch, we strongly believe that the potential advantages of collaboration and partnership outweigh any individual success. We hope to serve as a platform and a link between researchers, professionals, and students.",
    icon: ArrowsRightLeftIcon,
  },
];

export default function MissionAndVision() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0 opacity-40">
          <img
            className="h-full w-full object-cover"
            src="/images/missionVision.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-cyan-50 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
            Mission and Vision
          </h1>
          <p className="mt-6 max-w-inherited text-xl text-white text-center">
            IEEE&apos;s core purpose is to foster technological innovation and
            excellence for the benefit of humanity.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-5 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex flex-col px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 self-center -translate-y-1/2 transform rounded-xl bg-cyan-600 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-justify text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
