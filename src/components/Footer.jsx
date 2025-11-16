export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary">J</span>
            <span className="font-semibold">WPFOLIO</span>
          </div>
          <p className="mt-4 text-sm text-blue-100">Ready to get started? Let’s build something great.</p>
        </div>
        <div>
          <h4 className="font-medium">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#projects" className="hover:text-white">Portfolio</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#education" className="hover:text-white">Education</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Subscribe to newsletter</h4>
          <form className="mt-3 flex gap-2">
            <input className="flex-1 rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-blue-200" placeholder="Enter email" />
            <button className="rounded-md bg-blue-600 px-3 py-2 text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-blue-100 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Joynal Abedin</span>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  )
}