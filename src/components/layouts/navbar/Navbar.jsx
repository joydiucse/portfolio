import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail, FiBookOpen, FiPlus, FiMoon, FiSun } from 'react-icons/fi';
import Container from "../../common/Container.jsx";

function Navbar() {
    const navItems = [
        { to: '/', icon: FiHome, label: 'Home' },
        { to: '#about', icon: FiUser, label: 'About' },
        { to: '#projects', icon: FiBriefcase, label: 'Projects' },
        { to: '#blog', icon: FiBookOpen, label: 'Blog' },
        { to: '#contact', icon: FiMail, label: 'Contact' }
    ];

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const applyTheme = (next) => {
        setTheme(next);
    };

    return (
        <>
            <div className="sticky top-3 z-50">
                <Container background="bg-transparent" padding="default" maxWidth="responsive">
                    <div className="flex items-center justify-between">
                        <div className="hidden md:flex items-center gap-4">
                            <Link to="/" className="font-semibold text-gray-900">
                                Joynal
                            </Link>
                        </div>

                        <div className="md:hidden flex items-center gap-3">
                            <div className="bg-white dark:bg-gray-800 rounded-full shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 px-2 py-1 flex items-center">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.to}
                                        aria-label={item.label}
                                        title={item.label}
                                        className="mx-1 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 active:scale-[0.98]"
                                    >
                                        <item.icon className="text-[20px]" />
                                    </Link>
                                ))}
                            </div>

                            <button
                                onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
                                aria-label="Toggle theme"
                                className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 text-gray-700 dark:text-gray-200 shadow-sm"
                            >
                                {theme === 'dark' ? <FiSun /> : <FiMoon />}
                            </button>

                            <Link
                                to="#hire"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-3 py-2 shadow-sm hover:bg-black"
                            >
                                <FiPlus />
                                <span className="text-sm">Hire Me</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center justify-between w-full">
                            <div className="flex items-center gap-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.to}
                                        className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        <item.icon className="text-[18px]" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </Link>
                                ))}
                                <button
                                    onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
                                    aria-label="Toggle theme"
                                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 text-gray-700 dark:text-gray-200 shadow-sm"
                                >
                                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                                </button>
                            </div>

                            <Link
                                to="#hire"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2 shadow-sm hover:bg-black"
                            >
                                <FiPlus />
                                <span>Hire Me</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Navbar;
