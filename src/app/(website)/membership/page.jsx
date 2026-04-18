import MembershipBenefits from "@/components/membership benefits";
import JoinUs from "@/components/join us";
import WhyJoinIEEE from "@/components/whyjoinieee";

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
              <stop stopColor="#00669e" />
              <stop offset={1} stopColor="#0891b2" />
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
              <stop stopColor="#00669e" />
              <stop offset={1} stopColor="#0891b2" />
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
                  IEEE (Institute of Electrical and Electronics Engineers) is
                  the world’s largest technical professional organization
                  dedicated to advancing technology for the benefit of humanity.
                  IEEE was established in 1963 with the goals of fostering
                  technological innovation, developing standards, and advancing
                  science, technology, and engineering. Through its widely
                  recognized publications, conferences, technical standards,
                  professional, and educational activities, IEEE and its members
                  motivate a global community. It has grown into a global
                  organization with more than 400,000 members that offers
                  professional services in more than 190 countries and has
                  conferences all over the world. IEEE also fosters innovation
                  through its student competitions. The primary objective of
                  IEEE is to promote technological innovation and excellence for
                  the benefit of humanity.
                </p>
              </div>
            </div>
            {/* </div> */}
            <div className="mt-16 flow-root sm:mt-24">
              <img
                src="/images/ieee-motto.jpg"
                alt=""
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Membership() {
  return (
    <>
      <Description />
      <WhyJoinIEEE />
      <MembershipBenefits />
      <JoinUs />
    </>
  );
}
