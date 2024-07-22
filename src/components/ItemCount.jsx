
function ItemCount({cantidad, handleSumar, handleRestar, handleAgregar}) {

  return (
    <div className='pl-4'>
        <div className='flex mt-4'>
            <button onClick={handleRestar} className="bg-red-500 pl-4 pr-4 rounded-md font-bold ">-</button>
            <p className='text-black pl-4 pr-4'>{cantidad}</p>
            <button onClick={handleSumar} className="bg-red-500 pl-4 pr-4 rounded-md font-bold ">+</button>
        </div>
        <button onClick={handleAgregar} className="bg-red-500 pl-4 pr-4 pb-2 pt-2 rounded-md font-bold mt-4">Add to cart</button>
    </div>
  )
}

export default ItemCount