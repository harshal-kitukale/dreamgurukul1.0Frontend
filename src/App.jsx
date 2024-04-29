import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}

export default App;
