export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
        <p>© {year} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
