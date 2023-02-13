import { useState } from "react/cjs/react.production.min";

export default function TrocaPerfil(){
    const [Imagem, setImagem] = useState("")

    const novo= prompt("Qual o link da imagem?")
    if (novo.lenght >0){
        setImagem(novo)
    }

    let imagem = !Imagem ? "assets/img/catanacomics.svg" : Imagem

}