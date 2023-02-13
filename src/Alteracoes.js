import { useState } from "react"


export default function Alteracoes(props){
  const [Imagem, setImagem] = useState("")
  let imagem = !Imagem ? "assets/img/catanacomics.svg" : Imagem
 
  function TrocaPerfil(){

    const novo= prompt("Qual o link da imagem?")
    if (novo.lenght >0){
        setImagem(novo)
    }

  }
  
  const [Nome, setNome] = useState("")
  let texto = !Nome ? "Anônimo" : Nome
  function TrocaNome(){

    const novo= prompt("Qual é o seu nome?")
    if (novo.lenght >0){
        setNome(novo)
    }

  }
  
  
  
  return(
        <div class="usuario">
          <img data-test="profile-image" onClick={TrocaPerfil} src={imagem} alt={props.alt}/>
          <div class="texto" data-test="name">
            <div>
              <strong>{texto}</strong>
              <ion-icon data-test="edit-name" name="pencil" onClick={TrocaNome}></ion-icon>
            </div>
          </div>
        </div>
    )
}