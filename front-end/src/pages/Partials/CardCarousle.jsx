
export const CardCarousle = () => {
    return (
        <section className="bg-[#9dccff2f] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Related Blog</h2>
                    <a href="#" className="underline font-medium">See all</a>
                </div>
                <div className="flex gap-6 overflow-x-auto snap-x pb-6 no-scrollbar">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="min-w-87.5 md:min-w-112.5 bg-white p-6 rounded-3xl shadow-sm snap-start">
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
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
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
    )
}
