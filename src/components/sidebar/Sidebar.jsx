import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { RiHome4Line, RiUserReceived2Line, RiLiveLine,RiUserLine  } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineExplore } from "react-icons/md";

function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <NavLink to="/" className={styles.menuItem}>
        <RiHome4Line className={styles.menuIcon} />
        <span className={styles.title}>For You</span>
      </NavLink>
      <NavLink to="/following" className={styles.menuItem}>
        <RiUserReceived2Line className={styles.menuIcon} />
        <span className={styles.title}>Following</span>
      </NavLink>
      <NavLink to="/" className={styles.menuItem}>
        <LiaUserFriendsSolid className={styles.menuIcon} />
        <span className={styles.title}>Friends</span>
      </NavLink>
      <NavLink to="/" className={styles.menuItem}>
        <MdOutlineExplore className={styles.menuIcon} />
        <span className={styles.title}>Explore</span>
      </NavLink>
      <NavLink to="/" className={styles.menuItem}>
        <RiLiveLine className={styles.menuIcon} />
        <span className={styles.title}>LIVE</span>
      </NavLink>
      <NavLink to="/" className={styles.menuItem}>
        <RiUserLine className={styles.menuIcon} />
        <span className={styles.title}>Profile</span>
      </NavLink>
      <div className={styles.wrapper2}>
        <p className={styles.label}>Label</p>
      </div>
    </aside>
  );
}

export default Sidebar;
