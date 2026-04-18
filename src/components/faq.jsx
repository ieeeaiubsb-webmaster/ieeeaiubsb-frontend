/* This example requires Tailwind CSS v3.0+ */
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is the mission and vision of IEEE AIUB SB?",
    answer:
      "The mission and vision statements of IEEE student branches focus on promoting technical excellence, fostering innovation, and providing opportunities for personal and professional growth to their members. They often aim to create a vibrant community of students passionate about technology and engineering, offering various events, workshops, and activities to enrich the learning experience and prepare students for successful careers in their respective fields.",
  },
  {
    question: "What is the IEEE Student Branch in universities?",
    answer:
      "The IEEE (Institute of Electrical and Electronics Engineers) student branch is a student-run organization that operates under the umbrella of the larger IEEE organization. It is typically found in universities and colleges around the world. The primary purpose of an IEEE student branch is to promote and foster interest in the fields of electrical engineering, electronics, computer science, and related disciplines among students.",
  },
  {
    question:
      "What sort of activities does the IEEE AIUB Student Branch engage in?",
    answer:
      "IEEE AIUB Student Branch engages in activities such as technical workshops, webinars, seminars, industry visits and competition hackathons. These activities cover a wide range of emerging technologies, such as AI, IoT, and robotics, and are designed to expose students to industry trends and to encourage their competitive spirit.",
  },
  {
    question:
      "What advantages do members of the IEEE AIUB Student Branch receive?",
    answer:
      "Any student enrolled in a university or college can become a member of the IEEE student branch. Membership offers various benefits, such as access to IEEE Publications, Networking and Leadership Opportunities, Workshops, Conferences, Competitions, and Career Development Programs.",
  },
  {
    question: "What accomplishments has the IEEE AIUB STUDENT BRANCH made?",
    answer:
      "The IEEE AIUB Student Branch has received the IEEE Regional Exemplary Student Branch Award twice, in 2020 and 2022. It hosted the IEEE Student Professional Awareness Workshop (SPAW) in 2019 and won the IEEE Region 10 Student Branch Website Contest in 2018 and 2016.",
  },
  {
    question:
      "Is the IEEE AIUB STUDENT BRANCH restricted to undergraduate EEE students only?",
    answer:
      "No, IEEE AIUB Student Branches are not restricted to Electrical and Electronics Engineering (EEE) students only. While the roots of IEEE lie in the electrical and electronics engineering disciplines, the organization has evolved to encompass a wide range of fields related to technology and engineering. As a result, IEEE student branches are open to students from various engineering and technology-related disciplines, as well as computer science and other related fields.",
  },
  {
    question:
      "What benefits do the members of IEEE AIUB STUDENT BRANCH receive from the chapters?",
    answer:
      "IEEE is divided into technical societies and affinity groups, which are like specialized chapters focusing on specific areas of technology and professional interests. Chapters offer access to technical publications, journals, conference proceedings, and other valuable resources in their respective fields. Members can network with professionals, researchers, and industry experts who are part of the specific chapters. Chapters often organize specialized workshops, seminars, technical sessions, career development and mentorship program focused on specific topics related to their field. Active involvement in IEEE chapters can lead to professional recognition and opportunities for leadership roles within the organization, which can enhance a student&epos; resume and future career prospects. Chapters may facilitate collaborative projects among members, offer travel grants or financial support for attending conferences and events.",
  },
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
            Frequently asked questions
          </h1>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base text-justify lg:text-xl font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-justify leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
