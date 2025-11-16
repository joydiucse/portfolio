import Sidebar from "./components/Sidebar"
import ExperienceTimeline from "./components/ExperienceTimeline"
import ProjectsList from "./components/ProjectsList"
import Writings from "./components/Writings"
import Summary from "./components/Summary.jsx";

function App() {
    return (
        <div className="font-sans bg-secondary min-h-screen text-blue-100">
            <Sidebar/>
            <main className="md:ml-[320px] lg:ml-[380px] px-6 md:px-10 py-10">
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
