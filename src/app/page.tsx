import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-space-black selection:bg-primary-cyan/30 selection:text-primary-cyan">
      <Navbar />

      <div className="relative z-10">
        <Hero />

        <div id="about" className="py-24 px-6 border-y border-border-main bg-space-blue-section/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">
                Know <span className="text-secondary-purple">Who I'M</span>
              </h2>
              <div className="space-y-6 text-text-body text-lg leading-relaxed">
                <p>
                  Hi! I’m <span className="text-primary-cyan font-semibold">Sriram</span> from Chennai, India.
                  I’m an Algorithmic Trading Developer who builds automated trading systems and real-time market data tools using Python.
                </p>
                <p>
                  I hold a B.Com in Information Systems Management from SRM Institute of Science & Technology and I enjoy combining finance, data, and technology to create trading solutions.
                </p>

                <div className="pt-4">
                  <p className="text-text-heading font-bold mb-4 font-heading text-xl">Outside of coding, I enjoy :</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      { icon: "📈", text: "Exploring trading strategies & market behaviour" },
                      { icon: "💻", text: "Building dashboards and automation tools" },
                      { icon: "📚", text: "Learning new technologies and finance concepts" },
                      { icon: "🌍", text: "Exploring new ideas and tech communities" }
                    ].map((interest, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-base text-text-body hover:text-primary-cyan transition-colors group">
                        <span className="text-xl group-hover:scale-125 transition-transform">{interest.icon}</span>
                        {interest.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Strategies", value: "10+ Deployed" },
                { label: "Latency", value: "<100ms" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border-main bg-space-blue-card/50 backdrop-blur-sm">
                  <div className="text-primary-cyan text-2xl font-bold mb-1 font-heading">{stat.value}</div>
                  <div className="text-text-muted text-xs uppercase tracking-widest font-bold">{stat.label}</div>
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

      {/* Background Noise/Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </main>
  );
}
