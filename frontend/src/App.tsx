import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/navbar";
import Footers from "./components/Footer/Footer";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import UpdateProducts from "./components/UpdateProducts";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import PrivateComponents from "./components/PrivateComponents";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponents />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/updateproducts/:id" element={<UpdateProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;
