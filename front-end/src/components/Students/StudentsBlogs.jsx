import {IconStar,} from "@tabler/icons-react";

export const StudentsBlogs = () => {
    return (
        <div >
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                My Blogs
            </h3>
            <div className="grid grid-cols-1 gap-3">
                {[
                    "Dean's List 2023",
                    "Hackathon Winner",
                    "Research Assistant",
                    "Open Source Contributor"
                ].map((award, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-linear-to-r from-amber-500/10 to-transparent border border-amber-500/20 p-4 rounded-xl">
                        <div className="bg-amber-500/20 p-2 rounded-lg">
                            <IconStar className="w-5 h-5 text-amber-500" />
                        </div>
                        <span className="text-gray-200 font-medium">{award}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
