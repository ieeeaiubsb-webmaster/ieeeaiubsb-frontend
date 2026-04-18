const publications = [
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },
  {
    name: 'Abozzo-2021',
    href: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.pdf',
    imageSrc: 'https://ieeeaiubsb.com/wp-content/uploads/2020/09/Abozzo-2021.png',
    imageAlt: 'Abozzo-2021',
  },

  
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="publications-heading" className="sr-only">
          Publications
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-12 px-6 h-max-[80vh] sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication) => (
            <a key={publication.id} href={publication.href} className="group">
              <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-lg">
                <img
                  src={publication.imageSrc}
                  alt={publication.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{publication.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
