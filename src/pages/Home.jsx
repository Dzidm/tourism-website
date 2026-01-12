import React from "react";
import Navbar from "../components/Navbar";
import Profile1 from "../assets/image/profile1.png"; // import your image
import Footer from "../components/Footer";
import { Link } from "react-router";


export default function Home2() {
  return (
    <div className="bg-white text-amber-900 font-sans">

      <Navbar />

      {/* HERO - FULL WIDTH IMAGE STYLE */}
      <section className="relative">
        <div className="h-[500px] bg-amber-100 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-serif text-5xl md:text-6xl mb-4">
              French & Psychology (BA)
            </h1>
            <p className="text-amber-700 text-lg md:text-xl">
              Web Development - Frontend
            </p>
            <div className="mt-10 flex justify-center gap-6">
        {/* View CV */}
        <Link
          to="/cv"
          className="bg-amber-900 text-white px-8 py-3 text-sm hover:bg-amber-800 transition"
        >
          View Academic CV
        </Link>

        {/* Explore Research */}
        <Link
          to="/listings"
          className="border border-amber-900 px-8 py-3 text-sm hover:bg-amber-50 transition"
        >
          Explore Research
        </Link>
      </div>
          </div>
        </div>
      </section>

      {/* ABOUT WITH IMAGE */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl mb-6">
            About Me
          </h2>
          <p className="text-amber-800 leading-relaxed max-w-xl">
            I hold a Bachelor’s degree in French and Psychology. My research
            interests explore literature, gender studies, identity formation,
            and Francophone women’s narratives of memory and silence.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={Profile1}
            alt="Academic Portrait"
            className="w-80 h-96 object-cover rounded-lg shadow-lg border border-amber-200"
          />
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-amber-900 mb-12 text-center">
            Selected Research
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Identity and the Quest for Self in Annie Ernaux",
              "Silence and Patriarchy in Autobiographical Writing",
              "Women’s Memory in Francophone Literature",
            ].map((title, index) => (
              <div
                key={index}
                className="border border-amber-200 p-6 hover:border-amber-900 transition"
              >
                <h4 className="font-serif text-xl mb-4 text-amber-900">
                  {title}
                </h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  An exploration of narrative identity, memory construction,
                  and gendered silence in Francophone texts.
                </p>
                <a className="inline-block mt-4 text-sm hover:underline">
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  );
}
