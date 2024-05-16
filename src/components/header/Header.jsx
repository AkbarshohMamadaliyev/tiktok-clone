import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <button className={styles.searchBtn}>
            <BsSearch />
          </button>
        </div>
        <div className={styles.actions}>
          <button className={styles.actionsBtn1}><FaPlus className={styles.plusBtn} />Upload</button>
          <button className={styles.actionsBtn2}>Log in</button>
          <button className={styles.moreBtn}><BsThreeDotsVertical /></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
