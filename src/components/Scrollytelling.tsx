'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-treadix-black text-treadix-white overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-24 gap-12">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 z-20">
          <FadeIn>
            <span className="text-treadix-accent font-bold uppercase tracking-widest text-sm border-b border-treadix-accent pb-1 inline-block">
              Proprietary Technology
            </span>
          </FadeIn>
          
          <motion.h2 
            style={{ opacity }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-tight"
          >
            Zero <br /> Gravity <br /> Foam.
          </motion.h2>
          
          <motion.p 
            style={{ opacity }}
            className="text-lg md:text-xl text-treadix-white/70 max-w-md"
          >
            Engineered at the molecular level to return 30% more energy than standard EVA foam. Every stride feels lighter. Every jump pushes higher.
          </motion.p>
          
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-treadix-gray/50">
              <div>
                <h4 className="text-3xl font-bold text-treadix-white mb-2">30%</h4>
                <p className="text-sm font-medium uppercase text-treadix-white/50 tracking-wide">Energy Return</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-treadix-white mb-2">15g</h4>
                <p className="text-sm font-medium uppercase text-treadix-white/50 tracking-wide">Lighter than air</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Parallax Image Area */}
        <div className="flex-1 relative h-[50vh] md:h-[80vh] w-full z-10 hidden md:block">
          <motion.div 
            style={{ y: imageY, scale }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=2070&auto=format&fit=crop" 
              alt="Detailed sneaker sole technology"
              className="w-full h-full object-cover object-center rounded-2xl shadow-2xl brightness-75"
            />
            {/* Overlay to blend image into dark background smoothly */}
            <div className="absolute inset-0 bg-linear-to-t from-treadix-black via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-r from-treadix-black via-transparent to-transparent"></div>
          </motion.div>

          {/* Floating UI Elements */}
          <motion.div 
            style={{ opacity }}
            className="absolute top-1/4 left-1/4 bg-treadix-white/10 backdrop-blur-md border border-treadix-white/20 p-4 rounded-lg hidden lg:block"
          >
            <p className="text-xs uppercase tracking-widest font-bold text-treadix-accent mb-1">Carbon Plate</p>
            <p className="text-sm text-treadix-white">Maximized responsiveness.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
