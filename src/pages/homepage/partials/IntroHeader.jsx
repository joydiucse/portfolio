import React from 'react';
import Container from '../../../components/common/Container.jsx';

function IntroHeader() {
    const copyEmail = () => {
        navigator.clipboard.writeText('joynal.abedin.dev@gmail.com');
    };

    return (
        <>

            <Container className="mt-6">
                <section className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 p-4 md:p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <span className="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
                                <span className="text-sm">Product Designer</span>
                                <span className="ml-3 inline-flex items-center rounded-full bg-green-100 text-green-700 text-xs px-3 py-1">Available for work</span>
                            </div>
                            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">I'm Joynal Abedin</h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Product designer from Dhaka, BD. Currently designing delightful experiences.</p>
                            <div className="mt-4 flex items-center gap-3">
                                <a href="#hire" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2 shadow-sm hover:bg-black">Hire Me</a>
                                <button onClick={copyEmail} className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl px-4 py-2 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">Copy Email</button>
                            </div>
                        </div>
                        <div className="ml-6">
                            <div className="h-24 w-24 md:h-28 md:w-28 rounded-full ring-4 ring-white dark:ring-gray-950 shadow overflow-hidden bg-gray-200 dark:bg-gray-800"></div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}

export default IntroHeader;