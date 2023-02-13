import { useState } from "react/cjs/react.production.min";

export default function TrocaNome(){
    const [Nome, setNome] = useState("")

    const novo= prompt("Qual é o seu nome?")
    if (novo.lenght >0){
        setNome(novo)
    }

    let texto = !Nome ? "Anônimo" : Nome

}