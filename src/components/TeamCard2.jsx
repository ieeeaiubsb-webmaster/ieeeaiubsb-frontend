export default function TeamCard2({person}) {
  return(
    <>
      <div className="space-y-6">
        <img className="mx-auto h-40 w-40 object-cover rounded-full xl:h-56 xl:w-56" src={person.imageUrl} alt="" />
        <div className="space-y-2">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>{person.name}</h3>
            <p className="text-cyan-600">{person.role}</p>
          </div>
          <ul role="list" className="flex justify-center space-x-5">
            <li>
              <a href={person.email} className="text-gray-400 hover:text-[#EA4335]">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href={person.facebookUrl} className="text-gray-400 hover:text-[#1877F2]">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href={person.linkedinUrl} className="text-gray-400 hover:text-[#0077B5]">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}