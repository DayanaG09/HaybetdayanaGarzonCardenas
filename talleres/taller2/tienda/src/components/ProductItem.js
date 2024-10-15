export const ProductItem = ({ product, agregar }) => {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => agregar(product.id)}>Agregar al carrito</button>
    </div>
  );
};
