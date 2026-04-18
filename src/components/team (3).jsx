const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    facebookUrl: '<FontAwesomeIcon icon="fa-brands fa-facebook" />',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="text-xl text-gray-500">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
              quis et.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 bg-slate-200 rounded-b-lg">
                  <div className="aspect-[5/4]">
                    <img className="rounded-t-lg object-cover" src={person.imageUrl} alt="" />
                  </div>

                  <div className="space-y-2 px-4 pb-4">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-blue-600">{person.role}</p>
                      <p className="text-gray-500 text-sm">BSc in EEE</p>
                    </div>
                    <ul role="list" className="flex space-x-2">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Facebook</span>
                          <img className='h-6' src="https://img.icons8.com/ios-filled/100/null/facebook-new.png" />
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <img className='h-6' src="https://img.icons8.com/ios-filled/100/null/circled-envelope.png" />
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <img className='h-6' src="https://img.icons8.com/ios-glyphs/100/null/linkedin-circled--v1.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
