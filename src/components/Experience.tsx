"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, FileText } from "lucide-react";

const experiences = [
    {
        company: "UVFarms",
        role: "Algorithmic Trading Developer",
        period: "Nov 2023 – Present",
        bullets: [
            "Engineered a low-latency, multi-threaded Python trading framework processing real-time market data via WebSockets for automated signal evaluation and order execution across NIFTY and SENSEX derivatives. Achieved 99.9% system uptime with sub-100ms execution latency.",
            "Designed, backtested, and deployed 6+ systematic trading strategies using technical indicators (VWAP, Supertrend, SAR, CPR, ATR) across 1-, 3-, and 5-minute timeframes. Integrated live P&L tracking, drawdown monitoring, and real-time risk metrics across 200+ live trading days.",
            "Automated end-to-end execution through Dhan and Flattrade APIs with position reconciliation, order validation, and kill-switch logic. Implemented watchdogs and retry mechanisms, reducing manual intervention by 95% during market open and volatile periods.",
            "Built Live Market Data Engine: WebSocket-based tick/OHLC ingestion with buffering, failover handling, and latency-aware processing.",
            "Developed Execution & Risk Layer: Automated order management with real-time P&L monitoring, ATR-based risk controls, and position reconciliation.",
            "Created Strategy Research Pipeline: Modular backtesting framework for testing signal robustness across volatility regimes before live deployment.",
            "Implemented Monitoring & Diagnostics: Real-time dashboards tracking execution accuracy, API latency, system health, and resource utilization.",
        ],
    },
    {
        company: "Domino's",
        role: "Business Associate (Internship)",
        period: "Dec 2022 – Feb 2023",
        bullets: [
            "Team Handling & Operations: Gained foundational experience in team leadership and operational management in a high-pressure environment.",
            "Logistics & Time Management: Mastered order picking and delivery logistics to meet strict deadlines during peak-hour rushes.",
            "Conflict Resolution: Resolved customer concerns with high-quality solutions, ensuring satisfaction and brand loyalty.",
            "Financial Management: Handled cash transactions and tracked expenses with precise order pricing.",
            "Professional Communication: Developed strong communication skills through direct client interactions and polite phone etiquette.",
        ],
        ppt: "/pptx/Dominos_Internship_Report.pptx"
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Professional <span className="text-secondary-purple">Timeline</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl">
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
                            className="relative pl-8 border-l border-secondary-purple/20"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-purple shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-text-heading font-heading">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-primary-cyan mt-1 group cursor-default">
                                        <Building2 className="w-4 h-4 group-hover:text-secondary-purple transition-colors" />
                                        <span className="font-semibold group-hover:text-text-heading transition-colors">{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-card border-border-main text-text-muted text-sm font-mono">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </div>
                                {(exp as any).ppt && (
                                    <a
                                        href={(exp as any).ppt}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-1 rounded-full glass-card border-border-main text-primary-cyan hover:bg-primary-cyan hover:text-space-black transition-all duration-300 text-sm font-mono group/ppt"
                                        title="View Internship Report"
                                    >
                                        <FileText className="w-4 h-4" />
                                        <span>View Report</span>
                                    </a>
                                )}
                            </div>

                            <ul className="space-y-4">
                                {exp.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="text-text-body max-w-3xl leading-relaxed flex gap-3">
                                        <span className="text-primary-cyan mt-1.5">•</span>
                                        {bullet}
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
