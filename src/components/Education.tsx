"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Academic <span className="text-primary-cyan">Background</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl">
                        My foundation in Information Systems Management and statistical analysis.
                    </p>
                </div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l border-secondary-purple/20"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-purple shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-text-heading font-heading">Bachelor of Commerce (Information Systems Management)</h3>
                                <div className="flex items-center gap-2 text-primary-cyan mt-1 font-semibold text-lg">
                                    SRM Institute of Science and Technology
                                </div>
                                <div className="flex items-center gap-4 mt-2 text-text-muted text-sm font-mono">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        Chennai, India
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        Jan 2021 – May 2023
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 py-3 rounded-2xl glass-card border-border-main flex flex-col items-center justify-center">
                                <div className="text-primary-cyan text-xl font-bold font-heading">7.83 / 10.0</div>
                                <div className="text-text-muted text-[10px] uppercase font-bold tracking-widest">CGPA</div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl glass-card border-border-main max-w-3xl">
                            <div className="flex items-center gap-2 text-text-heading font-bold mb-4 font-heading">
                                <BookOpen className="w-5 h-5 text-secondary-purple" />
                                Coursework
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "IBM SPSS Statistics",
                                    "MS Office Automation",
                                    "Principal of Management (NPTEL)",
                                ].map((course) => (
                                    <span key={course} className="px-3 py-1.5 rounded-lg bg-white/5 border border-border-main text-sm text-text-body hover:border-primary-cyan/30 transition-colors">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
