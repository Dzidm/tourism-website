import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import academicCV from "../assets/files/Dzidzo_Mpya- Academic CV.pdf"

export default function CV() {
  return (
    <div className="bg-white text-amber-900 font-sans min-h-screen">
      <Navbar />

      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-6xl mb-4">Curriculum Vitae</h1>
        <p className="text-amber-700 text-lg md:text-xl max-w-2xl mx-auto">
          I have an academic background in French and literature and psychology, with a strong interest in language, identity, and memory. My journey also extends into web development, where I focus on building responsive, user-centered interfaces that connect critical thinking with technology.
        </p>
        <a
          href={academicCV}
          download
          className="inline-block mt-6 bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition"
        >
          Download Full CV
        </a>
      </section>

      {/* WHO I AM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <h2 className="font-serif text-3xl mb-6 border-b-2 border-amber-900 inline-block">
          Who I Am
        </h2>
        <ul className="text-amber-800 leading-relaxed list-disc list-inside space-y-4">
  <li>I combine a background in French and Psychology with practical skills in web development, focusing on Frontend. My interests lie at the intersection of language, cognition, and technology, shaped by literary analysis, linguistic inquiry, and human-centered design.</li>
  <li>I have always loved school and the quiet moments it offers. Even if I am not studying, I enjoy sitting in a library, absorbing its silence more than its knowledge. I see it as a sanctuary of peace, a space to reflect and dream. Many have teased that I would become a lecturer one day—but just as I aim to define and contribute to technological spaces, I aspire to make a meaningful contribution to academia as well.</li>
  <li>I am fascinated by the intersection of human thought and digital systems, and how insights from psychology and linguistics can inform the design of tools that serve people rather than replace them. Whether I am studying a narrative, writing code, or experimenting with a new interface, I approach every challenge with curiosity, rigor, and a desire to understand the human perspective.</li>
  <li>Beyond academics and technology, I am motivated by questions of equity and accessibility: how can knowledge, language, and tools be made inclusive and empowering for all? This curiosity drives my ongoing exploration of AI, web development, and language, as I seek to build bridges between understanding and innovation. At my core, I am always learning, questioning, and looking for ways to connect ideas across disciplines in meaningful ways.</li>
</ul>


      </section>

      {/* SPECIALIZATION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <h2 className="font-serif text-3xl mb-6 border-b-2 border-amber-900 inline-block">
          Specialization
        </h2>
        <ul className="space-y-4 text-amber-800 list-disc list-inside">
          <li>Francophone women’s literature and narratives of memory & silence</li>
          <li>Research on identity formation, gender, and storytelling</li>
          <li>Front-end web development: React.js, Tailwind CSS, responsive design</li>
          <li>Building academic portfolio websites and digital presentations</li>
          <li>Bridging literary research with modern web technologies</li>
        </ul>
      </section>

      {/* PROFESSIONAL JOURNEY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <h2 className="font-serif text-3xl mb-6 border-b-2 border-amber-900 inline-block">
          Professional Journey
        </h2>
        <p className="text-amber-800 leading-relaxed">
          I started my academic journey studying French and Psychology at the University
          of Ghana, developing a strong foundation in language, literature, human behaviour, analysis, and critical thinking.
          During this time, I became fascinated by the potential of digital tools to communicate
          research effectively. This led me to web development, where I now create dynamic,
          user-friendly platforms for showcasing academic work. My dual expertise allows me
          to design websites that are not only technically sound but also reflective of the
          depth and nuance of the research they present.
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
    <Footer/>
    </div>
  );
}
