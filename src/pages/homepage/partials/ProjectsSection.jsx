import React from 'react';
import Container from '../../../components/common/Container.jsx';
import { projects } from '../../../data/data.jsx';
import { FiChevronRight } from 'react-icons/fi';

function ProjectsSection() {
    return (
        <Container className="mt-8">
            <section id="projects" className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Projects</span>
                    </div>
                    <a href="#projects" className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg px-3 py-2 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">View All <FiChevronRight /></a>
                </div>
                <div className="mt-4 grid gap-3">
                    {projects.slice(0,4).map((p) => (
                        <a key={p.title} href="#" className="flex items-center justify-between rounded-xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow"></div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-100">{p.title}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{p.summary}</div>
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