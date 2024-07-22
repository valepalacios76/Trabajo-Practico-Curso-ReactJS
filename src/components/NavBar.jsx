import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <nav className="flex bg-red-500 items-center justify-between ">
            <img src="/logo.PNG" className="h-12 m-4 mt-2"/>
            <ul className="flex items-center">
                <li className="p-4 text-white font-extrabold"><Link to="/">HOME</Link></li>
                <li className="p-4 text-white font-extrabold"><Link to="/categoria/beauty">BEAUTY</Link></li>
                <li className="p-4 text-white font-extrabold"><Link to="/categoria/fragrances">FRAGRANCES</Link></li>
                <li className="p-4 text-white font-extrabold"><Link to="/categoria/furniture">FURNITURE</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar