import { useEffect, useState } from "react";
import { useProductsStore } from "../store/products.store"; 
import CardList from "../components/CardList"; 

function Home() {
  const products = useProductsStore((state) => state.products);
  const getProducts = useProductsStore((state) => state.getProducts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="container">
        <h2>Productos</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Buscar producto..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <CardList data={filteredProducts} />
      </div>
    </section>
  );
}

export default Home;
