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

            <div className="max-w-7xl mx-auto w-full flex flex-col items-start text-left">
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
                        <p>
                            I’m an <span className="text-primary-cyan font-semibold">Algorithmic Trading Engineer</span> focused on building high-performance, production-grade systems for real-time financial markets. My work centers on designing scalable data pipelines, automated trading strategies, and full-stack platforms that transform live market data into actionable execution.
                        </p>
                        <p>
                            I specialize in <span className="text-secondary-purple font-semibold">Python, event-driven architectures, and low-latency systems</span>. I’ve built end-to-end trading infrastructure including WebSocket market feeds, VWAP-based strategy engines, risk management modules, and live monitoring dashboards.
                        </p>
                        <p>
                            I enjoy solving complex problems at the intersection of data, speed, and reliability — and turning them into robust, real-world products.
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
