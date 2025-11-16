import { profile, summary, social } from "../data/data"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writings", href: "#writings" }
]

export default function Sidebar() {
  return (
    <aside className="hidden md:block fixed left-0 top-0 h-screen w-[320px] lg:w-[380px] px-6 lg:px-10 py-10 bg-secondary">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-white">{profile.name}</h1>
          <p className="mt-1 text-blue-200">{profile.role}</p>
        </div>
        <nav className="space-y-2">
          {nav.map(n => (
            <a key={n.label} href={n.href} className="block text-blue-100 hover:text-white">{n.label}</a>
          ))}
        </nav>
        <div className="flex gap-3 text-blue-200">
          <a href={social.find(s=>s.label==='LinkedIn')?.href} target="_blank" rel="noreferrer" className="hover:text-white"><FaLinkedin /></a>
          <a href={social.find(s=>s.label==='GitHub')?.href} target="_blank" rel="noreferrer" className="hover:text-white"><FaGithub /></a>
          <a href={social.find(s=>s.label==='Email')?.href} className="hover:text-white"><MdEmail /></a>
        </div>
      </div>
    </aside>
  )
}