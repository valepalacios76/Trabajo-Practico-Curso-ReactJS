import Item from "./Item"

const ItemList = ({productos}) => {
    console.log(productos)
  return (
    <main>
        <section className="text-black m-7 text-center">
            <h1 className="font-bold">Welcome to GLAM BEAUTY✨</h1>
            <p>Glam Beauty, your premier destination for exquisite beauty, captivating fragrances, and luxurious furniture. Step into a world where elegance meets sophistication, and every corner offers a glimpse into refined living!</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            {productos.map((prod) => <Item producto={prod} key={prod.id}/> )}
        </div>
    </main>
  )
}

export default ItemList