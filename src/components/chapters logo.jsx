import Link from "next/link";

export default function ChaptersAndAG() {
  return (
    <div className="bg-white pt-24 pb-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
          Chapters and Affinity Groups
        </h2>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Link href="/computer-society">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1 cursor-pointer"
              src="/images/logo/CS-01.png"
              alt="Computer Society"
              width={400}
              height={400}
            />
          </Link>
          <Link href="/engineering-in-medicine-and-biology-society">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/images/logo/EMBS-01.png"
              alt="EMBS"
              width={400}
              height={400}
            />
          </Link>
          <Link href="/industry-application-society">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/images/logo/IAS-01.png"
              alt="IAS"
              width={400}
              height={400}
            />
          </Link>
          <Link href="/microwave-theory-techniques-society">
            <img
              className="col-span-2 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/logo/MTTS-01.png"
              alt="MTTS"
              width={400}
              height={400}
            />
          </Link>
          <Link href="/women-in-engineering">
            <img
              className="col-span-2 col-start-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/logo/WIE-01.png"
              alt="WIE"
              width={400}
              height={400}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
