import { profile, social } from "../data/data"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail, MdPhone } from "react-icons/md"

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Let’s discuss about your project and take it to the next level</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2"><MdPhone className="text-blue-600" /><a href={`tel:${profile.phone}`} className="hover:text-blue-700">{profile.phone}</a></div>
              <div className="flex items-center gap-2"><MdEmail className="text-blue-600" /><a href={`mailto:${profile.email}`} className="hover:text-blue-700">{profile.email}</a></div>
              <div className="flex items-center gap-2"><FaLinkedin className="text-blue-600" /><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700">{profile.linkedin}</a></div>
              <div className="flex items-center gap-2"><FaGithub className="text-blue-600" /><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-blue-700">{profile.github}</a></div>
            </div>
            <div className="mt-6 flex gap-2">
              <Button variant="contained" href={`mailto:${profile.email}`}>Email Me</Button>
              <Button variant="outlined" href={profile.linkedin} target="_blank">Hire Me</Button>
            </div>
            <div className="mt-6">
              <div className="flex gap-2">
                {social.map((s) => (
                  <IconButton key={s.label} component="a" href={s.href} target="_blank" rel="noreferrer" color="primary" aria-label={s.label}>
                    {s.label === "LinkedIn" && <FaLinkedin />}
                    {s.label === "GitHub" && <FaGithub />}
                    {s.label === "Email" && <MdEmail />}
                    {s.label === "Phone" && <MdPhone />}
                  </IconButton>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-xl border bg-white p-6">
              <h3 className="text-lg font-medium">Start the project</h3>
              <form className="mt-4 grid gap-4">
                <TextField size="small" label="Full name" variant="outlined" />
                <TextField size="small" label="Email" variant="outlined" />
                <TextField size="small" label="Company" variant="outlined" />
                <TextField size="small" label="Message" multiline minRows={3} variant="outlined" />
                <Button variant="contained" type="submit">Send message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}