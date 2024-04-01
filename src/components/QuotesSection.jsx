import styles from "../components/QuotesSection.module.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function QuotesSection() {
  const [quote, setQuote] = useState("");
  const [unusedQuotes, setUnusedQuotes] = useState([]);

  useEffect(() => {
    const storedQuotes = Cookies.get("quotes");
    const quotesArray = storedQuotes ? JSON.parse(storedQuotes) : [];
    if (quotesArray && quotesArray.length > 0) {
      setQuote(quotesArray[0]);
      quotesArray.shift();
    }

    setUnusedQuotes(quotesArray);
  }, []);

  const handleNextQuote = () => {
    if (unusedQuotes.length === 0) {
      setQuote({
        text: "That's all the jokes for today! Come back another day!",
      });
    } else {
      const shuffledQuotes = unusedQuotes.sort(() => Math.random() - 0.5);
      const nextQuote = shuffledQuotes[0];
      setUnusedQuotes((prevUnusedQuotes) => prevUnusedQuotes.slice(1));
      setQuote(nextQuote);
    }
  };

  return (
    <div className={styles.section_quotes}>
      <div className={styles.paragraph}>{quote.text}</div>
      <div className={styles.btn_container}>
        <button
          onClick={handleNextQuote}
          className={`${styles.btn} ${styles.btn_blue}`}
        >
          This is funny!
        </button>
        <button
          onClick={handleNextQuote}
          className={`${styles.btn} ${styles.btn_green}`}
        >
          This is not funny.
        </button>
      </div>
    </div>
  );
}

export default QuotesSection;
