import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-obsidian selection:bg-primary-cyan/30 selection:text-primary-cyan">
      <Navbar />

      <div className="relative z-10">
        <Hero />

        <div id="about" className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Quant Mindset. <br />
                <span className="text-primary-cyan">Engineering Precision.</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  I specialize in designing and deploying systematic options and futures
                  strategies with end-to-end execution, risk management, and monitoring.
                </p>
                <p>
                  With a focus on achieving sub-100ms execution latency and 99.9% uptime,
                  I bridge the gap between complex financial theories and robust,
                  scalable software solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Strategies", value: "10+ Deployed" },
                { label: "Latency", value: "<100ms" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="text-primary-cyan text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>

      {/* Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </main>
  );
}
