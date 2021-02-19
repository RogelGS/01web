import Link from 'next/link';

const links = [
    { url: "/", nombre: "Home" },
    { url: "/calculadora", nombre: "Calculadora" }
]

const titulo = () => (
    <nav>
        <div className="nav-wrapper">
            <Link href="/"><a className="brand-logo">Curso de Next.js y React</a></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {
                    links.map(link => {
                        return (
                            <li key={link.url}>
                                <Link href={link.url}><a>{link.nombre}</a></Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </nav>
)

export default titulo;