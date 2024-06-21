import Header from "./componentes/Header.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import ItemDetailContainer from "./componentes/ItemDetailContainer.jsx"
import Footer from "./componentes/Footer.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
 return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:id" element={<ItemListContainer/>}/>
      <Route path="/categoria/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>

    <ItemListContainer />
    <Footer />
  </BrowserRouter>
 )
}

export default App
