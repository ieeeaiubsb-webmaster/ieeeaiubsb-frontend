import TeamCard2 from './TeamCard2'
const people = [
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    email:"#",
    facebookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    email:"#",
    facebookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    email:"#",
    facebookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    email:"#",
    facebookUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    email:"#",
    facebookUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]


export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">Volunteers 2022</h1>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
          >
            {people.map((p) => (
              <li key={p.name}>
                <TeamCard2 person={p}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
