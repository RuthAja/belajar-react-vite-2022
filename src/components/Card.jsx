function Card({ children }) {
    return <div className='shadow rounded-lg overflow-hidden bg-white text-black'>{children}</div>
}

function Tittle({ children }) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-2xl'>{children}</h1>
        </div>
    )
}

function Body({ children }) {
    return <div className='leading-relaxed p-4'>{children}</div>
}

function Footer({ children }) {
    return <div className='bg-slate-50 p-4'>{children}</div>
}

Card.Tittle = Tittle
Card.Body = Body
Card.Footer = Footer

export default Card
