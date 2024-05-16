import styles from "./home.module.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>Home page</div>
      </div>
    </div>
  );
}

export default Home;
