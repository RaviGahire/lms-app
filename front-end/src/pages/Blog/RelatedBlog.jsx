import { IconChevronLeft, IconChevronRight, IconEye } from "@tabler/icons-react";
import { useState } from "react";

export const blogPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
        title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        author: {
            name: "Lisa",
            avatar: "https://i.pravatar.cc/40?img=5",
        },
        excerpt:
            "Class launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        views: "291,232",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80",
        title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        author: {
            name: "Lisa",
            avatar: "https://i.pravatar.cc/40?img=5",
        },
        excerpt:
            "Class launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        views: "291,232",
    },
     {
        id: 2,
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80",
        title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        author: {
            name: "Lisa",
            avatar: "https://i.pravatar.cc/40?img=5",
        },
        excerpt:
            "Class launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        views: "291,232",
    },
    
]


export function RelatedBlog() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
   <section aria-label="related blogs section" className="px-4 sm:px-6 lg:px-8 py-10">
  
  <div className="max-w-7xl mx-auto">
    
    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
        Related Blogs
      </h2>
      <a
        href="#"
        className="text-sm text-teal-500 hover:text-teal-600 font-medium transition-colors"
      >
        See all
      </a>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center sm:justify-end gap-2 mt-10">
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        className={`w-9 h-9 rounded-md flex items-center justify-center cursor-pointer text-sm transition-all duration-200 ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400"
            : "bg-white text-gray-600 hover:bg-teal-50 shadow-sm"
        }`}
      >
        <IconChevronLeft/>
      </button>

      <button
        onClick={() => setCurrentPage((p) => p + 1)}
        className="w-9 h-9 rounded-md cursor-pointer  flex items-center justify-center text-sm bg-teal-500 text-white hover:bg-teal-600 transition-all duration-200 shadow-sm"
      >
        <IconChevronRight />
      </button>
    </div>

  </div>

</section>

    );
}


const BlogCard = ({ post }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-52">
                <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`}
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-[15px] font-semibold text-gray-800 leading-snug mb-4 ">
                    {post.title}
                </h3>

                {/* Author */}
                <div className="flex items-center gap-2 mb-3">
                    <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow"
                    />
                    <span className="text-sm text-gray-500 font-medium">{post.author.name}</span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <button className="text-xs font-semibold text-teal-500 hover:text-teal-600 transition-colors tracking-wide">
                        Read more
                    </button>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <IconEye />
                        <span>{post.views}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};