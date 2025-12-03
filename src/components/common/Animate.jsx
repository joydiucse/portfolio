export const AnimatePing = ({size = 2, color='primary'}) => {
    return (
        <>
        <span className={`relative flex size-${size}`}>
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-${color} opacity-75`}></span>
          <span className={`relative inline-flex size-${size} rounded-full bg-${color}`}></span>
        </span>
        </>
    )
}