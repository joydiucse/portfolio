import React from 'react';
import Container from '../../../components/common/Container.jsx';
import { projects } from '../../../data/data.jsx';
import { FiChevronRight } from 'react-icons/fi';

function ProjectsSection() {
    return (
        <Container className="mt-8">
            <section id="projects" className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
                        <span className="text-sm text-gray-600">Projects</span>
                    </div>
                    <a href="#projects" className="inline-flex items-center gap-2 bg-white text-gray-800 rounded-lg px-3 py-2 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">View All <FiChevronRight /></a>
                </div>
                <div className="mt-4 grid gap-3">
                    {projects.slice(0,4).map((p) => (
                        <a key={p.title} href="#" className="flex items-center justify-between rounded-xl bg-white ring-1 ring-gray-200 shadow-sm px-4 py-3 hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow"></div>
                                <div>
                                    <div className="font-semibold text-gray-900">{p.title}</div>
                                    <div className="text-sm text-gray-600">{p.summary}</div>
                                </div>
                            </div>
                            <FiChevronRight className="text-gray-400" />
                        </a>
                    ))}
                </div>
            </section>
        </Container>
    );
}

export default ProjectsSection;