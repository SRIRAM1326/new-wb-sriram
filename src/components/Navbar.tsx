"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "glass py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg bg-primary-cyan/10 flex items-center justify-center border border-primary-cyan/20 group-hover:border-primary-cyan/50 transition-colors">
                        <TrendingUp className="w-6 h-6 text-primary-cyan" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary-cyan transition-colors">
                        SRIRAM<span className="text-primary-cyan">.</span>M
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-primary-cyan transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="px-5 py-2 rounded-full bg-primary-cyan text-background-obsidian text-sm font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all transform hover:scale-105"
                    >
                        Resume
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 glass border-t border-white/5 py-6 px-6 md:hidden flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-slate-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
