import styles from "../components/HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.section_hero}>
      <h3 className={styles.heading}>A joke a day keeps the doctor away</h3>
      <p className={styles.paragraph}>
        If you joke wrong way, your teeth have to pay. (Serious)
      </p>
    </div>
  );
}

export default HeroSection;
