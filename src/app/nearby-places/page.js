import React from "react";
import Image from "next/image";
import Link from "next/link";

const places = [
  {
    title: "The little attractions nearby",
    description: `If you are on for Tamilnadu tourism you need not be worried about how to reach Mettur. It is a well-connected place.Salem is the sixth largest city in the Indian state of Tamilnadu. It has the ownership of this beautiful and huge dam. In India dams have their own attractions. They are prized possessions for the concerned city and state.`,
    bullets: [
      "The beautiful park that is right opposite to the Dam. The park is a happening place and people from all the nearby places do visit here. The park has beautiful lawns and fountains. Children and kids get occupied in these parks.",
      "A beautiful statue called the Muniappan statue or the Aiyanara statue is situated near the dam.",
      "Huge number of tourist and devotees visit Mettur to take a holy dip in the Kaveri river water."
    ],
    image: "/assets/park.jpg",
  },
  {
    title: " Muniappan temple",
    description: `The Muniappan temple is an ancient and popular temple. The idol is huge and unique. It is worshipped as father or fore father. The god (Muniappan) is supposed to have supernatural powers. The blessings people get after his darshana is valued highly.`,
    bullets: [
      "The Muniappan temple is located in the Salem district of Tamilnadu.",
      "The temple is a popular pilgrimage spot for devotees.",
      "The temple is also a popular tourist spot for visitors.",
    ],
    image: "/assets/muniappan.png",
  },
  {
    title: "The nanthi(Nandi holy cow)",
    description: `An interesting idol of the holy cow Nandi is situated near the dam. The idol is generally immersed in the dam water. When the water level goes down in the Mettur dam, the nandi idol appears.History says that the Nandi idol was attached to a temple which has now completely disappeared.`,
    bullets: [
      "The nandi idol is a popular pilgrimage spot for devotees.",
    ],
    image: "/assets/nandi.png",
  },
  {
    title: "An old church",
    description: `There is an extremely old church that has been present in the mettur dam. However the major parts of the church are immersed in the dam water now. Like the nanthi this is also visible only when the water levels are low in the dam.`,
    bullets: [
      "The church is a popular pilgrimage spot for devotees.",
    ],
    image: "/assets/church.jpg",
  },
  {
    title: "The zoo near Mettur",
    description: `There is a small zoo near the mettur dam. As mentioned it is a small zoo that has few animals but the visitors’ rate this good. The zoo is a place to keep wild animals in restricted fences. The visitors of the zoo can see the animals in a cage and enjoy the wild life. It is an attraction or the kids.`,
    bullets: [
      "This zoo is a popular spot for visitors.",
    ],
    image: "/assets/zoo.jpg",
  },
  {
    title: "Hogenakkal Falls",
    description: ` hoge means smoke and kal means rock (Kannada) so the smoke likes appearance of the water when it falls on a rock is Hogenakkal. It is located in the state of Tamilnadu it is also called marikottayam. 180 km from Bangalore and 108 km from Salem (via mettur) this is a beautiful water fall. It is sometimes referred to as Niagara of India.`,
    bullets: [
      "The specialty of this Tamilnadu tourism attraction is the medicinal bath. Boating is allowed in the dry days."
    ],
    image: "/assets/HogenakkalFalls.jpg",
  },
  {
    title: "Kailasanathar Temple",
    description: `Located in Kanchipuram, this is a Hindu temple. The name says it all. This temple is dedicated to lord Shiva. The architecture is Dravidian style and it is an ancient temple. The Pallava dynasty rulers made this temple. From Mettur one needs to travel a distance of 295 km (via NH 48) to reach this historic temple.`,
    bullets: [
      "This is a popular spot for visitors.",
    ],
    image: "/assets/Kanchi.jpg",
  },
    {
    title: "Sankagiri Hill Fort",
    description: `38 km from Salem this fort is maintained by the archeological survey of India. The Vijayanagara Empire built this fort in the 15th century. This was later utilized by the British as their tax storage center. Tipu sultan the mighty fighter had a military base here at the Sankagiri hill fort. Like all other forts of the country this too has a long victorious history attached.`,
    bullets: [
      "This is a popular spot for visitors."
    ],
    image: "/assets/fort.jpg",
  },
    {
    title: "MM hills",
    description: `Male Mahadeshwara hills (betta in Kannada) is located at a distance of merely 50 KM from Mettur (TN). MM hills are at Karnataka (Karnataka). Mettur is one of the important dams amongst India dams. The male Mahadeshwara hill has an important shiva pilgrim center. The southern India has ample of temples which are historic in nature. The hill valleys, the water falls and the temples all together make southern India a beautiful destination.`,
    bullets: [
      "This is a popular spot for visitors."
    ],
    image: "/assets/mmhills.jpg",
  },
   {
    title: "Mekedatu Falls",
    description: ` a goat was chased by a tiger and to save its life the goat took a leap across the George and landed at the other end. Since then the George is called ‘mekadatu’ (goat’s leap). That’s an interesting story. This fall is in kanakpura Karnataka. This is a beautiful site near mettur. Mettur as we know is a landmark in India dams. Here Arkavati River merges with Kaveri. It is around 93 km from Bangalore. Bangalore is around 202 km from Mettur.`,
    bullets: [
      "It is a one of the popular spot for visitors."
    ],
    image: "/assets/mekedatu.jpg",
  },
];

export default function NearbyPlacesSection() {
  return (
   <>
   <section className="w-full bg-white px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
    

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 mt-16">
          Nearby Places
        </h2>

        {/* Subtitle */}
        <p className="italic text-gray-700 mb-4">
          A trip to Mettur for Tamilnadu tourism.
        </p>

        {/* Paragraphs */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Mettur dam is one of the most important destinations for Tamilnadu{" "}
          <Link href="https://en.wikipedia.org/wiki/Tourism" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">Tourism</span></Link>. If you are
          planning a tour to the beautiful state of southern India, don’t miss
          the view of this mesmerizing dam.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          In India dams are of utter importance and they attach scenic beauty of
          the country.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            India is a country blessed with huge natural resources. Rivers and
            dams are a part and parcel of the life line of the country.
          </li>
          <li>
            In India dams are not just water reservoirs but also important
            tourist destinations.
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-4">
          Mettur dam is in the Salem district of Tamilnadu.{" "}
          <span className="italic">Salem</span> is an industrial area. The dam
          has extremely beautiful view. The weather is hot mostly.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            The{" "}
            <Link href="https://en.wikipedia.org/wiki/Hydroelectricity" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">hydroelectricity</span></Link>{" "}
            power project which is linked with the Mettur dam is an interesting
            thing to see.
          </li>
          <li>The spinning water attracts lot of Tamilnadu tourists.</li>
          <li>The localities are frequent visitors of this dam.</li>
        </ul>
      </div>
    </section>

  {/* Alternate text image se4ction */} 

 <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {places.map((place, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <div className="relative w-full lg:w-1/2 h-72 lg:h-96 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-green-100 w-full lg:w-1/2  p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-gray-800 italic">
                {place.title}
              </h2>
              <p className="text-gray-600 my-4 leading-relaxed ">
                {place.description}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {place.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
   </>
  );
}
