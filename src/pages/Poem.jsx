import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Poem() {
  return (
    <div className="bg-white text-amber-900 font-sans min-h-screen">

      <Navbar />

      {/* HERO / TITLE */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-amber-900">
          Cold
        </h1>
        
        <p className="text-amber-800 max-w-4xl text-xl mx-auto leading-relaxed">
          A reflective poem on endurance, self-preservation, and reclaiming personal space
          in a world that misreads exhaustion as virtue.
        </p>
      </section>

      {/* POEM CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        <h2 className="font-serif text-3xl text-amber-900">Cold</h2> 
        <p className="text-amber-800 leading-relaxed">
          Sometimes I want to give up. Then I stumble across motivational pieces urging me to “keep going,” and I heed.<br /><br />
          So I keep moving — without a defined destination, without arrival — a long, winding road that stretches like a question with no answer — like a thesis with no theme. It is isolating, and the horizon offers no promise.<br /><br />
          I am forced to continue because I do not want to be called lazy.<br />
          I am forced to continue because I do not want to be seen as undetermined.<br />
          I am forced to continue because I fear being labeled weak, inconsistent, a quitter, a disappointment.<br />
          And so I walk, not toward something, but away from the names people might call me.
        </p>

        <p className="text-amber-800 leading-relaxed">
          This is not ambition; this is survival in a world that mistakes exhaustion for virtue. The path has no shade, only eyes watching to see if I’ll stop. And so I keep moving — every step heavier than the last, every breath thinner, my body running on fumes of borrowed inspiration.
        </p>

        <p className="text-amber-800 leading-relaxed">
          Now I am dying from exhaustion, growing cold; the fire that once burneth bright flickers and fades. <br />
          Cold rises in its place.<br /><br />
          I choose to be cold — not out of hatred, not out of emptiness.<br />
          I choose to be cold — not out of resignation — no — but to preserve the little heat left inside me.<br />
          Like a cold store protects perishables, I protect myself from spoiling under the heat of relentless expectation.<br /><br />
          My coldness is not cruelty.<br />
          It is a quiet revolt.<br />
          It is my way of saying: I will not burn out to keep your hands warm.
        </p>

        <p className="text-amber-800 leading-relaxed">
          Cold is my shelter.<br /> 
          Cold is my boundary.<br />
          In this stillness, I am not dead; I am resting, rebuilding, preserving the essence of me that was almost lost to endless striving.<br />
          One day, perhaps, warmth will return — but it will be my own, lit not by fear of names but by the slow, steady spark of self-choosing.
        </p>

        <p className="text-amber-800 leading-relaxed">
          I am Cold, I know.<br />
          I choose to be Cold, I know.<br />
          Cold doesn’t attract, it repels, I know.<br />
          Cold doesn’t invite; it dismisses, I know.<br />
          But I have to preserve. I am firm about it.<br /><br />
          The coldest places preserve the most delicate things.<br />
          My essence is delicate; I will not set it ablaze merely to keep fickle opinions alight.<br />
          I shall preserve myself in the isolated corridors of Cold.
        </p>

        <p className="text-amber-700 text-sm italic text-center mt-12">
          — Dzidzo Mpya —
        </p>

        {/* BACK TO HOME BUTTON */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end">
        <Link
          to="/"
          className="inline-block text-sm text-amber-900 border border-amber-900 px-4 py-2 rounded hover:bg-amber-900 hover:text-white transition"
        >
          ← Back to Home
        </Link>
        </div>
      </section>


      <Footer />
    </div>
  );
}
