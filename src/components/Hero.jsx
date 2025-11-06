import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 w-full pt-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            Building playful, modern, interactive web experiences
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I design and develop high-quality apps with a focus on performance,
            accessibility, and delightful interactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/80 backdrop-blur border border-black/10 hover:bg-white transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
