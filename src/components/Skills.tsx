"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FileCode,
    Database,
    FileSpreadsheet,
    BarChart3,
    PieChart,
    Eraser,
    Binary,
    LayoutDashboard,
    Search,
    TrendingUp,
    MessageSquare,
    FileText,
    Scale
} from "lucide-react";

const programmingDataSkills = [
    { name: "Python (Pandas, NumPy, Matplotlib)", icon: <FileCode className="w-4 h-4" /> },
    { name: "SQL (Data Querying & Storage)", icon: <Database className="w-4 h-4" /> },
    { name: "Data Cleaning & Time-Series Wrangling", icon: <Eraser className="w-4 h-4" /> },
    { name: "Statistical & Volatility Analysis", icon: <Binary className="w-4 h-4" /> },
];

const algorithmicSystemsSkills = [
    { name: "Real-time market data (WebSocket/REST)", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Indicators (ATR, SuperTrend, SAR, VWAP)", icon: <Binary className="w-4 h-4" /> },
    { name: "Multi-threaded system design", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Order lifecycle & position management", icon: <Database className="w-4 h-4" /> },
    { name: "Risk-based stop-loss modeling", icon: <Binary className="w-4 h-4" /> },
];

const analyticsVisualizationSkills = [
    { name: "Dashboard Development (Flask, Power BI)", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Excel (Advanced Formulas, Modeling)", icon: <FileSpreadsheet className="w-4 h-4" /> },
    { name: "Data Viz & Performance Reporting", icon: <BarChart3 className="w-4 h-4" /> },
];

const financialAnalyticalSkills = [
    { name: "Market structure analysis", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Risk-reward evaluation", icon: <Scale className="w-4 h-4" /> },
    { name: "Performance & P&L tracking", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Data-driven decision making", icon: <Database className="w-4 h-4" /> },
];

const businessCommunicationSkills = [
    { name: "Market research & competitive analysis", icon: <Search className="w-4 h-4" /> },
    { name: "Requirement analysis", icon: <Search className="w-4 h-4" /> },
    { name: "Structured reporting & documentation", icon: <FileText className="w-4 h-4" /> },
    { name: "Stakeholder communication", icon: <MessageSquare className="w-4 h-4" /> },
];

function SkillBadge({ name, icon, index, colorClass }: { name: string, icon: React.ReactNode, index: number, colorClass: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px rgba(${colorClass === "text-primary-cyan" ? "34, 211, 238" : colorClass === "text-secondary-purple" ? "139, 92, 246" : "255, 255, 255"}, 0.4)`,
                borderColor: colorClass === "text-primary-cyan" ? "rgba(34, 211, 238, 0.6)" : "rgba(139, 92, 246, 0.6)"
            }}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-space-blue-card border border-border-main hover:border-transparent transition-all duration-300 cursor-default group backdrop-blur-md"
        >
            <div className={`transition-colors group-hover:text-white ${colorClass}`}>
                {icon}
            </div>
            <span className="text-sm font-medium text-text-body group-hover:text-text-heading">
                {name}
            </span>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Technical Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        Technical <span className="text-primary-cyan">Expertise</span>
                    </h2>
                </div>

                <div className="space-y-16 w-full">
                    {/* Programming & Data */}
                    <div className="text-center w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 font-heading text-text-body/80 capitalize tracking-wide">
                            Programming & <span className="text-primary-cyan">Data</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                            {programmingDataSkills.map((skill, idx) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={idx} colorClass="text-primary-cyan" />
                            ))}
                        </div>
                    </div>

                    {/* Algorithmic & Market Systems */}
                    <div className="text-center w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 font-heading text-text-body/80 capitalize tracking-wide">
                            Algorithmic & <span className="text-secondary-purple">Market Systems</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                            {algorithmicSystemsSkills.map((skill, idx) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={idx} colorClass="text-secondary-purple" />
                            ))}
                        </div>
                    </div>

                    {/* Analytics & Visualization */}
                    <div className="text-center w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 font-heading text-text-body/80 capitalize tracking-wide">
                            Analytics & <span className="text-primary-cyan">Visualization</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                            {analyticsVisualizationSkills.map((skill, idx) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={idx} colorClass="text-primary-cyan" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Business Section Title */}
                <div className="text-center mb-16 mt-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        Business <span className="text-secondary-purple">Strategy</span>
                    </h2>
                </div>

                <div className="space-y-16 w-full">
                    {/* Financial & Analytical Thinking */}
                    <div className="text-center w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 font-heading text-text-body/80 capitalize tracking-wide">
                            Financial & <span className="text-secondary-purple">Analytical Thinking</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                            {financialAnalyticalSkills.map((skill, idx) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={idx} colorClass="text-secondary-purple" />
                            ))}
                        </div>
                    </div>

                    {/* Business & Communication */}
                    <div className="text-center w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 font-heading text-text-body/80 capitalize tracking-wide">
                            Business & <span className="text-primary-cyan">Communication</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                            {businessCommunicationSkills.map((skill, idx) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={idx} colorClass="text-primary-cyan" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
