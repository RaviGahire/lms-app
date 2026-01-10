
import { motion } from 'framer-motion';
export const Home = () => {
    return (
<section 
      aria-label="home-page" 
      className="relative min-h-screen w-full flex items-center justify-center bg-slate-900 overflow-hidden"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="$RF7A5S8.png"
          alt="Student Background"
          className="w-full h-full object-contain object-center scale-105 select-none"
        />
        {/* Dynamic Overlay: Darker on mobile for readability, lighter on desktop */}
        <div className="absolute inset-0 bg-slate-950/50 lg:bg-slate-950/40 backdrop-blur-[1px]" />
        
        {/* Vignette effect to focus eye on center text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center"
        >
          {/* Main Heading: Fluid typography using clamp */}
          <h1 className="font-black text-white leading-[1.1] tracking-tight
            text-[clamp(2.5rem,8vw,6rem)] md:text-[clamp(4rem,10vw,8rem)]"
          >
            Studying online is <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 drop-shadow-sm">
              now much easier
            </span>
          </h1>

          {/* Subtext: Responsive width for optimal line length */}
          <p className="mt-6 md:mt-8 mx-auto font-medium text-cyan-50/90 leading-relaxed
            text-base md:text-xl lg:text-2xl max-w-[90%] md:max-w-2xl lg:max-w-3xl"
          >
            MasterTrack is an interactive platform designed to make learning feel like an experience, not a chore.
          </p>

          {/* Action Area: Stacks on small mobile, side-by-side on everything else */}
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
            <button className="w-full sm:w-auto px-12 py-4 md:py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all active:scale-95 shadow-2xl shadow-cyan-500/20 text-lg">
              Join for free
            </button>
            
            <button className="flex items-center gap-3 text-white font-bold hover:text-cyan-300 transition-colors group py-2">
              <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border-2 border-white/20 rounded-full group-hover:border-cyan-300 group-hover:bg-white/5 transition-all">
                <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floor - Fades out on the edges */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  );
};


