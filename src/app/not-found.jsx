export default function Error404() {
  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">IEEEAIUBSB</span>
              <img
                className="h-12 w-auto"
                src="/images/logo/Branch logo-01.png"
                alt=""
              />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-cyan-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <a href="/" className="text-base font-medium text-cyan-600 hover:text-cyan-500">
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Home
            </a>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <a href="https://www.ieee.org/" className="text-sm font-medium text-gray-500 hover:text-gray-600">
              IEEE.org
            </a>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <a href="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Contact
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}
