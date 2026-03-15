'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const products = [
  {
    id: 1,
    name: 'Adizero EVO SL',
    category: "Men's Running",
    price: 'Rp.2.500.000,00',
    image: 'sepatu-treadix4.png',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    name: 'Kobe 9 Elite Low Protro',
    category: "Neo Turquoise and Volt",
    price: 'Rp 3.269.000,00',
    image: 'sepatu-treadix2.png',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    name: 'Elite Fold-Over Tongue Firm Ground',
    category: 'Sepatu Bola Predator',
    price: 'Rp.2.580.000,00',
    image: 'sepatu-treadix6.png',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 4,
    name: 'Jersey Real Madrid',
    category: "Men's Jersey",
    price: 'Rp.2.000.000,00',
    image: 'sepatu-treadix5.png',
    span: 'md:col-span-2 md:row-span-1'
  }
];

export default function FeaturedProducts() {
  return (
    <section id="collections" className="py-24 px-6 md:px-12 bg-treadix-white text-treadix-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 md:mb-0">
              Latest <br /> Drops
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <button className="text-sm font-bold uppercase tracking-wider border-b-2 border-treadix-black pb-1 hover:text-treadix-orange hover:border-treadix-orange transition-colors">
              View All Products
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[400px] gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-gray-100 cursor-pointer ${product.span}`}
            >
              {/* Image */}
              <div className="absolute inset-0 bg-treadix-black/0 group-hover:bg-treadix-black/20 transition-colors duration-500 z-10" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1 drop-shadow-md">
                    {product.category}
                  </p>
                  <div className="flex justify-between items-end">
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tighter uppercase drop-shadow-md">
                      {product.name}
                    </h3>
                    <p className="text-white font-medium bg-black/40 px-3 py-1 backdrop-blur-sm">
                      {product.price}
                    </p>
                  </div>
                </div>

                {/* Quick Add Button */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <button className="bg-treadix-white text-treadix-black w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-treadix-accent transition-colors hover:scale-110 active:scale-95">
                    +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
