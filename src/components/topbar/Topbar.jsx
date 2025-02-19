import "./topbar.css"
import { Search , Person , Chat , Notifications} from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <div className="logo">Facebook</div>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input type="Search for " className="searchInput" placeholder="Search for friends , post or videos " />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">
              <Link className="n1" to="/home">Home</Link>
            </span>
            <span className="topbarLink">
              <Link className="n1" to="/profile">Profile</Link>
            </span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>

          </div>
           <Link className="n1" to="/profile"><img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/1.jpeg" alt="" className="topbarImg" /></Link>
        </div>
    </div>
  )
}
