import React, { FC, ReactElement } from "react";
import BButton from "../BButton/index";
import "./ProductCard.scss";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
}) => {
  const handleAddToCard = () => {
    console.log(`Product ${id} have added to card`);
  };
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <div className="flex items-center justify-center mt-5">
          <BButton children={"Add"} onClick={handleAddToCard}></BButton>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
