import clsx from 'clsx'

// alternativ 1
// export default function Button({ className = 'bg-red-600', text, children, type = 'submit', ...props }) {
// alternativ 2
export default function Button(props) {
    // className default red jika tidak ada className di Button
    const { className = 'bg-black', text, children, type = 'submit' } = props
    return (
        <button
            {...props}
            // entah kenapa menggunakan backtics `` dan dibarengi kuru calibrase jika ingiin ada classname atau di tambahp
            // alternativ
            // className={` ${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded`}
            // alternativ 2
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-center items-center gap-x-2 text-white px-4 h-10 rounded-lg'
            )}
            type={type}>
            {text || children}
        </button>
    )
}
