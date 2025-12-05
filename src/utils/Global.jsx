export const Image = ({
    src,
    className = '',
    errorImage,
    alt = ''
}) => {
    const handleError = (e) => {
        if (errorImage && e.target.src !== errorImage) {
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
