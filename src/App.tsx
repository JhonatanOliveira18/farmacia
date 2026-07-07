import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import ListarCategorias from "./pages/categoria/listarcategorias/ListarCategorias"
import FormCategoria from "./pages/categoria/formcategoria/FormCategoria"
import DeletarCategoria from "./pages/categoria/deletarcategoria/DeletarCategoria"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 bg-emerald-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </main>

        <Footer />
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
