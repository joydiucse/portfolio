import React, { useState } from 'react';
import Container from '../../../components/common/Container.jsx';

function HireMeSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Container className="mt-8">
            <section id="hire" className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Hire Me</span>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 text-xs px-3 py-1">Available for work</span>
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Design Inquiry</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Got an idea and need design help? Reach out now.</p>
                <form className="mt-4 grid gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="w-full rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
                    </div>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" rows={5} className="w-full rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"></textarea>
                    <button type="button" className="mt-2 inline-flex items-center justify-center bg-gray-900 text-white rounded-xl px-4 py-3 shadow-sm hover:bg-black">Submit Inquiry</button>
                </form>
            </section>
        </Container>
    );
}

export default HireMeSection;