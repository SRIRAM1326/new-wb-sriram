"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
    {
        company: "UVFarms",
        role: "Algorithmic Trading Developer",
        period: "Nov 2023 – Present",
        bullets: [
            "Engineered low-latency Python trading framework processing real-time WebSocket data for NIFTY and SENSEX derivatives.",
            "Designed and deployed 6+ algorithmic strategies using VWAP, SuperTrend, Parabolic SAR, CPR, and ATR indicators.",
            "Automated trade execution via Dhan and Flattrade APIs, reducing manual intervention by 95%.",
            "Built real-time monitoring dashboards tracking P&L, drawdown, and risk metrics with automated alerting.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Professional <span className="text-primary-cyan">Timeline</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl">
                        My journey through fintech and algorithmic system development.
                    </p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l border-primary-cyan/20"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)]" />

                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-primary-cyan mt-1">
                                        <Building2 className="w-4 h-4" />
                                        <span className="font-semibold">{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="text-slate-400 max-w-3xl leading-relaxed">
                                        • {bullet}
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
