import styles from "../components/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.horizontal_ruler}></div>
      <p className={styles.paragraph}>
        The website is created as part of Hlsolutions program. The materials
        contained on this website are provided for general information only and
        do not constitute any form of advice. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the information
        contained on this site.
      </p>
      <div className={styles.copyright}>Copyright 2021 HLS</div>
    </footer>
  );
}

export default Footer;
