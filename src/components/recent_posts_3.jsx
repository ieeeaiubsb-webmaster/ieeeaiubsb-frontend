"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RecentPosts3() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(
          "https://portal.ieeeaiubsb.com/api/blog/posts?per_page=3"
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex animate-pulse flex-col items-center">
            <div className="h-10 w-64 rounded bg-gray-200"></div>
            <div className="mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 rounded-lg bg-gray-200"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle empty state
  if (posts.length === 0) return null;

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Recent Posts
          </h1>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={"/detail/" + post.slug}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-64 w-full object-cover"
                  src={
                    post.image 
                      ? (post.image.startsWith('http') ? post.image : `https://portal.ieeeaiubsb.com/storage/${post.image}`)
                      : "/images/placeholder-ieee.jpg"
                  }
                  alt={post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6 text-justify">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    {post.category?.name || "Member News"}
                  </p>
                  <div className="mt-2 block">
                    <p className="line-clamp-2 text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <div 
                      className="mt-3 line-clamp-3 text-base text-gray-500"
                      dangerouslySetInnerHTML={{ 
                        __html: post.content?.replace(/<[^>]*>?/gm, '').substring(0, 200) + "..." 
                      }}
                    >
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">IEEE AIUB SB</span>
                    <img className="h-10 w-10 p-1" src="/favicon.ico" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      IEEE AIUB Student Branch
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.published_at}>
                        {new Date(post.published_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="/our-events"
            className="inline-flex items-center rounded-full border border-transparent bg-cyan-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-200"
          >
            View All Posts
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
