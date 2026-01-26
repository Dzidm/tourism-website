import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import frenchEssay from "../assets/files/Writing_Sample.pdf";
import englishEssay from "../assets/files/Essay_English.pdf"

export default function Listings() {
  return (
    <div className="bg-white text-amber-900 font-sans min-h-screen">
      
      <Navbar />

      {/* HERO / HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">
          Undergraduate Research Essays
        </h1>
        <p className="text-amber-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          These essays analyze <em>L’Autre Fille</em> by Annie Ernaux, exploring identity,
          memory, silence, and self-construction. One essay is in French, the other is
          an English translation.
        </p>
      </section>

      {/* ESSAY CARDS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-20 grid gap-6 md:grid-cols-2">
        
        {/* French Essay */}
        <div className="border border-amber-200 rounded-xl p-6 hover:shadow-md transition">
          <h2 className="text-xl font-medium text-amber-800 mb-2">
            Research Essay (French)
          </h2>
          <p className="text-amber-900 text-sm mb-4">
            Original essay in French, focusing on identity, memory, and the psychological
            impact of a family secret in <em>L’Autre Fille</em>.
          </p>
          <a
            href={frenchEssay}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-amber-700 font-medium hover:underline cursor-pointer"
          >
            View Essay →
          </a>
        </div>

        {/* English Essay */}
        <div className="border border-amber-200 rounded-xl p-6 hover:shadow-md transition">
          <h2 className="text-xl font-medium text-amber-800 mb-2">
            Research Essay (English)
          </h2>
          <p className="text-amber-900 text-sm mb-4">
            English translation of the original essay, created to make the analysis
            accessible to a wider academic audience.
          </p>
          <a
            href={englishEssay}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-amber-700 font-medium hover:underline cursor-pointer"
          >
            View Essay →
          </a>
        </div>
      </section>

      {/* BACK TO HOME BUTTON */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end">
        <Link
          to="/"
          className="inline-block text-sm text-amber-900 border border-amber-900 px-4 py-2 rounded hover:bg-amber-900 hover:text-white transition"
        >
          ← Back to Home
        </Link>
        </div>

      <Footer />
    </div>
  );
}
