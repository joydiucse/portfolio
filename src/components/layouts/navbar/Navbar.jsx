import React, { useEffect, useState } from 'react';
import {FiMoon, FiSun} from 'react-icons/fi';
import Container from "../../common/Container.jsx";
import {profile} from "../../../data/data.jsx";
import { Image } from "../../../utils/Global.jsx";
import { image } from "../../../utils/media.js";
import {AnimatePing} from "../../common/Animate.jsx";
import {PrimaryButton} from "../../common/Buttons.jsx";
import {ReactIcon} from "../../common/Icons.jsx";

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
            <div className="sticky top-0 z-50 bg-primary-xlight">
                <Container className={'py-3'}>
                    <div className="fcb">
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

                        <nav className="hidden sm:flex items-center gap-6 text-sm">
                            <a href="#services" className="hover:text-teal-700">Services</a>
                            <a href="#works" className="hover:text-teal-700">Works</a>
                            <a href="#notes" className="hover:text-teal-700">Notes</a>
                            <a href="#experience" className="hover:text-teal-700">Experience</a>
                        </nav>
                        <div className="flex items-center gap-3">
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
            </div>
        </>
    );
}

export default Navbar;
