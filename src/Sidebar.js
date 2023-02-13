import Sugestoes from "./Sugestoes"
import Alteracoes from "./Alteracoes"

export default function Sidebar(){
    return (
        <div className="sidebar">
            <Alteracoes alt="imagem de perfil"/>
            <Sugestoes />
            <div className="links">
               Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
               Hashtags • Idioma
            </div>
            <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}