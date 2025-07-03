import "./App.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Sobre from "./components/sobre/Sobre";
import Introducao from "./components/introducao/Introducao";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col min-h-[80vh] bg-[#fff4e6]">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Introducao />} />
              <Route path="/quemsomos" element={<Sobre />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
