import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail, FiBookOpen, FiPlus } from 'react-icons/fi';
import Container from "../../common/Container.jsx";

function Navbar() {
    const navItems = [
        { to: '/', icon: FiHome, label: 'Home' },
        { to: '#about', icon: FiUser, label: 'About' },
        { to: '#projects', icon: FiBriefcase, label: 'Projects' },
        { to: '#blog', icon: FiBookOpen, label: 'Blog' },
        { to: '#contact', icon: FiMail, label: 'Contact' }
    ];

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
                            <div className="bg-white rounded-full shadow-sm ring-1 ring-gray-200 px-2 py-1 flex items-center">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.to}
                                        aria-label={item.label}
                                        title={item.label}
                                        className="mx-1 p-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98]"
                                    >
                                        <item.icon className="text-[20px]" />
                                    </Link>
                                ))}
                            </div>

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
                                        className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                                    >
                                        <item.icon className="text-[18px]" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </Link>
                                ))}
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
