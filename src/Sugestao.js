export default function Sugestao(props){
    return (
        <div className="sugestao">
            <div class="usuario">
              <img src={props.imagem} alt={props.nome}/>
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.reason}</div>
              </div>
              <div class="seguir">Seguir</div>
            </div>

        </div>
    )
}