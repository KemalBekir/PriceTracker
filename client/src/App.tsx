import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
import { AuthProvider } from "./cotexts/authContext";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="app bg-white">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:itemId" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
