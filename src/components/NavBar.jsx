import CartWidget from "./CartWidget"

function NavBar(props) {
    if (props.isHeader == true) {
        return (
            <>
                <nav>
                    <ul className="nav">
                        <a href="#"><img src="/logo.PNG" alt="Imagen del logo de la empresa" /></a>
                        <li><a href="#"></a>HOME</li>
                        <li><a href="#"></a>TIENDA</li>
                        <li><a href="#"></a>SOBRE NOSOTROS</li>
                        <li><a href="#"></a>CONTACTO</li>
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
                        <li><a href="#"></a>PREGUNTAS FRECUENTES</li>
                        <li><a href="#"></a>TRABAJÁ CON NOSOTROS</li>
                        <li><a href="#"></a>TÉRMINOS Y CONDICIONES</li>
                        <li><a href="#"></a>CONTACTO</li>
                    </ul> 
                </nav>
            </> 
        )
    }
}

export default NavBar;