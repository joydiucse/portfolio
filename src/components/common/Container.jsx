import React from 'react';
import clsx from "clsx";

function Container({children, className}) {
    return (
        <div className={clsx('md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl px-4 sm:px-0 mx-auto', className)}>
            {children}
        </div>
    );
}

export default Container;