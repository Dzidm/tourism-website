import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function () {
  return (
    <div className="bg-white text-amber-900 font-sans min-h-screen">
      <Navbar />

      {/* Article */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl mb-10 text-amber-900">
          From Language to Mind to Computation: An Academic Trajectory
        </h1>

        <div className="space-y-6 text-amber-800 leading-relaxed text-lg">
          <p>
            I did not arrive at technology by abandoning the humanities. I arrived
            at it by following language.
          </p>

          <p>
            My academic journey began with a Bachelor’s degree in French and
            Psychology, two disciplines that taught me, early on, that language
            is never neutral. In French studies, language appeared as memory,
            power, silence, and resistance—particularly through literature. In
            Psychology, it emerged as cognition, behavior, perception, and
            internal life. Together, they shaped my understanding of language not
            merely as a tool for communication, but as a structure through which
            humans organize thought, identity, and experience.
          </p>

          <p>
            My first formal encounter with linguistics during my undergraduate
            years deepened this awareness. Concepts such as phonetics,
            morphology, syntax, and semantics reframed language for me as a
            system governed by patterns and constraints. What once felt
            intuitive now appeared architectural. Language had a form. It had
            rules. And more importantly, it had a mind behind it.
          </p>

          <p>
            After graduation, I found myself drawn to another structured
            language: code.
          </p>

          <p>
            The growing presence of technology in everyday life, combined with my
            enduring interest in languages, led me to explore web development,
            particularly frontend development. Learning HTML, CSS, JavaScript,
            and later React felt less like a departure from my academic
            background and more like its continuation in another register. Code,
            too, is a language—one that demands clarity, logic, and intentional
            design. Where natural language communicates with humans, code
            communicates with machines, yet both require precision and meaning.
          </p>

          <p>
            This convergence has since guided my current transition into
            artificial intelligence. What increasingly fascinates me is not AI
            as spectacle, but AI as a cognitive project: systems trained on
            language, shaped by human data, and capable of influencing how
            knowledge is produced and consumed. My background in psychology
            grounds me in questions of cognition and behavior, while my training
            in language and literature keeps me attentive to ethics, bias, and
            meaning. Web development, in turn, has given me the practical skills
            to build, test, and interact with these systems.
          </p>

          <p>
            I am particularly interested in approaches to AI that prioritize
            human-centered design—models that serve, assist, and augment human
            capacities rather than replace or dominate them. Understanding how
            humans think, speak, remember, and interpret the world feels
            essential to building technologies that respect those processes.
          </p>

          <p>
            Looking back, my path does not appear fragmented. It appears
            cumulative.
          </p>

          <p>
            From language, I learned structure and expression.
            <br />
            From psychology, I learned the mind behind them.
            <br />
            From computation, I am learning how these elements are modeled,
            simulated, and extended.
          </p>

          <p>
            This trajectory continues to evolve, but its foundation remains the
            same: a commitment to understanding humans—how we think, how we
            speak, and how we design the systems that increasingly speak back to
            us.
          </p><br />
        </div>

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
