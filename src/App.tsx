import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import FrontBanner from "./components/FrontBanner";
import Header from "./components/Header/Header";
import { MapContact } from "./components/MapContact";
import Materials from "./components/Materials";
import { Presentation } from "./components/Presentation";
import Space from "./components/Space/Space";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <FrontBanner />
      <Space />
      <Presentation />
      <Materials />
      <Cards />
      <MapContact />
      <Footer />
    </div>
  );
}

export default App;
