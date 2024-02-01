import { FC, ReactElement } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
type ProductListProps = {
  products: {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }[];
};

const ProductList: FC<ProductListProps> = ({ products }): ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="mb-8">
          <ProductCard key={product.id} {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
