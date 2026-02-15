"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5 text-primary-cyan" />,
        label: "Email",
        value: "sriram132607@gmail.com",
        href: "mailto:sriram132607@gmail.com",
    },
    {
        icon: <Phone className="w-5 h-5 text-secondary-emerald" />,
        label: "Phone",
        value: "+91 9677204948",
        href: "tel:+919677204948",
    },
    {
        icon: <Linkedin className="w-5 h-5 text-accent-blue" />,
        label: "LinkedIn",
        value: "in/sriram1326",
        href: "https://www.linkedin.com/in/sriram1326/",
    },
    {
        icon: <MapPin className="w-5 h-5 text-slate-400" />,
        label: "Location",
        value: "Chennai, India",
        href: "#",
    },
];

export default function Contact() {
    const [result, setResult] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending");
        setResult("Sending....");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "4a561344-1551-4f63-a900-891b3c470ed7");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult("Message Sent Successfully!");
                (event.target as HTMLFormElement).reset();
            } else {
                console.log("Error", data);
                setStatus("error");
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission error", error);
            setStatus("error");
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-cyan/5 rounded-full blur-[160px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Let&apos;s build the <br />
                            <span className="text-primary-cyan">next strategy</span> together.
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-lg">
                            Always open to discussing quant systems, backend architectures,
                            or new opportunities in the trading ecosystem.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, idx) => (
                                <a
                                    key={idx}
                                    href={info.href}
                                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                                            {info.label}
                                        </div>
                                        <div className="text-sm font-medium text-slate-200">
                                            {info.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-[2rem] border-white/10"
                    >
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary-cyan outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary-cyan outline-none transition-colors"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary-cyan outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className={cn(
                                    "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group",
                                    status === "sending" ? "bg-slate-700 cursor-not-allowed" : "bg-primary-cyan text-background-obsidian hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                                )}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            {result && (
                                <p className={cn(
                                    "text-center text-sm font-medium mt-2",
                                    status === "success" ? "text-secondary-emerald" : "text-red-400"
                                )}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>

                <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm bg-background-obsidian">
                    <div>© 2026 SRIRAM M. All rights reserved.</div>
                    <div className="flex gap-8">
                        <Link href="#about" className="hover:text-primary-cyan transition-colors">About</Link>
                        <Link href="#projects" className="hover:text-primary-cyan transition-colors">Privacy</Link>
                        <Link href="https://www.linkedin.com/in/sriram1326/" target="_blank" className="hover:text-primary-cyan transition-colors">LinkedIn</Link>
                    </div>
                </footer>
            </div>
        </section>
    );
}
