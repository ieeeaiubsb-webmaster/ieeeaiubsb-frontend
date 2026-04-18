import Stats from "@/components/stats2"
import ChaptersAndAG from "@/components/chapters logo"
import Achievements from "@/components/achievemnts"
import Testimonial from "@/components/testimonial (3)"
import JoinUs from "@/components/join us"

function History() {
  return (
    <div className="overflow-hidden bg-white py-16 px-6 lg:px-8 xl:pt-36">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            {/* <h2 className="font-semibold leading-6 text-cyan-600">Transactions</h2 */}
            <p className="mt-1 text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
              History
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
          </svg>
          <svg
            className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg prose-cyan text-gray-500 lg:max-w-none">
                <p className="text-justify" >
                  In 12th December 2006 IEEE AIUB Student Branch was formed under the administration of Office of Student Affairs (OSA), AIUB in Dhaka, Bangladesh. It is a registered Student Branch under the Institute of Electrical and Electronics Engineers (IEEE), based in Piscataway, NJ, USA. The student branch began with just a handful of members and minimal activities, but there was a dream, a hope, and a drive to &quot;advance technology for the benefit of humanity.&quot; Pursuing this goal, the IEEE AIUB Student Branch team developed the Student Branch over the years 2009 to 2012.After that the next generation of IEEE AIUB Student Branch set a target and a vision to reach the very top. What the Student Branch represents today and in its current glory is the result of all those years of arduous work, passion, and dedication. In 2014 IEEE AIUB Student Branch received 1st place in Best Student Branch Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony. Also, in 2020 and 2022 it received ‘IEEE Regional Exemplary Student Branch Award’ in IEEE Region 10. It received 35+ awards from 2014 to 2022.
                </p>
                <p>
                  The hard work of its members and their support contributed to the IEEE AIUB Student Branch&epos; success. Without their dedication, the founder&epos;s dream would have been incomplete. We appreciate and salute all the members of IEEE AIUB Student Branch for their efforts.
                </p>
                {/* <ol role="list">
                  <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
                  <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
                </ol>
                <p>
                  Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed pellentesque scelerisque interdum
                  blandit lectus. Nec viverra amet ac facilisis vestibulum. Vestibulum purus nibh ac ultricies congue.
                </p> */}
              </div>
              <div className="prose prose-lg prose-cyan mt-6 text-gray-500 lg:mt-0">
                <p className="text-justify">
                  In 12th December 2006 IEEE AIUB Student Branch was formed under the administration of Office of Student Affairs (OSA), AIUB in Dhaka, Bangladesh. It is a registered Student Branch under the Institute of Electrical and Electronics Engineers (IEEE), based in Piscataway, NJ, USA. The student branch began with just a handful of members and minimal activities, but there was a dream, a hope, and a drive to &quot;advance technology for the benefit of humanity.&quot; Pursuing this goal, the IEEE AIUB Student Branch team developed the Student Branch over the years 2009 to 2012.After that the next generation of IEEE AIUB Student Branch set a target and a vision to reach the very top. What the Student Branch represents today and in its current glory is the result of all those years of arduous work, passion, and dedication. In 2014 IEEE AIUB Student Branch received 1st place in Best Student Branch Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony. Also, in 2020 and 2022 it received ‘IEEE Regional Exemplary Student Branch Award’ in IEEE Region 10. It received 35+ awards from 2014 to 2022.
                </p>
                <p>
                  The Constitution, Rules & By-Laws of IEEE AIUB Student Branch is provided in the link below - 
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 w-full grid place-items-center">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base font-medium text-white hover:bg-cyan-700"
              >
                The Constitution, Rules & By-Laws
              </a>
            </div>
        </div>
      </div>
      <div className="grid place-items-center py-6 md:mt-16">
        <img
          className="w-full max-w-7xl h-[80%] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto"
          src="/images/SPAVe 6.0-348.jpg"
          alt="Customer profile user interface"
        />
      </div>
    </div>
  )
}


export default function AboutIEEEAUBSB() {
  return (
    <>
      <Stats />
      <History />
      <ChaptersAndAG />
      <Achievements />
      <Testimonial />
      <JoinUs />
    </>
  )
}
