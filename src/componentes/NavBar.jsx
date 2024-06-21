import CartWidget from "./CartWidget"
import {NavLink} from "react-router-dom"

function NavBar(props) {
    if (props.isHeader == true) {
        return (
            <>
                <nav>
                    <ul className="nav">
                        <a href="#"><img src="/logo.PNG" alt="Imagen del logo de la empresa" /></a>
                        <NavLink to="/">INICIO</NavLink>
                        <NavLink to="/categoria/beauty">MAQUILLAKE</NavLink>
                        <NavLink to="/categoria/fragrances">PERFUMES</NavLink>
                        <NavLink to="/categoria/furniture">DECO</NavLink>
                        <li><CartWidget /></li>
                    </ul> 
                </nav>
            </> 
        )
    } else{
        return (
            <>
                <nav>
                    <ul className="nav">
                    </ul> 
                </nav>
            </> 
        )
    }
}

export default NavBar;