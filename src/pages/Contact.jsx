import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-white text-amber-900 font-sans min-h-screen">

      <Navbar />

      {/* HERO / HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">
          Contact Me
        </h1>
        <p className="text-amber-700 text-base sm:text-lg md:text-xl">
          I’d love to hear from you. Feel free to reach out for collaborations, 
          questions, or academic discussions.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-20">
        <form className="grid gap-6">
          <div>
            <label className="block text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-amber-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:px-5 sm:py-4"
            />
          </div>

          <div>
            <label className="block text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full border border-amber-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:px-5 sm:py-4"
            />
          </div>

          <div>
            <label className="block text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Your Message"
              className="w-full border border-amber-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none sm:px-5 sm:py-4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-amber-800 transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="font-serif text-lg sm:text-xl mb-2">Email</h4>
            <p className="text-amber-800 text-sm sm:text-base">dzidmpya@gmail.com</p>
          </div>
          <div>
            <h4 className="font-serif text-lg sm:text-xl mb-2">Phone</h4>
            <p className="text-amber-800 text-sm sm:text-base">+233 593 849 273</p>
          </div>
          <div>
            <h4 className="font-serif text-lg sm:text-xl mb-2">Location</h4>
            <p className="text-amber-800 text-sm sm:text-base">Accra, Ghana</p>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
}
