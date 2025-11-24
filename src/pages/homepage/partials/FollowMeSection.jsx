import React from 'react';
import Container from '../../../components/common/Container.jsx';
import { social } from '../../../data/data.jsx';

function FollowMeSection() {
    return (
        <Container className="mt-8">
            <section className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 p-4 md:p-6">
                <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Follow Me</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                    {social.slice(0,4).map((s)=> (
                        <a key={s.label} href={s.href} className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">{s.label[0]}</a>
                    ))}
                </div>
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">© 2025 Subtle Folio — Framer Template</div>
            </section>
        </Container>
    );
}

export default FollowMeSection;