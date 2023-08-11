const CartWidget = () => {
    return <div>
        <button className="btn btn-outline-light position-relative">
            <i className="bi bi-cart4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                5
                <span className="visually-hidden">Productos en el Carrito</span>
            </span>
        </button>
    </div>
};

export default CartWidget;