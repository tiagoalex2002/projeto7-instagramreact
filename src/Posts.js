import ConteudosPost from "./ConteudosPost";
import Post from "./Post";

export default function Posts(){
    return (
        <div className="posts">
          {ConteudosPost.map((i) => (<Post imagem1={i.imagem1} alt1={i.alt1} nome={i.nome} imagem2={i.imagem2} alt2={i.alt2} imglikes={i.imglikes} altlikes={i.altlikes} userLike={i.userLike} likeNumber={i.likeNumber}/>) ) }
        </div>
    )
}