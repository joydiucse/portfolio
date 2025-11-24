import React from 'react';
import Container from '../../../components/common/Container.jsx';
import { portfolio } from '../../../data/data.jsx';
import { FiChevronRight } from 'react-icons/fi';

function WorksSection() {
    return (
        <Container className="mt-8">
            <section id="works" className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 p-4 md:p-6">
                <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Projects</span>
                </div>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">My Works</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Discover my portfolio, where purposeful interfaces meet captivating design.</p>
                <div className="mt-4 grid gap-3">
                    {portfolio.slice(0,4).map((item) => (
                        <a key={item.title} href="#" className="flex items-center justify-between rounded-xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 shadow"></div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{item.tag}</div>
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

export default WorksSection;