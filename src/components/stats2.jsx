export default function Stats2() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl overflow-hidden p-8 tv arf asn auv chf dcx dfa flex flex-col">
        <p className="mt-1 text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
          IEEE AIUB Student Branch
        </p>
        <div className="relative grid grid-rows-1 md:grid-cols-2 h-auto gap-6">
          <div className="w-full h-auto grid">
            <p className="mt-3 py-6 text-xl text-justify text-gray-500 self-center sm:mt-4">
              The IEEE AIUB Student Branch was established in Dhaka, Bangladesh,
              as a registered student branch under the Institute of Electrical
              and Electronics Engineers (IEEE), and its operations are based in
              Piscataway, NJ, USA. It was formed on December 12th, 2006, under
              the guidance of the Office of Student Affairs (OSA) at AIUB,
              starting with a small number of members and limited activities.
              Fueled by a vision to advance technology for the benefit of
              humanity, the branch persevered and has now become one of the most
              prominent and respected student branches in the entire IEEE
              Bangladesh Section. With a membership of over 360 individuals,
              including active members, dedicated volunteers, diligent
              executives, and supportive faculty, the branch has earned numerous
              accolades and volunteer awards by actively organizing technical
              seminars, workshops, regional flagship events, and industrial
              tours. The IEEE AIUB Student Branch remains unwavering in its
              commitment to its motto, continuously growing stronger as a united
              family in the face of challenges.
            </p>
          </div>
          <div className="w-full h-auto grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 md:gap-y-12 md:gap-x-4 lg:gap-4 py-6">
            <div className="w-full md:h-3/4 col-span-1 row-start-1 row-end-3 self-end aspect-[2/3] max-h-full max-w-full hidden lg:block">
              <div className="aspect-[2/3] rounded-md shadow-lg shadow-amber-400 ">
                <img
                  className="inset-0 h-full w-full object-cover rounded-md"
                  src="/images/NBI_1361.JPG"
                  alt=""
                />
              </div>
            </div>
            <div className="relative top-4 md:top-4 max-h-3/4 col-span-1 md:row-start-1 md:row-end-2 self-end grid ">
              <div className="aspect-[2/3] rounded-md shadow-lg shadow-amber-400 ">
                <img
                  className="inset-0 h-full w-full object-cover rounded-md"
                  src="/images/SPAVe 6.0-336.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="relative -top-4 md:top-4 max-h-3/4 col-span-1 md:row-start-2 md:row-end-3 self-start grid">
              <div className="aspect-[2/3]  rounded-md shadow-lg shadow-amber-400 ">
                <img
                  className="inset-0 h-full w-full object-cover rounded-md"
                  src="/images/NBI_0627.JPG"
                  alt=""
                />
              </div>
            </div>
            <div className="relative -top-4 md:-top-4 max-h-3/4 col-span-1 md:row-start-1 row-end-2 self-end grid">
              <div className="aspect-[2/3]  rounded-md shadow-lg shadow-amber-400 ">
                <img
                  className="inset-0 h-full w-full object-cover rounded-md"
                  src="/images/_NBI1579.JPG"
                  alt=""
                />
              </div>
            </div>
            <div className="relative top-4 md:-top-4 max-h-3/4 col-span-1 md:row-start-2 md:row-end-3 self-start grid">
              <div className="aspect-[2/3] rounded-md shadow-lg shadow-amber-400 ">
                <img
                  className="inset-0 h-full w-full object-cover rounded-md"
                  src="/images/NBI_0505.JPG"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-12 sm:py-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Members
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-cyan-600">
                      322
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Chapters
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-cyan-600">
                      4
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Affinity Group
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-cyan-600">
                      1
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
