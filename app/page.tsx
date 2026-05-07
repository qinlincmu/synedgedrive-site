export default function SynEdgeDriveLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-6">
                Edge AI • Motion Control • Intelligent Silicon
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Building the next generation of
                <span className="text-cyan-400"> edge intelligence</span>
              </h1>

              <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-2xl">
                SynEdgeDrive develops advanced motion control systems, real-time embedded AI,
                and intelligent control silicon inspired by modern industrial control platforms.
                We focus on high-performance edge computing for robotics, automation,
                power electronics, and autonomous systems.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-400 text-black px-6 py-3 font-medium hover:scale-105 transition-transform">
                  Contact Us
                </button>

                <button className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">
                  Research & Technology
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />

              <div className="relative rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur p-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-cyan-400 text-sm mb-2">Embedded AI</div>
                    <div className="text-2xl font-semibold">Real-Time Inference</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-cyan-400 text-sm mb-2">Motion Control</div>
                    <div className="text-2xl font-semibold">Industrial Precision</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-cyan-400 text-sm mb-2">Custom Silicon</div>
                    <div className="text-2xl font-semibold">Next-Gen Controllers</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-cyan-400 text-sm mb-2">Edge Systems</div>
                    <div className="text-2xl font-semibold">Low Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Core Technologies
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold">
            Hardware and intelligence designed together.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
            <div className="text-2xl font-semibold mb-4">Intelligent Control Chips</div>
            <p className="text-zinc-400 leading-relaxed">
              High-performance embedded control architectures for real-time industrial and robotic applications.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
            <div className="text-2xl font-semibold mb-4">Edge AI Runtime</div>
            <p className="text-zinc-400 leading-relaxed">
              Low-latency AI inference pipelines optimized for embedded deployment and autonomous decision systems.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
            <div className="text-2xl font-semibold mb-4">Motion & Power Systems</div>
            <p className="text-zinc-400 leading-relaxed">
              Advanced motor control, digital power conversion, and high-reliability industrial automation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="text-cyan-400 uppercase tracking-widest text-sm mb-6">
            Vision
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Bringing AI directly into real-time industrial systems.
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            SynEdgeDrive is building the infrastructure for intelligent robotics,
            edge-native autonomy, and next-generation control systems.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between gap-6 text-zinc-500 text-sm">
        <div>
          © 2026 SynEdgeDrive. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="mailto:admin@synedgedrive.com">
            admin@synedgedrive.com
          </a>

          <a className="hover:text-white transition-colors" href="#">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}
