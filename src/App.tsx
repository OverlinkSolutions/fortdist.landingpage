import { Cards } from "./components/Cards";
import FrontBanner from "./components/FrontBanner";
import Header from "./components/Header/Header";
import { MapContact } from "./components/MapContact";
import { Presentation } from "./components/Presentation";

function App() {
  return (
    <div className="App">
      <Header />
      <FrontBanner />
      <Presentation />
      <Cards />
      <MapContact />
    </div>
  );
}

export default App;
