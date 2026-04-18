export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Follow Our social media handles
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <a href="https://www.facebook.com/IEEEAIUBStudentBranch">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
              alt="Facebook"
              width={158}
              height={48}
            />
          </a>
          <a href="https://twitter.com/IEEE_AIUB_SB">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png"
              alt="Twitter"
              width={158}
              height={48}
            />
          </a>
          <a href="https://www.instagram.com/ieeeaiubsb/">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
              alt="Instagram"
              width={158}
              height={48}
            />
          </a>
          <a href="https://www.linkedin.com/company/ieee-aiub-student-branch/">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
              alt="LinkedIn"
              width={158}
              height={48}
            />
          </a>
          <a href="mailto:ieeeaiubstudentbranch@gmail.com">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-512.png"
              alt="Gmail"
              width={158}
              height={48}
            />
          </a>
          <a href="https://ieeeaiubsb.com/">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/world-512.png"
              alt="website"
              width={158}
              height={48}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCk3nnCN-bKUoTTa0pgXhEVg">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Youtube-512.png"
              alt="YouTube"
              width={158}
              height={48}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
