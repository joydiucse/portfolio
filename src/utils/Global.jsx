export const image = (path = 'placeholder.svg') => {
    return `/images/${path}`;
};

export const Image = ({
    src = image(),
    className = '',
    errorImage = image(),
    alt = ''
}) => {
    const handleError = (e) => {
        if (e.target.src !== errorImage) {
            e.target.src = errorImage;
        }
    };

    return (
        <img
            src={src}
            className={className}
            alt={alt}
            onError={handleError}
        />
    );
};
