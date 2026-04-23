import { Routes, Route, useLocation, NavLink } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Loja from "./pages/Loja";
import Dashboard from "./pages/Dashboard";

import CartButton from "./components/CartButton";
import CartSidebar from "./components/CartSidebar";
import "./App.css";

export default function App() {
  const [openCart, setOpenCart] = useState(false);

  
  const location = useLocation();

 
  const isLoja = location.pathname === "/loja";

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <div className="navbar">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <input id="sla" name="sla" placeholder="Buscar..." className="InputPesq"></input>
      <CartButton openCart={() => setOpenCart(true)} />
      <CartSidebar isOpen={openCart} closeCart={() => setOpenCart(false)}/>
    </div>
    </>
  );
}