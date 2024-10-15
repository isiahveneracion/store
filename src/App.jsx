import { useEffect, useState } from "react";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
// import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/products/ProductCard";

const headers = ["Sporting Goods", "Electronics"];

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  useEffect(() => {
    //call the api
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
    //run when this component is destroyed or unmount
    return () => {};
  }, []);

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
      />
      {!loading ? (
        <div className="flex flex-wrap gap-5">
          {products.map((product) => (
            <ProductCard
              key={`product-${product.id}`}
              imageSrc={product.image}
              name={product.title}
            ></ProductCard>
          ))}
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </FilterProductTable>
  );
}

export default App;
