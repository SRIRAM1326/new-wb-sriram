"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-space-black selection:bg-primary-cyan/30 selection:text-primary-cyan">
      <Navbar />

      <div className="relative z-10">
        <Hero />

        <div id="about" className="py-24 px-6 border-y border-border-main bg-space-blue-section/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">
                Know <span className="text-secondary-purple">Who I’m</span>
              </h2>
              <div className="space-y-6 text-text-body text-lg leading-relaxed">
                <p>
                  Hi, I’m <span className="text-primary-cyan font-semibold">Sriram</span> from Chennai, India.
                </p>
                <p>
                  I completed my B.Com in Information Systems Management at SRM Institute of Science & Technology — a unique blend of commerce and computer science. It gave me exposure to both financial concepts and technical systems, which shaped how I think today.
                </p>
                <p>
                  I’ve always been curious about how markets work and how technology can be used to interact with them in smarter ways. I enjoy understanding patterns, building things from scratch, and continuously improving what I create.
                </p>
                <div className="pt-4">
                  <p className="text-text-heading font-bold mb-4 font-heading text-xl">Outside of structured work, I enjoy:</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      { icon: "📈", text: "Exploring trading strategies and observing market behavior" },
                      { icon: "💻", text: "Building dashboards and experimenting with automation" },
                      { icon: "📚", text: "Learning new technologies and finance concepts" },
                      { icon: "🌍", text: "Exploring ideas, tech communities, and different perspectives" }
                    ].map((interest, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-base text-text-body hover:text-primary-cyan transition-colors group">
                        <span className="text-xl group-hover:scale-125 transition-transform">{interest.icon}</span>
                        {interest.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="italic text-primary-cyan/80 font-medium">
                  I like combining logic, creativity, and discipline — whether in markets or in code.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Strategies", value: "10+ Deployed" },
                { label: "Latency", value: "<100ms" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-border-main bg-space-blue-card/50 backdrop-blur-sm hover:border-primary-cyan/30 transition-colors group"
                >
                  <div className="text-primary-cyan text-2xl font-bold mb-1 font-heading group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                  <div className="text-text-muted text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>

      {/* Background Noise/Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </main>
  );
}
