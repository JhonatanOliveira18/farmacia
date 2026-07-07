function Footer() {
  const data = new Date().getFullYear()
  return (
    <div className="flex justify-center bg-emerald-700 text-white py-4">
      <p>Farmácia - Jhonatan Oliveira | Copyright: {data}</p>
    </div>
  )
}
export default Footer