import { notFound } from "next/navigation";
import axios from "axios";

// Reuse the background pattern for consistency
function BackgroundPattern() {
  return (
    <>
      <div
        className="absolute inset-y-0 left-1/2 -z-10 w-[200%] -translate-x-1/2 [mask-image:radial-gradient(60%_60%_at_top_center,white,transparent)]"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          fill="none"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="50%"
              y={-1}
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </>
  );
}

async function getPostData(slug) {
  // Strip .html extension if present
  const cleanSlug = slug.replace(".html", "");
  
  try {
    const response = await axios.get(`https://portal.ieeeaiubsb.com/api/blog/posts/${cleanSlug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function PostDetail({ params }) {
  const { slug } = params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <BackgroundPattern />
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/20">
              {post.category?.name || "Uncategorized"}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-sm text-gray-500">
              Published on {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          </div>

          {post.image && (
            <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-gray-200">
              <img
                src={post.image.startsWith('http') ? post.image : `https://portal.ieeeaiubsb.com/storage/${post.image}`}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg prose-cyan mx-auto mt-16 max-w-none text-gray-600 text-justify prose-img:rounded-xl prose-headings:text-gray-900 prose-a:text-cyan-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
}
