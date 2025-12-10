import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Dummy Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-green-600">Mettur Dam</div></Link>
          <p className="text-gray-300 text-sm ">
            Experience the timeless charm of Mettur Dam — where nature, history, and engineering come together.
Plan your visit, explore nearby attractions, and witness the stunning views of the Cauvery River.
Stay connected for travel updates, visitor information, and local experiences around Mettur.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/mettur-dam-the-lifeline-of-tamil-nadu" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-green-500 transition leading-snug">
               Mettur Dam: The Lifeline of Tamil Nadu
              </p>
            </Link>

            <Link href="/blog/mettur-dam-hogenakkal-tamilnadu" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-green-500 transition leading-snug">
             Mettur Dam – Hogenakkal (Tamilnadu)
              </p>
            </Link>

            <Link href="/blog/nandi-a-meditative-bull" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog3.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-green-500 transition leading-snug">
                Nandi -A Meditative Bull
              </p>
            </Link>

         
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
            <li><Link href="/mettur-dam-history" className="hover:text-green-500 transition">History</Link></li>
            <li><Link href="/controversies" className="hover:text-green-500 transition">Controversies</Link></li>
            <li><Link href="/nearby-places" className="hover:text-green-500 transition">Nearby Places</Link></li>
            <li><Link href="/how-to-reach" className="hover:text-green-500 transition">How to reach</Link></li>
            <li><Link href="/blog" className="hover:text-green-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d62487.19228605706!2d77.807421!3d11.803758!3m2!1i1024!2i768!4f13.1!2m1!1sMettur%20Dam%20Tamil%20Nadu%20636401!5e0!3m2!1sen!2sus!4v1762001008032!5m2!1sen!2sus" 
           
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
