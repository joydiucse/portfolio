import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Container from "../../common/Container.jsx";
import {profile} from "../../../data/data.jsx";

function Navbar() {

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        if (theme === 'dark') {
            root.classList.add('dark');
            body.classList.add('dark');
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const applyTheme = (next) => {
        setTheme(next);
    };

    return (
        <>
            <div className="sticky top-0 z-50 bg-primary/4">
                <Container className={'py-3'}>
                    <div className="flex items-center justify-between">
                        <div className="font-semibold text-teal-700">{profile?.name}</div>
                        <nav className="hidden sm:flex items-center gap-6 text-sm">
                            <a href="#services" className="hover:text-teal-700">Services</a>
                            <a href="#works" className="hover:text-teal-700">Works</a>
                            <a href="#notes" className="hover:text-teal-700">Notes</a>
                            <a href="#experience" className="hover:text-teal-700">Experience</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:block text-sm text-gray-700 dark:text-gray-300">+001 (313) 345 678</div>
                            <button
                                onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
                                aria-label="Toggle theme"
                                className="inline-flex items-center justify-center size-8 rounded-lg ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {theme === 'dark' ? <FiSun /> : <FiMoon />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Navbar;
