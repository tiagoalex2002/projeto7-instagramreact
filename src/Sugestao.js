export default function Sugestao(props){
    return (
        <div className="sugestao">
            <div class="usuario">
              <img src={props.img} alt={props.nom}/>
              <div class="texto">
                <div class="nome">{props.nom}</div>
                <div class="razao">{props.reason}</div>
              </div>
              <div class="seguir">Seguir</div>
            </div>

        </div>
    )
}