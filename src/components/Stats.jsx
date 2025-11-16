import { stats } from "../data/data"
import { MdStarRate } from "react-icons/md"
import { FaRocket } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"

const icons = [MdStarRate, FaRocket, HiUsers]

export default function Stats() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 grid sm:grid-cols-3 gap-6">
        {stats.map((s, i) => {
          const Icon = icons[i]
          return (
            <div key={s.label} className="rounded-xl border bg-white p-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Icon />
              </div>
              <div>
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}