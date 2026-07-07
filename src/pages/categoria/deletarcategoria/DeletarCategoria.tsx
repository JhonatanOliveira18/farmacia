import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error) {
      ToastAlerta("Erro ao buscar a categoria.", "erro")
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    setIsLoading(true)
    try {
      await deletar(`/categorias/${id}`)
      ToastAlerta("Categoria deletada com sucesso!", "sucesso")
    } catch (error) {
      ToastAlerta("Erro ao deletar a categoria.", "erro")
    }
    setIsLoading(false)
    navigate("/categorias")
  }

  return (
    <div className="container w-1/3 mx-auto my-4">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border-2 border-red-500 rounded-2xl p-4">
        <p className="text-xl text-center">{categoria.descricao}</p>
      </div>

      <div className="flex justify-around w-full gap-8 mt-4">
        <button
          className="rounded text-white bg-slate-400 hover:bg-slate-700 w-full py-2"
          onClick={() => navigate("/categorias")}
        >
          Não
        </button>
        <button
          className="rounded text-white bg-red-500 hover:bg-red-700 w-full py-2 flex justify-center"
          onClick={deletarCategoria}
        >
          {isLoading ? <ClipLoader color="#ffffff" size={24} /> : <span>Sim</span>}
        </button>
      </div>
    </div>
  )
}

export default DeletarCategoria