"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaGithub, FaCode, FaChevronDown } from "react-icons/fa";

const WORDS = ["Valuable Insights.", "Business Solutions.", "Predictive Models."];

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const el = textRef.current;
      if (!el) return;
      const currentWord = WORDS[wordIndex];
      let speed: number;

      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        speed = 50;
      } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        speed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        speed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % WORDS.length;
        speed = 500;
      }

      timer = setTimeout(type, speed);
    }

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-primary font-medium mb-4">Hello, I&apos;m Supun Bandara</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turning Data into <br />
            <span ref={textRef} className="text-gradient typing-cursor" />
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Data Analyst with a BSc in Statistics &amp; Computer Science. I
            specialize in statistical modeling, machine learning, and
            visualization to drive business solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-darker font-bold rounded-full hover:bg-slate-800 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg shadow-black/5 dark:shadow-white/10"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start space-x-6 text-slate-500 dark:text-gray-400">
            <a
              href="https://lk.linkedin.com/in/supunsb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:supunsb21@gmail.com"
              className="hover:text-primary transition-colors text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/supunsb21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 animate-float group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative w-full h-full bg-white dark:bg-card rounded-[0.8rem] border border-slate-200 dark:border-slate-700/50 flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src="/images/pro-pic.png"
                alt="Supun Bandara"
                fill
                className="object-cover hover:scale-105 transition-all duration-700 ease-out"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl hidden md:block animate-bounce-slow">
              <FaCode className="text-2xl text-gradient" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-slate-400 dark:text-gray-500">
        <FaChevronDown className="text-xl" />
      </div>
    </section>
  );
}
