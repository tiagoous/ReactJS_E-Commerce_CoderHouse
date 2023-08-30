import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando ...</h2>;
  }
  if (!item) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>U$D{item.price}</p>
      <p>{item.category}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail