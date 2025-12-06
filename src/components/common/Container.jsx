import React from 'react';
import clsx from "clsx";

function Container({children, className, ...props}) {
    return (
        <div {...props} className={clsx('md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-3xl px-6 2xl:px-0 mx-auto', className)}>
            {children}
        </div>
    );
}

export default Container;
