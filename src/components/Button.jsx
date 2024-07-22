import { Link } from "react-router-dom"

function Button({producto}) {

  return (
    <Link to={`/categoria/item/${producto.id}`} className="inline-block px-4 py-2 font-bold text-white bg-red-500 rounded cursor-pointer text-center transition duration-200 ease-in-out">Add</Link>
  )
}

export default Button