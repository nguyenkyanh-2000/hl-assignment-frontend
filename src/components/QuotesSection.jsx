import styles from "../components/QuotesSection.module.css";

function QuotesSection() {
  return (
    <div className={styles.section_quotes}>
      <div className={styles.paragraph}>
        {`A child asked his father, "How were people born?" So his father said,
        "Adam and Eve made babies, then their babies became adults and made
        babies, and so on." The child then went to his mother, asked her the
        same question and she told him, "We were monkeys then we evolved to
        become like we are now." The child ran back to his father and said, "You
        lied to me!" His father replied, "No, your mom was talking about her
        side of the family."`}
      </div>
      <div className={styles.btn_container}>
        <button className={`${styles.btn} ${styles.btn_blue}`}>
          This is funny!
        </button>
        <button className={`${styles.btn} ${styles.btn_green}`}>
          This is not funny.
        </button>
      </div>
    </div>
  );
}

export default QuotesSection;
