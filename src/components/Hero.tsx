"use client";

import React from "react";
import { motion } from "framer-motion";
import Terminal from "./Terminal";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/profile.jpg"
                    alt="Background"
                    className="w-full h-full object-cover filter brightness-[0.4]"
                />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-space-black via-space-black/80 to-transparent -z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent -z-10" />

            <div className="max-w-7xl mx-auto w-full flex flex-col items-start text-left relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 font-heading">
                        Hi There! <span className="inline-block animate-bounce">👋🏻</span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-secondary-purple">
                            I&apos;M SRIRAM M
                        </span>
                    </h1>

                    <div className="space-y-6 text-sm md:text-base text-text-body mb-12 leading-relaxed max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-cyan font-heading mt-4">
                            What I Bring to Your Company
                        </h2>
                        <p>
                            I design and engineer production-grade algorithmic trading infrastructure built for performance, precision, and resilience.
                        </p>
                        <p>
                            I approach financial markets as a systems engineering challenge — developing modular, multi-threaded architectures that manage real-time data ingestion, strategy evaluation, risk enforcement, and order execution with controlled latency and state integrity.
                        </p>
                        <p>
                            My focus extends beyond signal generation. I build structured, fault-tolerant systems that operate predictably under market stress, broker constraints, and infrastructure volatility.
                        </p>
                        <p>
                            From architecture design to execution lifecycle management and capital protection protocols, I take end-to-end ownership of the trading stack.
                        </p>
                        <p className="font-semibold text-primary-cyan">
                            Reliable. Risk-aware. Engineered for real markets.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-start">
                        <a
                            href="#projects"
                            className="px-10 py-4 rounded-xl button-space font-bold transition-all transform hover:-translate-y-1 text-lg shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        >
                            View My Work
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-10 py-4 rounded-xl border border-primary-cyan/30 glass-card text-primary-cyan font-bold hover:bg-primary-cyan/10 transition-all transform hover:-translate-y-1 flex items-center gap-2 text-lg"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-4 rounded-xl border border-border-main glass-card text-text-heading font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1 text-lg"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
