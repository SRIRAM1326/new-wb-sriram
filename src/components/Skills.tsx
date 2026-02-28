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
    FileText
} from "lucide-react";

const technicalSkills = [
    { name: "Python (Pandas, NumPy, Matplotlib)", icon: <FileCode className="w-4 h-4" /> },
    { name: "SQL", icon: <Database className="w-4 h-4" /> },
    { name: "Excel", icon: <FileSpreadsheet className="w-4 h-4" /> },
    { name: "Power BI", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Data Visualization", icon: <PieChart className="w-4 h-4" /> },
    { name: "Data Cleaning & Wrangling", icon: <Eraser className="w-4 h-4" /> },
    { name: "Statistical Analysis", icon: <Binary className="w-4 h-4" /> },
    { name: "Dashboard Development", icon: <LayoutDashboard className="w-4 h-4" /> },
];

const businessSkills = [
    { name: "Market Research", icon: <Search className="w-4 h-4" /> },
    { name: "Business Analysis", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Stakeholder Communication", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Report Writing", icon: <FileText className="w-4 h-4" /> },
];

function SkillBadge({ name, icon, index, isBusiness }: { name: string, icon: React.ReactNode, index: number, isBusiness?: boolean }) {
    const isPurple = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
                scale: 1.05,
                boxShadow: isBusiness ? "0 0 20px rgba(139, 92, 246, 0.4)" : "0 0 20px rgba(34, 211, 238, 0.4)",
                borderColor: isBusiness ? "rgba(139, 92, 246, 0.6)" : "rgba(34, 211, 238, 0.6)"
            }}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-space-blue-card border border-border-main hover:border-transparent transition-all duration-300 cursor-default group backdrop-blur-md"
        >
            <div className={`transition-colors group-hover:text-white ${isBusiness ? "text-secondary-purple" : "text-primary-cyan"}`}>
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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        Technical <span className="text-primary-cyan">Skills</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24 max-w-5xl">
                    {technicalSkills.map((skill, idx) => (
                        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={idx} />
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        Business <span className="text-secondary-purple">Skills</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl">
                    {businessSkills.map((skill, idx) => (
                        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={idx} isBusiness />
                    ))}
                </div>
            </div>
        </section>
    );
}
