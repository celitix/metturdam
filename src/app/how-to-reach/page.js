import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function HowToReachSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 mt-16">
          How to Reach
        </h2>

        {/* Section 1 */}
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
          Directions for the Tamilnadu tourist places
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          <Link href="https://en.wikipedia.org/wiki/Salem,_Tamil_Nadu" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">Salem</span></Link> is an industrial area. 
          It is a major textile center in Tamilnadu. The steel plant in Salem is a unit 
          of the Steel Authority of India. Tamilnadu tourist places have a special place 
          for Mettur dam. The Mettur tops the list of dams in India.
        </p>

        {/* Section 2 */}
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
          Tamilnadu the beautiful southern state
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Chennai is the capital and the largest city of Tamilnadu. Tamilnadu is one 
          of the important states of the country. The literal meaning is ‘land of the tamils’. 
          It is located in the southernmost part of the Indian peninsula.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The geographical location of the state is mesmerizing. It is gifted with{" "}
          <Link href="https://en.wikipedia.org/wiki/Eastern_Ghats" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">Eastern Ghats</span></Link> in the north, 
          nilgiri hills, <Link href="https://en.wikipedia.org/wiki/Anaimalai_Hills" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">anamalai hills </span></Link> 
          and Kerala on the west. Bay of Bengal flows in the east of the state and 
          straight at the south lies the mighty Indian Ocean in the south.
        </p>

        {/* Section 3 */}
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
          The attractions of Salem
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Mettur dam is situated in Mettur which is in the Salem district of Tamilnadu.
        </p>

        <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
          <li>Salem has the steel plant under the authority of Steel Authority of India.</li>
          <li>Textile industry of Salem is old and huge.</li>
          <li>Lot of engineering colleges in the district.</li>
          <li>
            The sago factories that produce sago through starch. Nation’s 80% tapioca 
            and sago demand is fulfilled by Tamilnadu.
          </li>
          <li><span className="italic">Mettur dam</span>.</li>
        </ul>

        {/* Image 1 */}
        <div className="w-full mb-10 flex justify-center items-center">
          <Image
            src="/assets/howtoreach.jpg"
            alt="Mettur Dam Flow"
            width={800}
            height={500}
            className="rounded-lg w-[400px] h-[200px] object-cover"
          />
        </div>

        {/* Section 4 */}
        <h3 className="italic text-gray-900 text-lg mb-4">
          How to reach mettur dam?
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Mettur can be reached by all modes of transport. Tamilnadu is the 
          southernmost state of the country; hence naturally the distance covered 
          by the north Indian visitors is large.
        </p>

        <p className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">By Train</span> – the nearest railway 
          station for Mettur dam is Salem (55 km from Mettur). Salem is a busy railway 
          junction. From the economic point of view the district of Salem is important 
          in Tamilnadu tourist places.
        </p>

        {/* Image 2 */}
        <div className="w-full py-10 flex justify-center items-center">
          <Image
            src="/assets/train.png"
            alt="Train to Salem"
            width={800}
            height={500}
            className="rounded-lg w-[400px] h-[200px] object-cover"
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">By Air</span> – Peelamedu airport (
         <Link href="https://en.wikipedia.org/wiki/Coimbatore_International_Airport" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">
            Coimbatore international airport
          </span></Link>
          ) is the nearest airport for Mettur dam. From Coimbatore you can hire 
          a taxi or get a bus for Salem/Mettur. It is approximately 125 km from 
          your destination. The Peelamedu is connected with all the major cities 
          of the country.
        </p>

        {/* Image 3 */}
        <div className="w-full py-10 flex justify-center items-center">
          <Image
            src="/assets/airport.png"
            alt="Coimbatore Airport"
            width={800}
            height={500}
            className="rounded-lg w-[400px] h-[200px] object-cover"
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">By Road</span> – The district Salem and 
          the Mettur dam are well connected by the roadways. The transportation 
          department of Tamilnadu has paid special attention towards road 
          connectivity. You can find a bus from all major and minor cities of 
          the state.
        </p>

        {/* Image 4 */}
        <div className="w-full py-10 flex justify-center items-center">
          <Image
            src="/assets/road.png"
            alt="Tamilnadu Roads"
            width={800}
            height={500}
            className="rounded-lg w-[400px] h-[200px] object-cover"
          />
        </div>

        {/* Section 5 */}
        <h3 className="italic text-gray-900 text-lg mb-4">Your stay</h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          To facilitate your stay in Mettur or Salem there are various hotels 
          and accommodations available. You can easily find one online or simply 
          walk in. From any major city of India if you are coming to Tamilnadu 
          you must have a brief idea about the place.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          You can easily find a place to stay and then visit the dam that is 
          important in the list of dams in India. Mettur is definitely your loved 
          destination. Apart from the other Tamilnadu tourist places the Mettur 
          dam has historic and scientific importance.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Mettur dam is a milestone of engineering. It has been built in a huge 
            area and it looks massive.
          </li>
          <li>
            It binds the Kaveri River at a canyon when it reaches land. It is 
            definitely one of the important dams in the list of dams in India.
          </li>
        </ul>
      </div>
    </section>
  );
}
