'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-treadix-black/70 backdrop-blur-md border-b border-treadix-gray"
    >
      <div className="flex-1 flex items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-treadix-white hover:text-treadix-accent transition-colors">
          TREADIX
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center space-x-8">
        {['Men', 'Women', 'Collections', 'Drops'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-treadix-white/80 hover:text-treadix-white transition-colors uppercase tracking-wide"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex-1 flex justify-end items-center space-x-6">
        <button className="text-treadix-white/80 hover:text-treadix-white transition-colors" aria-label="Search">
          <Search size={20} />
        </button>
        <button className="text-treadix-white/80 hover:text-treadix-white transition-colors" aria-label="Profile">
          <User size={20} />
        </button>
        <button className="text-treadix-white/80 hover:text-treadix-white transition-colors relative flex items-center" aria-label="Cart">
          <ShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-treadix-accent text-treadix-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>
        <button className="md:hidden text-treadix-white/80 hover:text-treadix-white transition-colors ml-4" aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
