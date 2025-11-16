import { profile } from "../data/data"
import Button from "@mui/material/Button"

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Portfolio highlights
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Unveiling My Professional Odyssey: Portfolio Highlights</h1>
          <p className="mt-4 text-gray-700">{profile.role} based in {profile.location}</p>
          <div className="mt-6 flex items-center gap-4">
            <img src="https://placehold.co/32x32" alt="avatar" className="h-8 w-8 rounded-full" />
            <img src="https://placehold.co/32x32" alt="avatar" className="h-8 w-8 rounded-full" />
            <img src="https://placehold.co/32x32" alt="avatar" className="h-8 w-8 rounded-full" />
          </div>
          <div className="mt-8 flex gap-3">
            <Button variant="contained" href="#contact">Let’s talk</Button>
            <Button variant="outlined" href={profile.linkedin} target="_blank">View LinkedIn</Button>
          </div>
        </div>
        <div className="md:justify-self-end">
          <img src="https://placehold.co/520x520/png" alt="portrait" className="rounded-2xl border shadow-sm" />
        </div>
      </div>
    </section>
  )
}