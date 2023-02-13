import TrocaNome from "./TrocaNome";
import TrocaPerfil from "./TrocaPerfil";

export default function Alteracoes(props){
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