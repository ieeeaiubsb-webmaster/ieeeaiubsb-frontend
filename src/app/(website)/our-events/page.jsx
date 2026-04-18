"use client";
import { useState, useEffect } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import Post from "@/components/post";
import axios from "axios";

export default function OurEvents() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ current_page: 1, last_page: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://portal.ieeeaiubsb.com/api/blog/posts?page=${currentPage}&per_page=9`
        );
        setPosts(response.data.data);
        setMeta({ 
          current_page: response.data.current_page, 
          last_page: response.data.last_page 
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < (meta?.last_page || 1)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             Events & Announcements
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore the latest activities and chronicles of the IEEE AIUB Student Branch.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 rounded-2xl bg-gray-100"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
              {posts.map((post) => (
                <Post key={post.id} post={post} isDetail={true} />
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-16 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
              <div className="-mt-px flex w-0 flex-1">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-30 disabled:hover:border-transparent"
                >
                  <ArrowLongLeftIcon
                    className="mr-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Previous
                </button>
              </div>
              
              <div className="hidden md:-mt-px md:flex">
                <span className="inline-flex items-center border-t-2 border-cyan-500 px-4 pt-4 text-sm font-medium text-cyan-600">
                  Page {meta?.current_page || 1} of {meta?.last_page || 1}
                </span>
              </div>

              <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === (meta?.last_page || 1)}
                  className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-30 disabled:hover:border-transparent"
                >
                  Next
                  <ArrowLongRightIcon
                    className="ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}
