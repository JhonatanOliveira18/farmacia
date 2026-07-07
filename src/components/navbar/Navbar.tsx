import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-emerald-700 text-white shadow-md">
      <div className="container flex justify-between text-lg mx-8">
        <Link to="/" className="text-2xl font-bold">Farmácia</Link>
        <div className="flex gap-4">
          <Link to="/categorias" className="hover:text-emerald-200 transition">Categorias</Link>
          <Link to="/produtos" className="hover:text-emerald-200 transition">Produtos</Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar