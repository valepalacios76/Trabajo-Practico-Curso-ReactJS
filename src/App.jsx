import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Carrito from "./components/Carrito.jsx";
import Checkout from "./components/Checkout.jsx";

function App(){
  return(
    <CartProvider>
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/categoria/:id" element={<ItemListContainer />}/>
        <Route path="/categoria/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>

      <Footer />

    </BrowserRouter>
    </CartProvider>
  )
}
export default App;
