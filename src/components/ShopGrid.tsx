import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Product {
  _id: string;
  name: string;
  price: number;
}

const ShopGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Product[]>("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product._id} className="p-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
        </li>
      ))}
      {error && <p className="text-red-500">{error}</p>}
    </ul>
  );
};

export default ShopGrid;
