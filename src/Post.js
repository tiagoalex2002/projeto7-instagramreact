import { useState } from "react"

export default function Post(props){
  const [Like, setLike] = useState("")
  const [Classe, setClasse] = useState("")
  const [numero, setNumero] = useState(props.likeNumber)
  let EstadoLike = !Like ? "heart-outline" : Like
  let ClasseLike = !Classe? "" : Classe

  function Curtida(){
    if(EstadoLike === "heart-outline"){
      setNumero(numero + 1)
      setClasse("vermelho")
      setLike("heart")
    }
    else{
      setNumero(numero - 1)
      setClasse("")
      setLike("heart-outline")
    }
  }

  function CurtidaImagem(){
    if(EstadoLike==="heart-outline"){
      setNumero(numero + 1)
      setClasse("vermelho")
      setLike("heart")
    }
  }

  const [Icone, setIcone] = useState("")
  const [ClasseIcone, setClasseIcone] = useState("")
  let EstadoIcone= !Icone? "bookmark-outline" : Icone
  let ClasseIcone2= !ClasseIcone? "bookmark-outline" : ClasseIcone

  function Salvar(){
    if(EstadoIcone=== "bookmark-outline"){
      setIcone("bookmark")
      setClasseIcone("preto")
    }
    else{
      setIcone("bookmark-outline")
      setClasseIcone("")
    }
  }



    return (
        <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem1} alt={props.alt1}/>
                {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img data-test= "post-image" onDoubleClick={CurtidaImagem} src={props.imagem2} alt={props.alt2}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon data-test="like-post" name={EstadoLike} class={ClasseLike} onClick= {Curtida}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" name={EstadoIcone} class={ClasseIcone2} onClick = {Salvar}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imglikes} alt={props.imglikes}/>
                <div data-test="likes-number" class="texto">
                  Curtido por <strong>{props.userlike}</strong> e <strong>outras {numero} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}