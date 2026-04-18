export default function JoinUs() {
  return (
    <div className="bg-blue-100">
      <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="-mb-1 block bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text pb-1 text-transparent">
            Join Us and Be a Part of the Community
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
          <a
            href="/membership"
            className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-cyan-700 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-cyan-600 hover:to-sky-700"
          >
            Join Us
          </a>
          <a
            href="https://www.ieee.org/"
            className="flex items-center justify-center rounded-md border border-transparent bg-cyan-50 bg-origin-border px-4 py-3 text-base font-medium text-cyan-800 shadow-sm hover:bg-cyan-100"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}