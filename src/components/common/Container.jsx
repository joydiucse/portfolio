import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/**
 * Container component that provides consistent spacing and width constraints
 * across the application. It's responsive and customizable.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content to be rendered inside the container
 * @param {string} props.className - Additional CSS classes to apply
 * @param {string} props.maxWidth - Maximum width of the container
 * @param {string} props.padding - Padding size for the container
 * @param {string} props.background - Background color for the container
 * @returns {ReactElement} The Container component
 */
function Container({
                       children,
                       className = '',
                       maxWidth = 'responsive',
                       padding = 'default',
                       background = 'gray-100'
                   }) {
    // Determine padding based on screen size
    const getPaddingClasses = () => {
        switch(padding) {
            case 'none':
                return '';
            case 'small':
                return 'px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4';
            case 'large':
                return 'px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8';
            case 'default':
            default:
                return 'px-4 sm:px-0';
        }
    };

    // Determine max width based on screen size
    const getMaxWidthClasses = () => {
        switch(maxWidth) {
            case 'sm':
                return 'max-w-sm';
            case 'md':
                return 'max-w-md';
            case 'lg':
                return 'max-w-lg';
            case 'xl':
                return 'max-w-xl';
            case '2xl':
                return 'max-w-2xl';
            case '3xl':
                return 'max-w-3xl';
            case '4xl':
                return 'max-w-4xl';
            case '5xl':
                return 'max-w-5xl';
            case '6xl':
                return 'max-w-6xl';
            case '7xl':
                return 'max-w-7xl';
            case 'full':
                return 'max-w-full';
            case 'screen-xl':
                return 'max-w-screen-xl';
            case 'screen-2xl':
                return 'max-w-screen-2xl';
            case 'none':
                return '';
            case 'responsive':
            default:
                return 'max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl';
        }
    };

    // Validate and format background class
    const getBackgroundClass = () => {
        // Check if background already includes the bg- prefix
        if (background.startsWith('bg-')) {
            return background;
        }

        // For common Tailwind colors, ensure proper formatting
        const commonColors = [
            'white', 'black', 'gray', 'red', 'orange', 'amber', 'yellow',
            'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue',
            'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
        ];

        const colorParts = background.split('-');
        const colorName = colorParts[0];

        if (commonColors.includes(colorName)) {
            return `bg-${background}`;
        }

        // If not a common color, just return as is (could be a custom class)
        return background;
    };

    const containerClasses = clsx(
        'w-full mx-auto',
        getBackgroundClass(),
        getMaxWidthClasses(),
        getPaddingClasses(),
        className
    );

    return (
        <div className={containerClasses}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    maxWidth: PropTypes.oneOf([
        'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl',
        'full', 'screen-xl', 'screen-2xl', 'none', 'responsive'
    ]),
    padding: PropTypes.oneOf(['none', 'small', 'default', 'large']),
    background: PropTypes.string
};

export default Container;