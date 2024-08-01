
import Topbar from "../../components/topbar/Topbar"
import Sidebar from  "../../components/topbar/sidebar/Sidebar"
import Feed from  "../../components/topbar/feed/Feed"
import Rightbar from  "../../components/topbar/rightbar/Rightbar"

import "./profile.css"


export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/3.jpeg" className="profileCoverImg" alt="" />
            <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/1.jpeg" className="profileUserImg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">saka </h4>
                <span className="profileInfoDesc">Hello my fiends</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar Profile/>
        </div>
    </div>
    </div>
    </>
  )
}
