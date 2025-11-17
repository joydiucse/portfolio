import Sidebar from "./components/Sidebar"
import ExperienceTimeline from "./components/ExperienceTimeline"
import ProjectsList from "./components/ProjectsList"
import Writings from "./components/Writings"
import Summary from "./components/Summary.jsx";
import { useEffect, useRef } from "react"

function App() {
    const bgRef = useRef(null)
    useEffect(() => {
        const el = bgRef.current
        if (!el) return
        const handler = (e) => {
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            el.style.setProperty('--mx', `${x}px`)
            el.style.setProperty('--my', `${y}px`)
        }
        window.addEventListener('mousemove', handler)
        return () => window.removeEventListener('mousemove', handler)
    }, [])

    return (
        <div ref={bgRef} className="font-sans mouse-gradient min-h-screen text-blue-100">
            <Sidebar/>
            <main className="md:ml-[320px] lg:ml-[30%] px-6 md:px-10 py-10">
                <div className="mx-auto max-w-3xl space-y-16">
                    <Summary/>
                    <ExperienceTimeline/>
                    <ProjectsList/>
                    <Writings/>
                </div>
            </main>
        </div>
    )
}

export default App
