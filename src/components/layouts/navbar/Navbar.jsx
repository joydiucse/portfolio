import React, { useEffect, useState } from 'react';
import {FiMoon, FiSun, FiMenu, FiX} from 'react-icons/fi';
import Container from "../../common/Container.jsx";
import {profile} from "../../../data/data.jsx";
import { Image } from "../../../utils/Global.jsx";
import { image } from "../../../utils/media.js";
import {AnimatePing} from "../../common/Animate.jsx";
import {PrimaryButton} from "../../common/Buttons.jsx";
import {ReactIcon} from "../../common/Icons.jsx";
import {Link} from "react-router-dom";

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

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((v) => !v);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className="sticky top-0 z-50 bg-primary-xlight">
                <Container className={'py-3'}>
                    <div className="fcb relative">
                        <Link to={'/'}>
                            <div className="fc gap-3">
                                <div className="size-10 relative">
                                    <figure className="size-10 rounded-full overflow-hidden border-2 border-primary/20">
                                        <Image src={image('joy-square.jpg')} className={'image-cover'}/>
                                    </figure>
                                    <div className="absolute bottom-1 right-0.5">
                                        <AnimatePing color={'green-600'}/>
                                    </div>
                                </div>
                                <div className="text-xl font-bold ">{profile?.namePro}</div>
                            </div>
                        </Link>


                        <nav className="hidden sm:flex items-center gap-6 text-sm">
                            <a href="#services" className="hover:text-teal-700">Services</a>
                            <a href="#works" className="hover:text-teal-700">Works</a>
                            <a href="#notes" className="hover:text-teal-700">Notes</a>
                            <a href="#experience" className="hover:text-teal-700">Experience</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleMenu}
                                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={menuOpen}
                                className="inline-flex sm:hidden items-center justify-center size-9 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded-lg text-gray-700 dark:text-gray-200 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                {menuOpen ? <FiX /> : <FiMenu />}
                            </button>
                            <button
                                onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
                                aria-label="Toggle theme"
                                className="inline-flex items-center justify-center size-8 border border-transparent hover:border-gray-200  dark:hover:border-gray-700 rounded-lg  text-gray-700 dark:text-gray-200 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                            >
                                {theme === 'dark' ? <FiSun /> : <FiMoon />}
                            </button>
                            <PrimaryButton>
                                <span>Hire Me</span> <ReactIcon name={'right-arrow'}/>
                            </PrimaryButton>
                        </div>
                    </div>
                </Container>
                <div className="sm:hidden fixed inset-0 z-50 pointer-events-none">
                    <div
                        className={`absolute inset-0 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'} bg-black/40 dark:bg-black/60`}
                        onClick={menuOpen ? closeMenu : undefined}
                    ></div>
                    <div
                        className={`absolute left-0 top-0 h-dvh w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} pointer-events-auto`}
                    >
                        <div className="p-4 fcb">
                            <div className="fc gap-3">
                                <figure className="size-9 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image src={image('joy-square.jpg')} className={'image-cover'} />
                                </figure>
                                <div className="text-base font-semibold">{profile?.namePro}</div>
                            </div>
                            <button
                                onClick={closeMenu}
                                aria-label="Close menu"
                                className="inline-flex items-center justify-center size-9 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <FiX />
                            </button>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-800"></div>
                        <nav className="px-4 py-3 flex flex-col gap-1 text-sm">
                            <a href="#services" onClick={closeMenu} className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Services</a>
                            <a href="#works" onClick={closeMenu} className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Works</a>
                            <a href="#notes" onClick={closeMenu} className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Notes</a>
                            <a href="#experience" onClick={closeMenu} className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Experience</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
