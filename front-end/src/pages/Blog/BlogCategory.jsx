

export const BlogCategory = () => {
    return (
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
    )
}

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