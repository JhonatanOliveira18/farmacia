import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border-2 border-emerald-700 rounded-2xl overflow-hidden flex flex-col">
      <div className="p-4 bg-emerald-50">
        <h3 className="text-xl font-bold text-emerald-800">{categoria.nome}</h3>
        <p className="text-sm text-emerald-700">{categoria.descricao}</p>
      </div>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white bg-emerald-600 hover:bg-emerald-800 flex items-center justify-center py-2"
        >
          Editar
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-white bg-red-500 hover:bg-red-700 flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria