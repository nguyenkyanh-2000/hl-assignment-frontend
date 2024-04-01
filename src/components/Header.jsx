import styles from "./Header.module.css";
import smilingDaisy from "../assets/smiling-daisy.jpg";
import logo from "../assets/logo.jpeg";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.img_container}>
        <img src={logo}></img>
      </div>
      <div className={styles.user_info}>
        <div className={styles.disclaimer}>
          <h4>Handicrafted by</h4>
          <p>Jim HLS</p>
        </div>
        <div className={styles.img_container}>
          <img src={smilingDaisy}></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
