function Home() {
  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-2 items-center gap-10 px-8 py-8 text-emerald-800">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold">Farmácia</h2>

          <p className="text-xl text-emerald-900">
            Encontre os melhores produtos organizados por categoria.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
          alt="Imagem Home - Farmácia"
          className="rounded-2xl w-full shadow-lg"
        />
      </div>
    </div>
  )
}

export default Home