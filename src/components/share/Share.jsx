import "./share.css"
import { PermMedia, Label,Room,EmojiEmotions} from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/1.jpeg" alt=""/>
                <input placeholder="what is in your mind" className="shareInput"/>
             </div>
             <hr className="shareHr"/>

             <div className="shareBottom">
                 <div className="shareOptions">
                      <div className="shareOption">
                           <PermMedia htmlColor="tomato" className="shareIcon"/>
                           <span className="shareOptionText">Photo or Video</span>
                       </div>

                       <div className="shareOption">
                           <Label  htmlColor="blue" className="shareIcon"/>
                           <span className="shareOptionText">Tag</span>
                       </div>
                       <div className="shareOption">
                           <Room htmlColor="green" className="shareIcon"/>
                           <span className="shareOptionText">Locations</span>
                       </div>
                       <div className="shareOption">
                           <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                           <span className="shareOptionText">Feelings</span>
                       </div>
                  </div>
                  <button className="shareButton">Share</button>
             </div>
        </div>
    </div>
  )
}
