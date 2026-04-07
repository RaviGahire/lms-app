

export const BlogHero = () => {
  return (
    
      <section aria-label="blog page hero" className="bg-[#9dccff67]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center py-12 gap-8">
            {/* Content side */}
            <div className="md:w-1/2">
              <p className="text-md text-gray-500">
                By the mad-brains in <span className="text-cyan-800 font-medium cursor-pointer">inspiration</span>
              </p>
              <h1 className="text-3xl md:text-4xl py-5 font-semibold text-gray-800 leading-tight">
                Why Swift UI Should Be on the <br className="hidden md:block" /> Radar of Every Mobile <br className="hidden md:block" /> Developer
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="py-8">
                <a href="#" className="px-8 py-3 bg-[#49BBBD] rounded-md text-white font-bold hover:bg-[#3ca3a5] transition-all">
                  Start learning now
                </a>
              </div>
            </div>

            {/* Image side */}
            <div className="w-full md:w-1/2 h-80 md:h-96 overflow-hidden rounded-2xl hidden md:block">
              <img 
                className="w-full h-full object-cover rounded-2xl transform transition duration-500 ease-in-out hover:scale-110" 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                alt="Featured blog visual"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
