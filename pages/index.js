import { useState } from "react"
import Link from "next/link";

function Home() {
    return (
        <div>
            <h2>Home - Navegar 1</h2>
            <Contador />
            <br/>
            <Link legacyBehavior href="/sobre">
                <a>Página Sobre</a>
            </Link>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContdor() {
        //console.log(contador);
        setContador(contador + 1);        
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContdor}>+ Contador</button>
        </div>
    )
}

export default Home