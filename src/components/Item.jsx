import Button from "./Button"

const Item = ({producto}) => { 
    return (
        <div className="bg-white text-black p-4 rounded-md m-4 hover:scale-105 transition-all">
            <img src={producto.images[0]} alt={producto.title} className="aspect-square object-contain" />
            <h2 className="font-bold truncate">{producto.title}</h2>
            <p className="text-gray-500">${producto.price}</p>
            <Button producto={producto}/>
        </div>
    )
}

export default Item