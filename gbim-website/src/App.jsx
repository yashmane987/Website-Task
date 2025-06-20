import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GBIMFooter from "./components/GBIMFooter";
import FAQ from "./Pages/FAQ";
import DesignSection from './Pages/DesignSection ';
import Offers from "./Pages/Offers";
import Creative from "./Pages/Creative";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <DesignSection/>
        <Creative/>
        <Offers/>
        <FAQ/>
        <Footer />
        <GBIMFooter/>


      </div>
    </>
  );
}

export default App;
