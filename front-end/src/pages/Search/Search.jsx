import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const courseImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
];

const instructorImages = [
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=25",
  "https://i.pravatar.cc/80?img=38",
];

const courses = Array(8).fill(null).map((_, i) => ({
  id: i,
  image: courseImages[i % 4],
  category: "Design",
  duration: "3 Month",
  title: "AWS Certified Solutions Architect",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  instructor: "Lina",
  avatar: "https://i.pravatar.cc/30?img=5",
  oldPrice: "$100",
  price: "$80",
}));

const instructors = [
  { name: "Tamara Clarke", avatar: "https://i.pravatar.cc/100?img=47", courses: 12 },
  { name: "Adam Levin", avatar: "https://i.pravatar.cc/100?img=12", courses: 8 },
  { name: "Eveny Howard", avatar: "https://i.pravatar.cc/100?img=32", courses: 15 },
  { name: "Humbert Holland", avatar: "https://i.pravatar.cc/100?img=25", courses: 6 },
  { name: "Patricia Mendoza", avatar: "https://i.pravatar.cc/100?img=38", courses: 9 },
];

const creators = [
  { name: "Jane Cooper", role: "UI Designer", avatar: "https://i.pravatar.cc/80?img=47", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { name: "Adam Levin", role: "Dev Lead", avatar: "https://i.pravatar.cc/80?img=12", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { name: "Tamara Wilson", role: "Data Scientist", avatar: "https://i.pravatar.cc/80?img=32", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
];

const deals = [
  { discount: "50%", title: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", bg: "from-teal-400 to-cyan-500" },
  { discount: "10%", title: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", bg: "from-orange-400 to-pink-500" },
  { discount: "50%", title: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", bg: "from-violet-500 to-purple-600" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
    <div className="relative overflow-hidden h-44">
      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-3 left-3 bg-white text-teal-600 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full shadow">
        {course.category}
      </span>
      <span className="absolute top-3 right-3 bg-teal-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
        {course.duration}
      </span>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-sm text-gray-800 leading-snug mb-1">{course.title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">{course.desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={course.avatar} alt={course.instructor} className="w-6 h-6 rounded-full" />
          <span className="text-xs text-gray-500">{course.instructor}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-400 line-through">{course.oldPrice}</span>
          <span className="text-sm font-bold text-teal-500">{course.price}</span>
        </div>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ title, sub, link = true }) => (
  <div className="flex items-end justify-between mb-6">
    <div>
      {sub && <p className="text-xs uppercase tracking-widest text-teal-500 font-semibold mb-1">{sub}</p>}
      <h2 className="text-2xl font-black text-gray-800 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h2>
    </div>
    {link && <a href="#" className="text-sm text-teal-500 hover:text-teal-600 font-semibold transition-colors">See all →</a>}
  </div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export function SearchPage() {
  const [email, setEmail] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F8FB] font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black text-teal-600 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>TOTC</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {["Home", "Courses", "Careers", "Blog", "About Us"].map(n => (
              <a key={n} href="#" className="hover:text-teal-500 transition-colors">{n}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-100 overflow-hidden">
              <img src="https://i.pravatar.cc/32?img=5" alt="user" className="w-full h-full object-cover" />
            </div>
            <span className="hidden md:block text-sm font-semibold text-gray-700">Lina</span>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-400 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-sm uppercase tracking-widest text-teal-100 font-semibold mb-3">The Best Platform</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Search your favourite course
          </h1>
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl">
            <input
              type="text"
              placeholder="Search courses, topics..."
              className="flex-1 px-5 py-4 text-gray-700 text-sm outline-none"
            />
            <button className="bg-teal-500 hover:bg-teal-600 transition-colors text-white px-6 py-4 text-sm font-semibold">
              Search
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["Subject", "Partner", "Program", "Language", "Availability", "Learning Type"].map(f => (
              <button key={f} className="bg-white/20 hover:bg-white/30 text-white text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 transition-all">
                {f} ▾
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* ── COURSE GRID 1 ── */}
        <section>
          <SectionHeader title="Top Courses For You" sub="Explore" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.slice(0, 4).map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        </section>

        {/* ── PLATFORM BANNER ── */}
        <section className="bg-gradient-to-r from-teal-500 to-cyan-400 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Know about our learning platform</h2>
            <p className="text-teal-100 text-sm leading-relaxed mb-6">Free E-book, videos & consultation. Top instructors from around the world, top courses from your team.</p>
            <div className="flex gap-3">
              <button className="bg-white text-teal-600 font-bold text-sm px-6 py-3 rounded-xl hover:shadow-lg transition-all">Start learning now</button>
              <button className="border-2 border-white text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-all">Present & Call</button>
            </div>
          </div>
          {/* Instructor Avatars */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <p className="text-xs text-teal-100 font-semibold uppercase tracking-wider">Top Instructors</p>
            <div className="flex -space-x-3">
              {instructors.slice(0, 4).map((ins, i) => (
                <img key={i} src={ins.avatar} alt={ins.name} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-teal-600 flex items-center justify-center text-xs font-bold">+5</div>
            </div>
          </div>
        </section>

        {/* ── COURSE GRID 2 (Recommended) ── */}
        <section>
          <SectionHeader title="Recommended for you" sub="Handpicked" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.slice(4, 8).map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        </section>

        {/* ── INSTRUCTORS ROW ── */}
        <section>
          <SectionHeader title="Classes taught by real creators" sub="Learn from the best" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {creators.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-start group">
                <div className="relative shrink-0">
                  <img src={c.avatar} alt={c.name} className="w-16 h-16 rounded-2xl object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute -bottom-1 -right-1 bg-teal-500 w-4 h-4 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{c.name}</h3>
                  <p className="text-teal-500 text-xs font-medium mb-2">{c.role}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="bg-white rounded-3xl p-10 shadow-sm">
          <SectionHeader title="What our students have to say" sub="Testimonials" link={false} />
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
            <div className="flex items-center justify-center gap-3">
              <img src="https://i.pravatar.cc/48?img=20" alt="Savannah" className="w-12 h-12 rounded-full object-cover" />
              <div className="text-left">
                <p className="font-bold text-gray-800 text-sm">Savannah Nguyen</p>
                <p className="text-xs text-gray-400">tanya.hill@example.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEALS ── */}
        <section>
          <SectionHeader title="Top Education offers & deals" sub="Limited Time" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {deals.map((d, i) => (
              <div key={i} className={`bg-gradient-to-br ${d.bg} rounded-2xl p-6 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
                <span className="text-5xl font-black opacity-30 absolute top-3 right-4">{d.discount}</span>
                <div className="relative z-10">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">Save {d.discount}</span>
                  <h3 className="font-bold text-lg mb-2">{d.title}</h3>
                  <p className="text-white/80 text-xs leading-relaxed mb-4">{d.desc}</p>
                  <button className="bg-white text-gray-800 text-xs font-bold px-4 py-2 rounded-xl hover:shadow-md transition-all">Claim Deal</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLINE BANNER ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Skilline", tagline: "Virtual Class for Zoom", color: "from-sky-500 to-blue-600" },
            { name: "TOTC", tagline: "Virtual Class for Zoom", color: "from-teal-500 to-emerald-500" },
          ].map((b, i) => (
            <div key={i} className={`bg-gradient-to-br ${b.color} rounded-2xl p-8 text-white flex items-center justify-between`}>
              <div>
                <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{b.name}</h3>
                <p className="text-white/80 text-sm">{b.tagline}</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-xl backdrop-blur-sm border border-white/30 transition-all">
                Learn More
              </button>
            </div>
          ))}
        </section>

      </div>

      {/* ── NEWSLETTER ── */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-500 py-16 px-6 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Subscribe to get our Newsletter</h2>
          <p className="text-teal-100 text-sm mb-8">Stay up to date with our latest courses, deals, and insights.</p>
          <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 text-gray-700 text-sm outline-none"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-4 text-sm font-bold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>TOTC</span>
          <div className="flex gap-6 text-sm">
            {["Careers", "Privacy Policy", "Terms & Conditions"].map(l => (
              <a key={l} href="#" className="hover:text-teal-400 transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-xs text-gray-500">© 2021 Class Technologies Inc.</p>
        </div>
      </footer>
    </div>
  );
}