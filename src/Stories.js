import itens from "./itens";
import Story from "./Story";

export default function Stories(){
    return(
        <div className="stories">
            {itens.map((i) => (<Story foto={i.foto} alt={i.alt} nome={i.nome}/>))}

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

    )
}