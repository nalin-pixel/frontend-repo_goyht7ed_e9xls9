import { ExternalLink } from "lucide-react";

const work = [
  {
    title: "Interactive 3D Landing",
    description: "A Spline-powered hero with dynamic lighting and smooth page transitions.",
    tags: ["React", "Spline", "Framer Motion"],
    link: "#",
  },
  {
    title: "Realtime Dashboard",
    description: "Live data visualizations with WebSocket updates and dark mode.",
    tags: ["Vite", "Tailwind", "Charts"],
    link: "#",
  },
  {
    title: "E-commerce UI Kit",
    description: "Accessible components, cart logic, and checkout flows.",
    tags: ["shadcn/ui", "Radix", "Stripe"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A few things I've been crafting lately.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((item) => (
            <article key={item.title} className="group rounded-xl border border-black/10 bg-white/80 backdrop-blur p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <a href={item.link} className="p-2 rounded-md hover:bg-black/5" aria-label="Open project">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
