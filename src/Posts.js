import ConteudosPost from "./ConteudosPost";
import Post from "./Post";

export default function Posts(){
    return (
        <div className="posts">
          {ConteudosPost.map((i) => (<Post imagem1={ConteudosPost.imagem1} alt1={ConteudosPost.alt1} nome={ConteudosPost.nome} imagem2={ConteudosPost.imagem2} alt2={ConteudosPost.alt2} imglikes={ConteudosPost.imgLikes} altlikes={ConteudosPost.altlikes} userLike={ConteudosPost.userLike} likeNumber={ConteudosPost.likeNumber}/>) ) }
        </div>
    )
}