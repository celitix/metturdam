"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ControversiesSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
      
       
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 mt-16">
          Controversies
        </h2>

        {/* Paragraphs */}
   
        <p className="text-gray-700 leading-relaxed mb-4">
          <span className="italic">Mettur dam</span> is situated at Mettur in the district of Salem, Tamilnadu, India. 
          This is one of the largest dam in India. The presence of Mettur dam makes it 
          one of the important Tourist places in Tamilnadu. The value mettur dam attaches 
          to the asset of Tamilnadu is priceless.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Constructed in the year 1934, this dam has a 
          <Link href="/mettur-dam-history" ><span className="text-blue-600 font-medium"> rich history</span></Link>. 
          Like other dams of India its construction history too is interesting and lengthy. 
          Mettur was a result of disputes that arose on the water usage of River Kaveri.
        </p>

        {/* Subheading */}
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
          The dimensions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          1700 m (5600 ft.) in length, this dam is beautifully built in the Salem district 
          of Tamilnadu. The hydroelectricity project of the dam is huge. The dam creates a 
          <Link href="https://en.wikipedia.org/wiki/Stanley_Reservoir" target="_blank" rel="noopener noreferrer"><span className="italic"> Stanley reservoir</span></Link>. This Stanley reservoir is 
          named after Sir, <Link href="https://en.wikipedia.org/wiki/George_Stanley" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">George Stanley</span></Link>. 
          His Excellency Sir Stanley was the guide behind the construction of this dam.
        </p>

        {/* Image */}
        <div className="w-full mb-10 flex justify-center items-center">
          <Image
            src="/assets/controversy.jpg"
            alt="Mettur Dam Construction"
            width={800}
            height={500}
            className="rounded-lg w-[400px] h-[200px] object-cover"
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          The maximum capacity of the dam is 120 ft. This volume of water capacity is quite huge and extraordinary.
        </p>

        {/* Subheading */}
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
          The Kaveri dispute
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          India is a land of rivers. The rivers of India are all rain fed. The usage of 
          water of these rivers is distributed amongst various states and provinces. 
          However there are disputes too. The Mettur Dam, largest dam in India, has always 
          been in news because of the Cauvery water dispute between the States of Tamil Nadu 
          and Karnataka.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            Kaveri water dispute is an important chapter to be studied, while learning about the dams.
          </li>
          <li>
            The Mettur dam sometimes is devoid of water in certain seasons because of other 
            channeled dams in the <span className="italic">nearby places</span>.
          </li>
          <li>
            The states of Karnataka and Tamilnadu had serious issues over this disputed Kaveri water.
          </li>
          <li>
            The Centre had to step in the matter and asked Karnataka to release the Dam’s water.
          </li>
          <li>
            Supreme Court then ordered Tamil Nadu to co-operate with the CRA and finally Tamil Nadu gave in. 
            The Supreme Court of India came to a verdict on the judicial distribution of Kaveri River’s water. 
            But the decision was again challenged as it was unsatisfactory.
          </li>
          <li>
            Tamil Nadu <Link href="https://en.wikipedia.org/wiki/Chief_minister_(India)" target="_blank" rel="noopener noreferrer"><span className="text-blue-600 font-medium">Chief Minister</span></Link> then directed 
            the officials to immediately file a petition in the Supreme Court seeking a direction 
            to Karnataka to release Tamil Nadu its due share of water.
          </li>
          <li>
            On Sep 28, 2012, the Supreme Court slammed the Karnataka government for failing to comply 
            with the directive of the CRA. Left with no other option, Karnataka started releasing 
            the Dam’s water. This led to wide protests and violence in Karnataka.
          </li>
          <li>
            Thus, this Mettur dam became life supporting system for Tamilnadu.
          </li>
        </ul>
      </div>
    </section>
  );
}
