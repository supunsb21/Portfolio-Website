"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:supunsb21@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39828b] to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-400">
                Available for data analysis and machine learning opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
              <div className="p-4 rounded-lg bg-dark border border-slate-700 flex flex-col items-center gap-2">
                <FaPhone className="text-primary text-xl" />
                <p className="text-sm text-gray-300">+94 75 465 1034</p>
              </div>
              <div className="p-4 rounded-lg bg-dark border border-slate-700 flex flex-col items-center gap-2">
                <FaEnvelope className="text-primary text-xl" />
                <p className="text-sm text-gray-300 break-all">supunsb21@gmail.com</p>
              </div>
              <div className="p-4 rounded-lg bg-dark border border-slate-700 flex flex-col items-center gap-2">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <p className="text-sm text-gray-300">Sri Jayawardenepura Kotte</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-500/20"
              >
                Send Message
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
              <p>&copy; 2025 Supun Bandara. All rights reserved.</p>
              <div className="flex space-x-6">
                <a
                  href="https://lk.linkedin.com/in/supunsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
