import "./feed.css"
import Share from "../../share/Share"
import Post from "../../post/Post"
import { Posts } from "../../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {
          Posts.map ((p) => (
            <Post key={p.id} Post={p}/>
          ))
        }
      </div>
    </div>
  )
}
