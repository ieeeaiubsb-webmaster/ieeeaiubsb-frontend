export default function Stats() {
  return (
    <div className="bg-gray-50 pt-4 sm:pt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">IEEE AIUB Student Branch</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">IEEE AIUB Student Branch has championed as the largest Student Branch in Bangladesh Section for the past few years, boasting over 220+ members. With dozens of active members, dedicated volunteers, hard-working executives and supportive faculty members all bonded together as one, we are nothing short of a family. A family that continues to grow and expand with each passing day and one that we would be glad to have you as a part of. Please explore our site to learn more about our history, different committees, ventures and moments. We hope that you enjoy the tour!</p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Members</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-cyan-600">226</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Chapters</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-cyan-600">4</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Affinity Group</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-cyan-600">1</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
