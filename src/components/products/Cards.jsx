function Cards({ product }) {
  return (
    <div>
      <h2>title: {product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default Cards;
