import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app bg-white">
      <Navbar />
      <Home />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
