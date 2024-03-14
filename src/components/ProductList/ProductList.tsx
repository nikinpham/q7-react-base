import { FC, ReactElement } from "react";
import "./ProductList.scss";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }): ReactElement => {
  if (!Array.isArray(products)) {
    console.error("Invalid products data:", products);
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="mb-8">
          {/* <ProductCard key={product.id} {...product} /> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
