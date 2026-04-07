import { Link } from "react-router-dom";


export const BlogCategory = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Reading Blog Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            title="Marketing"
            img="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <CategoryCard
            title="Programing"
            img="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg" />
          <CategoryCard
            title="Business"
            img="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg" />
          <CategoryCard
            title="Design"
            img="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg" />
        </div>
      </div>
    </section>
  )
}

const CategoryCard = ({ title, img, link }) => (
  <div className="size-80 rounded-2xl">
    <a href="#" className="relative group h-full flex items-center justify-center rounded-2xl overflow-hidden">
      <img
        className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
        src={img}
        alt={title}
      />
      <Link to={link} className="absolute bottom-10 px-10 py-2 text-black font-bold rounded-2xl bg-white/80 group-hover:bg-black/80 group-hover:text-white transition-all duration-300">
        {title}
      </Link>
    </a>
  </div>
);