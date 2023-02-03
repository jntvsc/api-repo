import { useState } from "react"

function Home() {
    return (
        <div>
            <h2>Home - Navegar</h2>
            <Contador />
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