'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-treadix-black border-t border-treadix-gray py-16 px-6 md:px-12 text-treadix-white max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-3xl font-bold tracking-tighter text-treadix-white hover:text-treadix-accent transition-colors inline-block mb-6">
            TREADIX
          </Link>
          <p className="text-treadix-white/60 text-sm mb-6 leading-relaxed">
            Defy gravity. Engineered for motion. Built for those who never stop.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            {['IG', 'TW', 'FB', 'YT'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-treadix-gray flex items-center justify-center text-xs font-bold hover:border-treadix-accent hover:text-treadix-accent transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide uppercase text-sm">Products</h4>
          <ul className="space-y-4 text-sm text-treadix-white/60">
            <li><a href="#" className="hover:text-treadix-white transition-colors">Shoes</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">Clothing</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">Accessories</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">New Arrivals</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide uppercase text-sm">Support</h4>
          <ul className="space-y-4 text-sm text-treadix-white/60">
            <li><a href="#" className="hover:text-treadix-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">Order Status</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">Shipping Options</a></li>
            <li><a href="#" className="hover:text-treadix-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide uppercase text-sm">Stay in the Loop</h4>
          <p className="text-sm text-treadix-white/60 mb-4">
            Sign up for exclusive drops, early access, and fitness insights.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border border-treadix-gray px-4 py-3 text-sm focus:outline-none focus:border-treadix-white w-full transition-colors"
            />
            <button 
              type="submit" 
              className="bg-treadix-white text-treadix-black font-bold px-6 py-3 text-sm hover:bg-treadix-accent transition-colors whitespace-nowrap"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-treadix-gray flex flex-col md:flex-row justify-between items-center text-xs text-treadix-white/40">
        <p>&copy; {new Date().getFullYear()} Treadix Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-treadix-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-treadix-white transition-colors">Terms of Sale</a>
          <a href="#" className="hover:text-treadix-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
