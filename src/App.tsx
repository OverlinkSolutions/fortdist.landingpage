import { useRef } from "react";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import FrontBanner from "./components/FrontBanner";
import Header from "./components/Header/Header";
import { MapContact } from "./components/MapContact";
import { Presentation } from "./components/Presentation";
import { Recomendations } from "./components/Recomendations";

function App() {

  return (
    <div className="App">
      <Header />
      <FrontBanner />
      <Presentation />
      <Cards />
      <Recomendations />
      <MapContact />
      <Footer />
    </div>
  );
}

export default App;
