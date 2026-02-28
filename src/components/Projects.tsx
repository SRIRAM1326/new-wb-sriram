"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Zap, Activity, TrendingUp, BarChart3, Database, Search, Instagram, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "SENSEX-OPTION-ONLY",
        period: "Feb 2026 – Present",
        description: "Automated algorithmic system for SENSEX options trading with technical indicators (Heikin-Ashi, VWAP, SuperTrend) and real-time monitoring.",
        color: "from-blue-500/20 to-indigo-500/20",
        tags: ["Python", "Flask", "Flattrade API", "TA-Lib"],
        stats: ["SENSEX Options", "10-Point Target"],
        image: "/sensex-option.png"
    },
    {
        title: "Super SAR Option Scalping",
        period: "Dec 2025 – Feb 2026",
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
    {
        title: "US Health Care Financial Dashboard",
        period: "May 2025 – May 2025",
        description: "Executive-level Power BI dashboard analyzing 100,000+ patient records, tracking expenses, insurance recoveries, and financial deficits.",
        color: "from-blue-600/20 to-cyan-500/20",
        tags: ["Power BI", "DAX", "Financial Analysis", "What-If Modelling"],
        stats: ["₹120 Cr Expenses", "12% Pay Trend"],
        image: "/healthcare-dashboard.png",
        ppt: "/pptx/US_Healthcare.pptx"
    },
    {
        title: "Market Analysis - Sales Optimization",
        period: "Jun 2023 – Jul 2023",
        description: "Comprehensive analysis of 106,000+ sales across channels and regions to identify growth opportunities and optimize inventory.",
        color: "from-amber-600/20 to-orange-500/20",
        tags: ["BI", "Statistical Analysis", "Market Research", "Strategic Planning"],
        stats: ["51% Online Share", "18% Gap Found"],
        icon: "trending-up",
        ppt: "/pptx/Data_Analysis.pptx"
    },
];

const researchProjects = [
    {
        title: "Event Marketing – Major Events Analysis",
        period: "SRM University • 2023",
        description: "Analysed marketing strategy, budgeting and operations across three large-scale events including India International Leather Fair, Chennai Book Fair and ED Pavilion.",
        color: "from-purple-600/20 to-pink-500/20",
        tags: ["Marketing Strategy", "Budgeting", "Operations"],
        stats: ["100K–600K Visitors", "₹42.8L Budget"],
        bullets: [
            "Studied events with 100K–600K visitors",
            "Analysed budgets up to ₹42.8L",
            "Evaluated event lifecycle and stakeholder coordination"
        ],
        icon: "search",
        ppt: "/pptx/Event_Marketing_Professional.pptx"
    },
    {
        title: "Instagram Influencer Marketing Research",
        period: "SRM University • 2022",
        description: "Conducted quantitative research with 110 respondents to study influencer credibility and purchase behaviour.",
        color: "from-pink-600/20 to-rose-500/20",
        tags: ["Quantitative Research", "Consumer Behaviour", "Statistics"],
        stats: ["70:30 Performance", "110 Respondents"],
        bullets: [
            "Found influencer marketing outperforms traditional media 70:30",
            "Identified trust gap and authenticity impact on retention",
            "Applied statistical analysis and survey research"
        ],
        icon: "instagram",
        ppt: "/pptx/Instagram_Impact.pptx"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Production <span className="text-primary-cyan">Systems</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        Live deployment and architectural highlights of trading frameworks
                        and web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Academic <span className="text-secondary-purple">Research</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        Quantitative studies and market research conducted during academic tenure.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
                    {researchProjects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} isResearch />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, isResearch }: { project: any, index: number, isResearch?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative rounded-3xl overflow-hidden glass-card flex flex-col hover:border-primary-cyan/30 transition-colors duration-500"
        >
            {/* Gradient Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(34,211,238,0.15)_0%,transparent_70%)]" />

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
                        {project.icon === 'activity' ? (
                            <Activity className="w-16 h-16 text-primary-cyan opacity-40" />
                        ) : project.icon === 'trending-up' ? (
                            <TrendingUp className="w-16 h-16 text-warning-amber opacity-40" />
                        ) : project.icon === 'search' ? (
                            <Search className="w-16 h-16 text-secondary-purple opacity-40" />
                        ) : project.icon === 'instagram' ? (
                            <Instagram className="w-16 h-16 text-pink-500 opacity-40" />
                        ) : index === 0 && !isResearch ? (
                            <Zap className="w-16 h-16 text-primary-cyan opacity-40" />
                        ) : (
                            <Layers className="w-16 h-16 text-text-muted opacity-40" />
                        )}
                    </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 to-transparent" />
            </div>

            <div className="p-8 flex-1 flex flex-col relative">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary-cyan/60 mb-2 font-bold font-mono">
                    {project.period}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-cyan transition-colors duration-300 font-heading">
                    {project.title}
                </h3>
                <p className="text-text-body text-sm mb-6 flex-1 italic leading-relaxed">
                    &quot;{project.description}&quot;
                </p>

                {project.bullets && (
                    <ul className="mb-6 space-y-2">
                        {project.bullets.map((bullet: string, bIdx: number) => (
                            <li key={bIdx} className="text-[11px] text-text-muted flex gap-2">
                                <span className="text-primary-cyan">•</span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag: any) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-text-muted group-hover:border-primary-cyan/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex gap-4">
                        {project.stats.map((stat: any) => (
                            <span key={stat} className="text-[10px] font-bold text-text-muted group-hover:text-primary-cyan uppercase transition-colors">
                                {stat}
                            </span>
                        ))}
                    </div>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary-cyan hover:text-space-black transition-all duration-300"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                    {project.ppt && (
                        <a
                            href={project.ppt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary-purple hover:text-space-black transition-all duration-300 group/ppt"
                            title="View Presentation"
                        >
                            <FileText className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
