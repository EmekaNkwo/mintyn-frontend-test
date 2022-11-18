import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { avatar } from "../../data/images";
import "./topbar.scss";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <span className="header_text">TransMonitor</span>
        <div className="search">
          <BiSearch />
          <input type="text" name="" id="" placeholder=" Search..." />
        </div>
      </div>
      <div className="right">
        <span>Support</span>
        <span>FAQ</span>
        <span className="notification">
          <MdNotifications />
          <span>8</span>
        </span>
        <div className="profile">
          <div className="profile_name">
            <span className="hello">Hello</span>
            <span>Oluwaleke Ojo</span>
          </div>
          <div className="profile_img">
            <img src={avatar} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
