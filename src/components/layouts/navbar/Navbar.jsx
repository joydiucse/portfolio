import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail, FiBookOpen, FiPlus, FiMoon, FiSun } from 'react-icons/fi';
import Container from "../../common/Container.jsx";

function Navbar() {
    const location = useLocation();
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
                <Container>
                    <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-3 py-2 shadow-sm">
                        <div className="flex items-center justify-between gap-0 sm:gap-6">
                            <div className="flex items-center gap-6">
                                <div className="hidden md:flex items-center gap-3">
                                    <Link to="/" className="flex items-center gap-2">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white">J</span>
                                        <span className="font-semibold text-gray-900 dark:text-gray-100">Joynal</span>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {navItems.map((item) => {
                                            const active = item.to.startsWith('#') ? location.hash === item.to : location.pathname === item.to;
                                            return (
                                                <Link
                                                    key={item.label}
                                                    to={item.to}
                                                    className={`inline-flex items-center gap-2 py-2 md:py-2 px-2 md:px-3 rounded-full md:rounded-lg text-sm transition-all ${active ? 'bg-gray-900 text-white' : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'}`}
                                                >
                                                    <item.icon className="text-[16px]" />
                                                    <span className="hidden md:block font-medium">{item.label}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-2">
                                <button
                                    onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
                                    aria-label="Toggle theme"
                                    className="inline-flex items-center justify-center size-8 text-sm  text-white rounded-lg shadow-sm hover:bg-black"
                                >
                                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                                </button>

                                <Link
                                    to="#hire"
                                    className="inline-flex items-center gap-2  border dark:border-gray-800 bg-gray-900 text-white rounded-lg px-3 py-1.5 shadow-sm hover:bg-black"
                                >
                                    <FiPlus />
                                    <span className="text-sm">Hire Me</span>
                                </Link>
                            </div>



                            {/*<div className="hidden md:flex items-center justify-between w-full">*/}
                            {/*    <div className="flex items-center gap-2">*/}
                            {/*        <div className="flex items-center gap-1">*/}
                            {/*            {navItems.map((item) => {*/}
                            {/*                const active = item.to.startsWith('#') ? location.hash === item.to : location.pathname === item.to;*/}
                            {/*                return (*/}
                            {/*                    <Link*/}
                            {/*                        key={item.label}*/}
                            {/*                        to={item.to}*/}
                            {/*                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${active ? 'bg-gray-900 text-white' : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'}`}*/}
                            {/*                    >*/}
                            {/*                        <item.icon className="text-[16px]" />*/}
                            {/*                        <span className="font-medium">{item.label}</span>*/}
                            {/*                    </Link>*/}
                            {/*                );*/}
                            {/*            })}*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*    <div className="flex items-center justify-end gap-4">*/}
                            {/*        <button*/}
                            {/*            onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}*/}
                            {/*            aria-label="Toggle theme"*/}
                            {/*            className="ml-2 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 text-gray-700 dark:text-gray-200 shadow-sm"*/}
                            {/*        >*/}
                            {/*            {theme === 'dark' ? <FiSun /> : <FiMoon />}*/}
                            {/*        </button>*/}
                            {/*        <Link*/}
                            {/*            to="#hire"*/}
                            {/*            className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2 shadow-sm hover:bg-black"*/}
                            {/*        >*/}
                            {/*            <FiPlus />*/}
                            {/*            <span>Hire Me</span>*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}


                            {/*</div>*/}
                            {/*/!*Only For Mobile*!/*/}
                            {/*<div className="md:hidden flex items-center grow w-full gap-3">*/}
                            {/*    <div className="flex items-center justify-between gap-1">*/}
                            {/*        {navItems.map((item) => {*/}
                            {/*            const active = item.to.startsWith('#') ? location.hash === item.to : location.pathname === item.to;*/}
                            {/*            return (*/}
                            {/*                <Link*/}
                            {/*                    key={item.label}*/}
                            {/*                    to={item.to}*/}
                            {/*                    aria-label={item.label}*/}
                            {/*                    title={item.label}*/}
                            {/*                    className={` p-2 rounded-full transition-all ${active ? 'bg-gray-900 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900'}`}*/}
                            {/*                >*/}
                            {/*                    <item.icon className="text-[20px]" />*/}
                            {/*                </Link>*/}
                            {/*            );*/}
                            {/*        })}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Navbar;
