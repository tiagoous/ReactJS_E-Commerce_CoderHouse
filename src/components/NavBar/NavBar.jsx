import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                {/* {Brand} */}
                <h1>
                    <Link to="/" className="navbar-brand">L&O Indumentaria y Calzado</Link>
                </h1>

                {/* {Links} */}

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link active">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/shoes" className="nav-link active">Calzado</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/clothes" className="nav-link active">Indumentaria</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/accesories" className="nav-link active">Accesorios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link active">Contacto</NavLink>
                    </li>
                </ul>

                {/* {CartWidget} */}

                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;