import Image from "next/image";
import HeroSection from "./components/hero";

export default function Home() {

 const images = [
    "/assets/gal1.jpg",
    "/assets/gal2.jpg",
    "/assets/gal3.png",
    "/assets/gal4.png",
    "/assets/gal5.jpg",
    "/assets/gal6.png",
    "/assets/gal7.png",
    "/assets/gal9.png",
    "/assets/gal10.png",
    "/assets/gal11.png",
    "/assets/gal12.png",
    "/assets/gal8.png",
  ];

  return (
<>
{/* ==== Hero Section ==== */}
<HeroSection />


{/* ==== Mid Text section ==== */}
   <section className="w-full bg-white py-8 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold font-[cursive] mb-2 text-black">
          Travel with a clear Conscience
        </h2>

        {/* Horizontal Line */}
        <div className="w-full h-[1px] bg-gray-300 mb-6"></div>

        {/* Paragraphs */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          <em>Mettur dam</em> is situated at Mettur in the district of Salem, Tamil Nadu, India. 
          This is one of the largest dams of India. The presence of Mettur dam makes it one of 
          the important Tourist places in Tamil Nadu. The value mettur dam attaches to the asset 
          of Tamil Nadu is priceless. Constructed in the year 1934, this dam has a rich{" "}
          <em>history</em>. Like other dams of India its construction history too is interesting 
          and lengthy. Mettur was a result of disputes that arose on the water usage of River Kaveri.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Kaveri is a sacred river of the southern India. It originates in Karnataka. The entire 
          flow of river Kaveri is interesting. It is celebrated as ‘Dakshina Ganga’. Ganga is an 
          important river of the country and known all over the world. The importance of river 
          Ganges to the entire country is similar to that of Kaveri to the Southern India. Hence 
          reserving the water of Kaveri in the Mettur dam was an important decision taken long 
          back in the history.
        </p>
      </div>
    </section>

{/* ==== Gallery Section ==== */}
   <section className="w-full bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold font-[cursive] mb-2 text-black">
          Gallery
        </h2>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

        {/* Image Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] h-40 md:h-44 lg:h-48 overflow-hidden rounded-md"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>


{/* ==== Quote section ==== */}
  <section className="w-full bg-white py-8 px-6 md:px-12 ">
      <div className="border border-gray-300 mx-16"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Quote Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 md:-top-8 text-gray-400 text-6xl md:text-7xl">
          &ldquo;
        </div>

        {/* Quote Text */}
        <p className="text-gray-700 text-base md:text-lg font-semibold leading-relaxed mt-8 ">
          But love is much like a dam: if you allow a tiny crack to form through which
          only a trickle of water can pass, that trickle will quickly bring down the
          whole structure, and soon no one will be able to control the force of the
          current. For when those walls come down, then love takes over, and it no
          longer matters what is possible or impossible, it doesn’t even matter whether
          we can keep the loved one at our side. To love is to lose control.
        </p>

        {/* Author */}
        <p className="text-gray-500 text-sm mt-6">— Paulo Coelho</p>
      </div>
    </section>
</>
  );
}
