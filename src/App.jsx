import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import QuotesSection from "./components/QuotesSection";
import "./index.css";
import Cookies from "js-cookie";
import { useEffect } from "react";
import quotes from "./assets/QuotesData";

function App() {
  const setDataToCookies = () => {
    Cookies.set("quotes", JSON.stringify(quotes), { expires: 7 });
  };

  useEffect(() => {
    setDataToCookies();
  }, []);

  return (
    <div className="container">
      <Header />
      <HeroSection />
      <QuotesSection />
      <Footer />
    </div>
  );
}

export default App;
