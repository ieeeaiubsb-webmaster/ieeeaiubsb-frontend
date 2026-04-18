import Image from "next/image";

export default function Post({ post, isDetail = false }) {
  // Logic to handle both API data and old hardcoded data
  const href = isDetail ? `/detail/${post.slug}` : `/post/${post.id}`;
  
  const image = isDetail 
    ? (post.image?.startsWith('http') ? post.image : `https://portal.ieeeaiubsb.com/storage/${post.image}`)
    : post.imageUrl;
    
  const category = isDetail ? (post.category?.name || "Member News") : post.category;
  
  const date = isDetail 
    ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : post.date;

  return (
    <a
      href={href}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="flex-shrink-0 relative h-64 w-full">
        <Image
          className="object-cover"
          src={image || "/images/placeholder-ieee.jpg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-cyan-600 uppercase tracking-wider">{category}</p>
          <div className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900 line-clamp-2 min-h-[3.5rem]">{post.title}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
           <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/favicon.ico" alt="IEEE logo" />
           </div>
           <div className="ml-3">
             <p className="text-xs font-medium text-gray-500 uppercase tracking-tighter">IEEE AIUB SB</p>
             <p className="text-sm font-medium text-gray-900">{date}</p>
           </div>
        </div>
      </div>
    </a>
  );
}
