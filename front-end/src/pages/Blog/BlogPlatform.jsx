import { BlogCategory } from './BlogCategory';


const MarketingCard = ({ title, author, price, oldPrice, img }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="overflow-hidden rounded-2xl pb-2 aspect-video">
      <img className="w-full h-full object-cover" src={img} alt={title} />
    </div>
    <div className="flex justify-between px-2 py-2">
      <div className="flex items-center gap-1">
        <svg width="18" height="18" viewBox="0 0 21 21" fill="none" className="stroke-gray-400"><rect x="0.5" y="0.5" width="9" height="9" rx="1.5" /><rect x="0.5" y="11.5" width="9" height="9" rx="1.5" /><rect x="11.5" y="11.5" width="9" height="9" rx="1.5" /><rect x="11.5" y="0.5" width="9" height="9" rx="1.5" /></svg>
        <p className="font-semibold text-gray-500 text-xs uppercase">Design</p>
      </div>
      <div className="flex items-center gap-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="fill-gray-300"><path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21Z" /></svg>
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

      {/* 2. CATEGORY LIST */}
      <BlogCategory />

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