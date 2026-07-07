import { useEffect, useState } from "react"
import type Categoria from "../../../models/Categoria"
import { listar } from "../../../services/Service"
import CardCategoria from "../../../components/categoria/cardcategoria/CardCategoria"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    try {
      await listar("/categorias", setCategorias)
    } catch (error) {
      ToastAlerta("Erro ao buscar as categorias.", "erro")
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <div className="flex justify-center w-full py-4">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  )
}

export default ListarCategorias