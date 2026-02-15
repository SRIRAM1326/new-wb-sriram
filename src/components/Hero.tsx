"use client";

import React from "react";
import { motion } from "framer-motion";
import Terminal from "./Terminal";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-cyan/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-emerald/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400 mb-6">
                        <span className="w-2 h-2 rounded-full bg-secondary-emerald animate-pulse" />
                        Available for Quant & Trading Roles
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Building the <span className="text-primary-cyan">Future</span> of
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-secondary-emerald">
                            Algorithmic Trading
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 mb-10 max-w-xl">
                        SRIRAM M — Algorithmic Trading Developer with 2+ years of experience building
                        low-latency, multi-threaded trading systems and systematic strategies.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-xl bg-primary-cyan text-background-obsidian font-bold hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all transform hover:-translate-y-1"
                        >
                            View My Work
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-8 py-4 rounded-xl border border-primary-cyan/30 glass text-primary-cyan font-bold hover:bg-primary-cyan/10 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-xl border border-white/10 glass text-white font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <Terminal />
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary-cyan/30 rounded-tr-3xl -z-10" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-secondary-emerald/30 rounded-bl-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
