import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import Coins from "./components/Coins/Coins";
import BdAddress from "./components/Contact/BdAddress";
import Contact from "./components/Contact/Contact";
import UsAddress from "./components/Contact/UsAddress";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails />}></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="bd-address" element={<BdAddress />}></Route>
          <Route path="us-address" element={<UsAddress />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
