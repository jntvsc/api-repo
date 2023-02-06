import Link from "next/link";

function Sobre() {
    return (
        <div>
            <h2>Navegado para Sobre</h2>
            
            <Link legacyBehavior href="/">
                <a>Página Home</a>
            </Link>
        </div>
    )
}

export default Sobre