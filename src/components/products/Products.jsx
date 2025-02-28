import Card from "./Cards";
function Products({ products }) {
  return (
    <>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </>
  );
}

export default Products;
