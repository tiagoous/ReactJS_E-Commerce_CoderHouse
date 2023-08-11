import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                {/* {Brand} */}
                <a href="#" className="navbar-brand">L&O Indumentaria y Calzado</a>

                {/* {Links} */}

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Calzado</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Indumentaria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Contacto</a>
                    </li>
                </ul>

                {/* {CartWidget} */}

                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;