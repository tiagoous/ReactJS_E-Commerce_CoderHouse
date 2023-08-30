const products = [

    // Zapatos
    { id: "2023081001", name: "Bota Cuero Negra", price: 80, category: "shoes" },
    { id: "2023081002", name: "Bota Cuero Marron", price: 80, category: "shoes" },
    { id: "2023081003", name: "Bota Cuero Gastado", price: 80, category: "shoes" },
    { id: "2023081004", name: "Zapato Cuero Negro", price: 65, category: "shoes" },
    { id: "2023081005", name: "Zapato Cuero Gastado", price: 65, category: "shoes" },
    { id: "2023081006", name: "Zapato Cuero Marron", price: 65, category: "shoes" },

    // Indumentaria
    { id: "2023082001", name: "Camisa Leñador Roja", price: 10, category: "clothes" },
    { id: "2023082002", name: "Camisa Leñador Verde", price: 10, category: "clothes" },
    { id: "2023082003", name: "Camisa Leñador Azul", price: 10, category: "clothes" },
    { id: "2023082004", name: "Camisa Leñador Blanca", price: 10, category: "clothes" },
    { id: "2023082005", name: "Jean Negro Gastado", price: 30, category: "clothes" },
    { id: "2023082006", name: "Jean Azul Gastado", price: 30, category: "clothes" },

    // Accesorios
    { id: "2023083001", name: "Reloj Digital Negro", price: 15, category: "accesories" },
    { id: "2023083002", name: "Reloj Digital Rojo", price: 15, category: "accesories" },
    { id: "2023083003", name: "Reloj Digital Verde", price: 15, category: "accesories" },
    { id: "2023083004", name: "Collar Budista", price: 5, category: "accesories" }
];

//getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === id);

            if (product) {
                resolve(product);
            } else {
                reject("No existe el producto");
            }
        }, 1000);
    });
};


//getProducts

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = category
                ? products.filter(product => product.category === category)
                : products;

            resolve(productsFiltered);
        }, 1000);
    });
};