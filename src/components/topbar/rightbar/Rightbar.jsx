import "./rightbar.css"
import { Users} from "../../../dummyData"
import Online from "../../online/Online"

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
              <div className="birthdayContainer">
          <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/gift.png" className="birthdayImg" alt="" />
          <span className="birthdayText"><b>Nizar moh </b> and <b> 2 others friends </b> hav birthday today.</span>
        </div>

        <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">onLine friends</h4>
        <ul className="rightbarFriendsList">
          {
            Users.map((u) => ( 
              <Online key={u.id} user={u}/>
            ))
          }
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return(
      <>
      <h4 className="rightbarTitle">User information </h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City :</span>
          <span className="rightbarInfoValue">New York</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From :</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship :</span>
          <span className="rightbarInfoValue">single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends </h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/1.jpeg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">John carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/2.jpeg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">John carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/3.jpeg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">John carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/4.jpeg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">John carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/5.jpeg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">John carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/commit · safak_youtube@35b7db4 · GitHub_files/6.jpeg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">John carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
