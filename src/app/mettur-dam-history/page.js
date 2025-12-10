import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function HistorySection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
  

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 mt-16">
          History
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Mettur dam is one of the largest dams in India. Like other dams of
          India the purpose of this dam was also
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Conserving river water for various uses.</li>
          <li>Storage of water to be used at different period of time.</li>
          <li>Promotion of other water related activities.</li>
        </ul>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-4">
          The Mettur dam is located on the river{" "}
          <Link href="https://en.wikipedia.org/wiki/Kaveri" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">Kaveri (Cauveri)</span></Link>.
          It is located in Mettur in the district of Salem. Salem is in the
          Tamilnadu district of India. It is said that the history of this dam
          dates back to 1834 and 1934. This is one century. Like other dams of
          India even this dam had to undergo a lot of paper work and
          discussions.
        </p>

        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>This is also one of the largest dam in the world.</li>
          <li>
            In the year 1994 the dam celebrated its{" "}
            <Link href="https://en.wikipedia.org/wiki/Diamond_jubilee" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">Diamond Jubilee</span></Link>{" "}
            (60 years).
          </li>
        </ul>

        {/* Image 1 */}
        <div className="w-full mb-10 flex justify-center items-center">
          <Image
            src="/assets/history1.jpg"
            alt="Mettur Dam"
            width={800}
            height={500}
            className="rounded-lg w-[400px] h-[200px] object-cover"
          />
        </div>

        {/* Importance Section */}
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
          The importance of the Dam
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Kaveri river is one of the most important rivers of the country.
          Especially in the southern states of India. Kaveri is also a{" "}
          <Link href="https://en.wikipedia.org/wiki/Sacredness" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">sacred</span></Link> river. It
          attaches the same values that river Ganga has for the entire nation.
          As per Hindu mythology these rivers have been quoted to be worshiped.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Mettur dam which is one of the Dams of India constructed on the Kaveri
          River has huge importance for the states and{" "}
          <Link href="/nearby-places" rel="noopener noreferrer"><span className="italic text-blue-600">nearby places.</span></Link>
        </p>

        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>
            The river Kaveri flows in the two important states of India.
            Karnataka and Tamilnadu. The states are economically sound and the
            agricultural activities are highly dependent on the river water.
          </li>
          <li>
            The reason why the dam is one of the largest in India is that the
            state of Tamilnadu needed a huge water reservoir to collect water
            and help the entire state.
          </li>
        </ul>

        {/* Image 2 */}
        <div className="w-full mb-10 flex justify-center items-center">
          <Image
            src="/assets/history2.jpg"
            alt="Mettur Dam View"
            width={800}
            height={500}
            className="rounded-lg w-[400px] h-[200px] object-cover"
          />
        </div>

        {/* Why Section */}
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
          Why Mettur dam was a must?
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Mettur dam is the only source of largest reservoir in Tamilnadu.
          Tamilnadu is a southern state of India. It is also known as the{" "}
<span className="italic">“rice bowl of Tamilnadu”.</span>
        </p>

        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>Rice is the staple food of southern India.</li>
          <li>The paddy farms (rice cultivation) need water logged land.</li>
          <li>Other activities like hydroelectricity and fishery.</li>
          <li>Kaveri is a rain-fed river and the water is seasonal.</li>
        </ul>

        {/* Chronology Section */}
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
          The chronology of river and dam
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          River Kaveri and the usage of its water has been a point of discussion
          in the country for a long period. In the time period between 1892 and
          1924 the usage of the water was regulated.
        </p>

        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>
            Princely state of Mysore (Mysuru) and the Province of Madras now
            Karnataka and Tamilnadu were given guidelines for the usage of the
            river water.
          </li>
          <li>
            A tribunal for the{" "}
            <Link href="https://en.wikipedia.org/wiki/Kaveri_River_water_dispute" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">
              Cauvery water distribution
            </span></Link>{" "}
            was formed in the year 1990. This was a result of the expiry of 1924
            agreement.
          </li>
          <li>
            The states were not content with the regulations and the water sharing deals.
          </li>
          <li>
            In the year 2002 monsoon was a failure. Both the states and the rivers were in dearth of water. Hence the need for kaveri distribution revoked.
          </li>
          <li>
            Karnataka has been unhappy with the decision.
          </li>
          <li>
            The Supreme Court of India is the final authority to decide on the
            disturbed distribution.
          </li>
        </ul>

       <p className="text-gray-700 leading-relaxed mb-4">The highest capacity of this one of the largest dam in India is 120 feet. The river and the water dispute seldom let the dam to fill its extreme capacity.</p>

        <p className="text-gray-700 leading-relaxed">
          The latest news and disturbance for the Kaveri water has been seen in
          Karnataka and Tamilnadu in the month of September 2016.
        </p>
      </div>
    </section>
  );
}
