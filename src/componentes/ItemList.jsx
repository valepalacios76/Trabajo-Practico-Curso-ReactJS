import {NavLink} from "react-router-dom"


function ItemList({items}) {
    return (
        <>
        <h2 className="font-bold text-2xl text-center m-6">INICIO</h2>
        <section className="grid grid-cols-1 sd:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 m-5">
            {items.map((item,indice) => {
                return(
                    <section key={indice} className="p-5 bg-white rounded-md hover:scale-105 transition-all">
                        <img src={item.images[0]} alt={item.title} className="aspect-square object-contain" />
                        <h2 className="font-bold truncate">{item.title}</h2>
                        <p className="text-gray-500">${item.price}</p>
                        {/* <NavLink to="/item/" className="hover:text-white bg-pink-500 text-white font-bold py-2 px-4 m-5 mt-4 rounded">Ver detalles</NavLink> */}
                        <button className="bg-pink-500 font-bold py-2 px-4 m-5 rounded"><a className="text-white" href={item.id}>Ver detalles</a></button>
                    </section>
                )
            })}
       </section>
       </>
    )
   }
   
   export default ItemList;