import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import QuotesSection from "./components/QuotesSection";
import "./index.css";

function App() {
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
