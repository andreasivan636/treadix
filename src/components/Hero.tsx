'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-treadix-black">
      {/* Background Image Setup */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop"
          alt="Dynamic athlete tying sneaker"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-linear-to-b from-treadix-black/80 via-transparent to-treadix-black"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <span className="inline-block py-1 px-3 border border-treadix-accent text-treadix-accent text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
            The new pinnacle collection
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-treadix-white leading-[0.9] mb-8 uppercase"
        >
          Defy<br />Gravity.
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-treadix-white/80 max-w-2xl mb-10 font-medium"
        >
          Engineered for motion. Precision crafted for those who push beyond the limit.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button className="group relative bg-treadix-accent text-treadix-black font-bold uppercase tracking-wide px-8 py-4 overflow-hidden flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center">
              Shop New Arrivals
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
          </button>

          <button className="group relative bg-transparent border border-treadix-white text-treadix-white font-bold uppercase tracking-wide px-8 py-4 overflow-hidden flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 group-hover:text-treadix-black transition-colors duration-300">
              Explore Collection
            </span>
            <div className="absolute inset-0 bg-treadix-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] text-treadix-white/50 uppercase tracking-widest mb-2 font-bold">Scroll</span>
        <div className="w-px h-12 bg-treadix-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-treadix-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
