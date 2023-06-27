import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div className="app bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
