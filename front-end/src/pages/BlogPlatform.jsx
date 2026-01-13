import React from 'react';

// --- Sub-Components for Cleanliness ---

const CategoryCard = ({ title, img }) => (
  <div className="w-full rounded-2xl">
    <a href="#" className="relative group h-full flex items-center justify-center rounded-2xl overflow-hidden">
      <img 
        className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
        src={img} 
        alt={title} 
      />
      <span className="absolute bottom-10 px-10 py-2 text-black font-bold rounded-2xl bg-white/80 group-hover:bg-black/80 group-hover:text-white transition-all duration-300">
        {title}
      </span>
    </a>
  </div>
);

const MarketingCard = ({ title, author, price, oldPrice, img }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="overflow-hidden rounded-2xl pb-2 aspect-video">
      <img className="w-full h-full object-cover" src={img} alt={title} />
    </div>
    <div className="flex justify-between px-2 py-2">
      <div className="flex items-center gap-1">
        <svg width="18" height="18" viewBox="0 0 21 21" fill="none" className="stroke-gray-400"><rect x="0.5" y="0.5" width="9" height="9" rx="1.5"/><rect x="0.5" y="11.5" width="9" height="9" rx="1.5"/><rect x="11.5" y="11.5" width="9" height="9" rx="1.5"/><rect x="11.5" y="0.5" width="9" height="9" rx="1.5"/></svg>
        <p className="font-semibold text-gray-500 text-xs uppercase">Design</p>
      </div>
      <div className="flex items-center gap-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="fill-gray-300"><path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21Z"/></svg>
        <p className="font-semibold text-gray-500 text-xs">3 Month</p>
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-700 leading-tight">{title}</h3>
    <p className="text-gray-500 text-sm py-3 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-full bg-gray-200 overflow-hidden">
          <img src={img} alt={author} className="object-cover w-full h-full" />
        </div>
        <p className="text-sm font-semibold">{author}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm line-through text-gray-400">${oldPrice}</span>
        <span className="text-lg text-[#49BBBD] font-bold">${price}</span>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const BlogPlatform = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#9dccff67] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-gray-500">By the mad-brains in <span className="text-cyan-800 font-bold">inspiration</span></p>
            <h1 className="text-4xl font-bold text-gray-800 py-6 leading-tight">Why Swift UI Should Be on the <br/> Radar of Every Mobile Developer</h1>
            <p className="text-lg text-gray-700 mb-8">TOTC is a platform that allows educators to create online classes whereby they can store materials and manage results easily.</p>
            <button className="px-8 py-3 bg-[#49BBBD] rounded-md text-white font-bold hover:shadow-lg transition">Start learning now</button>
          </div>
          <div className="md:w-1/2 hidden md:block rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" className="hover:scale-105 transition duration-700" alt="Hero" />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY LIST */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Reading blog list</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard title="Node Js" img="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg" />
            <CategoryCard title="React JS" img="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg" />
            <CategoryCard title="Python" img="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg" />
            <CategoryCard title="Design" img="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg" />
          </div>
        </div>
      </section>

      {/* 3. RELATED BLOG CAROUSEL */}
      <section className="bg-[#9dccff2f] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Related Blog</h2>
            <a href="#" className="underline font-medium">See all</a>
          </div>
          <div className="flex gap-6 overflow-x-auto snap-x pb-6 no-scrollbar">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[350px] md:min-w-[450px] bg-white p-6 rounded-3xl shadow-sm snap-start">
                <img className="rounded-2xl mb-4 w-full aspect-video object-cover" src="https://www.adorama.com/alc/wp-content/uploads/2020/10/abstract-photography-design-feature-825x465.jpg" alt="blog" />
                <h3 className="text-2xl font-bold mb-4 line-clamp-2">Class adds $30 million to its balance sheet for edtech solution</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-full bg-gray-200" />
                  <span className="font-bold">Ravi Gahire</span>
                </div>
                <p className="text-gray-600 mb-6">Class integrates exclusively with Zoom to provide better education feedback...</p>
                <div className="flex justify-between items-center">
                  <a href="#" className="underline font-bold">Read more</a>
                  <div className="flex items-center gap-2 text-[#49BBBD]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                    <span className="text-gray-700 font-medium">250,244</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2 mt-6">
             <button className="size-10 bg-[#49BBBD]/70 text-white rounded flex items-center justify-center">←</button>
             <button className="size-10 bg-[#49BBBD] text-white rounded flex items-center justify-center">→</button>
          </div>
        </div>
      </section>

      {/* 4. MARKETING ARTICLES GRID */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Marketing Articles</h2>
            <a href="#" className="underline">See All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MarketingCard title="AWS Certified Solutions Architect" author="Ravi Gahire" price="80" oldPrice="100" img="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" />
            <MarketingCard title="Full Stack Web Development" author="Ravi Gahire" price="90" oldPrice="120" img="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" />
            <MarketingCard title="UI/UX Design Masterclass" author="Ravi Gahire" price="75" oldPrice="150" img="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" />
            <MarketingCard title="Mobile App Development" author="Ravi Gahire" price="85" oldPrice="110" img="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPlatform;