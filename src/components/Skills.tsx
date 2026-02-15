"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    LineChart,
    Terminal as TerminalIcon,
    Cpu
} from "lucide-react";

const skillCategories = [
    {
        title: "Quant & Trading Systems",
        icon: <Cpu className="w-5 h-5" />,
        skills: ["Backtesting", "Risk Management", "Options & Futures", "Market Data Processing", "Execution Engines"],
    },
    {
        title: "Real-Time & Backend",
        icon: <TerminalIcon className="w-5 h-5" />,
        skills: ["WebSockets", "REST APIs", "Multithreading", "Event-Driven Systems", "Flask"],
    },
    {
        title: "Languages & DB",
        icon: <Code2 className="w-5 h-5" />,
        skills: ["Python", "SQL", "PostgreSQL", "Next.js", "React"],
    },
    {
        title: "Data Analysis",
        icon: <LineChart className="w-5 h-5" />,
        skills: ["Pandas", "NumPy", "Power BI", "Tableau", "Matplotlib"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-primary-cyan">Competencies</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl">
                        A comprehensive stack tailored for building high-performance
                        financial systems and automated trading frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-cyan/10 flex items-center justify-center text-primary-cyan mb-6 group-hover:bg-primary-cyan group-hover:text-background-obsidian transition-all">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="text-slate-400 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan/40" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
