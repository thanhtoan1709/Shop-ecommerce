import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginSuccess from "./components/LoginForm/LoginSuccess";
import LoginForm from "./components/LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeCompo/Home";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Acs from "./Pages/Accessories";
import Bottom from "./Pages/Bottom";
import Top from "./Pages/Top";
import HandBag from "./Pages/Handbag";
import Sale from "./Pages/Sale";
import Collections from "./Pages/Collections";
import ProductDetail from "./components/Product/ProductDetail";
import Cart from "./components/cart/Cart";
import Register from "./components/Register/Register";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Acs" element={<Acs />} />
        <Route path="/Bottom" element={<Bottom />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Top" element={<Top />} />
        <Route path="/HandBag" element={<HandBag />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/login-success/:userID" element={<LoginSuccess />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
