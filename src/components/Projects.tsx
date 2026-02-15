"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Super SAR Option Scalping",
        period: "Dec 2025 – Present",
        description: "Production-grade multi-threaded algorithmic system for live NIFTY/SENSEX options trading with 1-second trading loop.",
        color: "from-primary-cyan/20 to-accent-blue/20",
        tags: ["Python", "Flask", "WebSockets", "Trading Engine"],
        stats: ["<100ms Latency", "99.9% Uptime"],
        image: "/saroption.png"
    },
    {
        title: "NanoProfits AI",
        period: "Sep 2025 – Dec 2025",
        description: "High-throughput tick-level logging engine with PostgreSQL and pullback-based scalping strategy.",
        color: "from-secondary-emerald/20 to-primary-cyan/20",
        tags: ["PostgreSQL", "JWT", "Multithreading", "Risk Control"],
        stats: ["Tick-level Data", "Auth Layer"],
        image: "/NanoProfits.png"
    },
    {
        title: "UVFarms Official Website",
        period: "2026",
        description: "Responsive multi-page business website for 9 agri-tech verticals, built with Next.js and AI-assisted workflows.",
        color: "from-slate-800/40 to-slate-900/40",
        tags: ["Next.js", "React", "Gemini CLI", "Responsive"],
        stats: ["uvfarms.in", "AI-Developed"],
        link: "https://uvfarms.in",
        image: "/uvfarms.png"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Production <span className="text-primary-cyan">Systems</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl">
                        Live deployment and architectural highlights of trading frameworks
                        and web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl flex flex-col hover:border-primary-cyan/30 transition-colors duration-500"
                        >
                            {/* Gradient Glow Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,242,255,0.15)_0%,transparent_70%)]" />

                            <div className={cn("h-48 flex items-center justify-center relative overflow-hidden", project.color)}>
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                                        {idx === 0 ? <Zap className="w-16 h-16 text-primary-cyan opacity-40" /> : <Layers className="w-16 h-16 text-slate-400 opacity-40" />}
                                    </>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background-obsidian/80 to-transparent" />
                            </div>

                            <div className="p-8 flex-1 flex flex-col relative">
                                <div className="text-[10px] uppercase tracking-[0.2em] text-primary-cyan/60 mb-2 font-bold">
                                    {project.period}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-cyan transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 flex-1 italic leading-relaxed">
                                    &quot;{project.description}&quot;
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-slate-400 group-hover:border-primary-cyan/20 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                    <div className="flex gap-4">
                                        {project.stats.map(stat => (
                                            <span key={stat} className="text-[10px] font-bold text-slate-500 group-hover:text-primary-cyan uppercase transition-colors">
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary-cyan hover:text-background-obsidian transition-all duration-300"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
