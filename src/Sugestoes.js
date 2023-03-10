
import ConteudosSugestoes from "./ConteudosSugestoes";
import Sugestao from "./Sugestao";

export default function Sugestoes(){
    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
            {ConteudosSugestoes.map((item)=>  <Sugestao img={item.img} nom={item.nom} reason={item.reason}/> )}
          </div>   
    )
}