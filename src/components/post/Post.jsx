
import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({Post}) {
    const [like , setLike] = useState(Post.like)
    const [islike , setIsLike] = useState(false)
    const likeHandler =() => {
        setLike(islike ? like-1 : like+1)
        setIsLike(!islike)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === Post?.userId)[0].profilePicture} className="PostProfileImg" alt="" />
                    <span className="postUsername">{Users.filter((u) => u.id === Post?.userId)[0].username}</span>
                    <span className="postDate">  {Post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{Post?.desc}</span>
                <img src={Post.photo} className="postImg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/like.png" onClick={likeHandler} className="likeIcon" alt="" />
                    <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/heart.png" onClick={likeHandler} className="likeIcon" alt="" />
                    <span className="postLikeCounter">{like}people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{Post.comment}comments</span>
                </div>
            </div>                                                                                                                                                                                             
        </div>
    </div>
  )
}
