const NavBar = () => {
    return (
        <nav>
            {/* {Brand} */}
            <h1>L&O Indumentaria y Calzado</h1>

            {/* {Links} */}

            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Calzado</a>
                </li>
                <li>
                    <a href="#">Indumentaria</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>

            {/* {CartWidget} */}

            <div>CartWidget</div>
        </nav>
        );
};

export default NavBar;