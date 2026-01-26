import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Teaching() {
  return (
    <div className="bg-white text-amber-900 font-sans min-h-screen">

      <Navbar />

      {/* Hero / Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-amber-900">
          Teaching & Mentoring
        </h1>
        <p className="text-amber-800 leading-relaxed max-w-3xl mx-auto">
          I am passionate about guiding learners at all levels, from early education to university students, combining my love for languages, literature, and innovative learning approaches.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Professional Experience</h2>
        <ul className="list-disc list-inside text-amber-800 space-y-3">
          <li>
            Undergraduate Tutorial Assistant (TA), French Department – University of Ghana
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>Assisted tutorial classes of ~30 students across various levels</li>
              <li>Designed individualized approaches for diverse learning abilities to improve efficiency</li>
              <li>Supported the Department of Modern Languages Library as a Library Aide</li>
              <li>Participated in examination invigilation duties across faculties</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Early Volunteering */}
      <section className="max-w-7xl mx-auto px-6 py-10 my-12 bg-amber-50 rounded-xl">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Early Volunteering</h2>
        <ul className="list-disc list-inside text-amber-800 space-y-2">
          <li>Assisted in preschool classrooms, supporting early language and cognitive development</li>
          <li>Volunteered at a special school, providing individualized attention and fostering inclusive learning environments</li>
        </ul>
      </section>

      {/* Private Tuition */}
      <section className="max-w-7xl mx-auto px-6 py-14 bg-amber-50 rounded-xl">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">
          Private One-on-One Tuition
        </h2>
        <p className="text-amber-800 leading-relaxed max-w-4xl">
          I offer personalized one-on-one French and English lessons for students and working professionals.
          Each session is tailored to the learner’s goals, level, and pace, whether for academic support,
          professional communication, or language confidence building.
        </p>
      </section>

      {/* Teaching Philosophy & Skills */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Teaching Philosophy & Skills</h2>
        <p className="text-amber-800 leading-relaxed">
          I believe in adaptive teaching approaches that respect individual learning differences. My work emphasizes engagement, critical thinking, and creating inclusive, supportive learning environments. Skills developed include curriculum design, mentoring, academic support, and integrating technology to enhance learning.
        </p>
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
