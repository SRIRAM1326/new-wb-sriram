"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
    { text: "Initializing quant_engine...", color: "text-slate-400" },
    { text: "Connecting to NSE WebSocket server...", color: "text-slate-400" },
    { text: "Connection Established.", color: "text-secondary-emerald" },
    { text: "Scanning NIFTY 50 options chain...", color: "text-slate-400" },
    { text: "Loading Super SAR v6.0 strategy...", color: "text-slate-400" },
    { text: "Strategy active. Ready for trade.", color: "text-primary-cyan font-bold" },
];

export default function Terminal() {
    const [visibleLines, setVisibleLines] = useState<number>(0);

    useEffect(() => {
        if (visibleLines < lines.length) {
            const timer = setTimeout(() => {
                setVisibleLines((prev) => prev + 1);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [visibleLines]);

    return (
        <div className="w-full max-w-2xl font-mono text-xs md:text-sm bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-slate-500 text-[10px] uppercase tracking-widest">
                    quant_terminal.exe
                </div>
            </div>
            <div className="p-6 h-64 flex flex-col gap-2">
                {lines.slice(0, visibleLines).map((line, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={line.color}
                    >
                        <span className="text-slate-600 mr-2">$</span>
                        {line.text}
                    </motion.div>
                ))}
                {visibleLines === lines.length && (
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-primary-cyan inline-block ml-1"
                    />
                )}
            </div>
        </div>
    );
}
