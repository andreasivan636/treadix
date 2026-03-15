import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ContainerScroll } from "@/components/ContainerScroll";
import FeaturedProducts from "@/components/FeaturedProducts";
import Scrollytelling from "@/components/Scrollytelling";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-treadix-black text-treadix-white selection:bg-treadix-accent selection:text-treadix-black flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Container Scroll Animation */}
      <div className="flex flex-col overflow-hidden bg-treadix-black pt-20 -mb-20">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-lg md:text-xl font-bold tracking-widest text-treadix-accent uppercase">
                ENGINEERED FOR EXCELLENCE
              </h1>
              <span className="text-5xl md:text-[6rem] font-bold mt-4 leading-none tracking-tighter text-treadix-white uppercase block">
                Aero-Weave<br />Technology
              </span>
            </>
          }
        >
          <img
            src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=3840&auto=format&fit=crop"
            alt="Aero-Weave Detailed Fabric Texture"
            className="mx-auto rounded-xl object-cover h-full w-full object-center shadow-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <FeaturedProducts />
      <Scrollytelling />
      <Footer />
    </main>
  );
}
