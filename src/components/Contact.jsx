import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let's build something</h2>
          <p className="mt-2 text-gray-600">Have a project in mind or want to say hi? Drop a message.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-6 bg-white/80 backdrop-blur border border-black/10 rounded-xl p-6">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={4} required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <p className="text-sm text-gray-600 flex items-center gap-2"><Mail className="h-4 w-4" /> I usually reply within 24 hours.</p>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">
              Send <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
