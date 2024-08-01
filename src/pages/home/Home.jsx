import Topbar from "../../components/topbar/Topbar";
import Sidebar from  "../../components/topbar/sidebar/Sidebar"
import Feed from  "../../components/topbar/feed/Feed"
import Rightbar from  "../../components/topbar/rightbar/Rightbar"
import "./Home.css"
export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}
