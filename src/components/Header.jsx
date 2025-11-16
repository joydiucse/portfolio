import { social } from "../data/data"
import Button from "@mui/material/Button"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">J</span>
          <a href="#home" className="font-semibold text-lg">WPFOLIO</a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Portfolio</a>
          <a href="#blog" className="hover:text-blue-600">Blog</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <div className="hidden md:flex">
          <Button size="small" variant="contained" href="#contact">Let’s talk</Button>
        </div>
      </div>
    </header>
  )
}